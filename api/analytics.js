import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_PATH = process.env.VERCEL
  ? '/tmp/questions.json'
  : join(__dirname, '..', 'data', 'questions.json')

function load() {
  if (!existsSync(DATA_PATH)) return { questions: [] }
  try { return JSON.parse(readFileSync(DATA_PATH, 'utf8')) }
  catch { return { questions: [] } }
}

/* Compute trend (questions per day) without AI */
function computeTrend(questions) {
  const counts = {}
  for (const q of questions) {
    const day = q.timestamp?.slice(0, 10) || 'unknown'
    counts[day] = (counts[day] || 0) + 1
  }
  return Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ date, count }))
}

/* Category counts without AI */
function computeCategories(questions) {
  const counts = {}
  for (const q of questions) {
    const cat = q.category || 'Support'
    counts[cat] = (counts[cat] || 0) + 1
  }
  return Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .map(([name, count]) => ({ name, count }))
}

const ANALYTICS_PROMPT = (questions) => `
Du analysierst anonyme Kundenfragen für den TRUMPF Cutting Assistant.
Gruppiere semantisch ähnliche Fragen zusammen. Zähle nicht jede Frage separat,
sondern fasse Fragen mit ähnlichem Inhalt oder Thema zusammen.

Kundenfragen (${questions.length} Einträge):
${questions.map((q, i) => `${i + 1}. [${q.category}] ${q.question}`).join('\n')}

Gib NUR dieses JSON zurück (kein anderer Text):
{
  "topQuestions": [
    {"topic": "kurze Beschreibung des Themas", "count": N, "example": "Beispielfrage"}
  ],
  "featureRequests": [
    {"feature": "Feature-Name", "count": N}
  ],
  "customerNeeds": [
    {"need": "Kundenbedürfnis", "count": N}
  ],
  "insights": "2-3 Sätze: wichtigste Erkenntnisse für Vertrieb und Produktentwicklung"
}

Regeln:
- topQuestions: max 10 Einträge, absteigend nach count
- featureRequests: nur wenn explizite Feature-Wünsche erkennbar, sonst leeres Array
- customerNeeds: übergeordnete Bedürfnisse (z.B. Kostenreduktion, Zeitersparnis), max 8
- Antworte auf Deutsch
`

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') return res.status(405).end()

  const { questions } = load()
  const trend      = computeTrend(questions)
  const categories = computeCategories(questions)

  /* With fewer than 3 questions, skip AI analysis */
  if (questions.length < 3) {
    return res.status(200).json({
      total: questions.length,
      topQuestions:    [],
      featureRequests: [],
      customerNeeds:   [],
      categories,
      trend,
      insights: questions.length === 0
        ? 'Noch keine Kundenfragen vorhanden.'
        : 'Zu wenige Fragen für eine KI-Analyse (mindestens 3 erforderlich).',
    })
  }

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY not configured' })
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: ANALYTICS_PROMPT(questions) }],
        max_tokens: 1500,
        temperature: 0.2,
        response_format: { type: 'json_object' },
      }),
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.error?.message || 'Groq API error')

    const ai = JSON.parse(data.choices[0].message.content)

    res.status(200).json({
      total:           questions.length,
      topQuestions:    ai.topQuestions    || [],
      featureRequests: ai.featureRequests || [],
      customerNeeds:   ai.customerNeeds   || [],
      categories,
      trend,
      insights:        ai.insights || '',
    })
  } catch (err) {
    console.error('analytics error:', err)
    res.status(500).json({ error: err.message })
  }
}
