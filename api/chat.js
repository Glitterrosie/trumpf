const SYSTEM_PROMPT = `Du bist der offizielle KI-Assistent für den TRUMPF Cutting Assistant – eine KI-basierte Optimierungslösung für 2D-Laserbrennmaschinen.

Der TRUMPF Cutting Assistant bietet folgende Kernfunktionen:
- KI-gestützte automatische Schachtelung (Nesting) zur Minimierung von Materialabfall
- Intelligente Schneidpfad-Optimierung für kürzere Zykluszeiten
- Common-Cut-Line-Technologie für maximale Blechausnutzung
- Mikrosteg-Optimierung (Micro Joints) für sichere Teilentnahme
- Automatische Parameteranpassung je nach Material und Stärke
- Integration mit TRUMPF TruTops Boost und TruTops Fab Software-Ökosystem
- Kompatibilität mit allen TRUMPF 2D-Lasermaschinen der TruLaser-Serie
- Unterstützung für Stahl, Edelstahl, Aluminium, Messing, Kupfer und weitere Metalle
- Echtzeit-Empfehlungen zur Prozessverbesserung und Qualitätssicherung
- Cloud-basierte Analyse und Reporting-Funktionen

Preise und Lizenzierungsmodelle:
- Modularaufbau: Basislizenz + optionale Erweiterungsmodule
- Flexible Mietmodelle (SaaS) und Kauflizenzen verfügbar
- Für genaue Preise bitte Kontakt mit dem TRUMPF Vertrieb aufnehmen

Du beantwortest ausschließlich Fragen mit konkretem Bezug zum TRUMPF Cutting Assistant:
- Produktfragen, technische Spezifikationen, Funktionsumfang
- Preisfragen und Lizenzierungsmodelle
- Integration, Kompatibilität und Systemanforderungen
- Technischer Support und Problemlösung
- Kaufberatung und Demo-Anfragen

Wichtige Regeln:
- Antworte IMMER in der Sprache des Kunden
- Sei präzise, professionell und hilfsbereit
- Frage NIEMALS nach persönlichen Daten (Name, E-Mail, Telefon)
- Bei Fragen außerhalb des Themas: höflich auf TRUMPF-Kontakt verweisen (www.trumpf.com/kontakt)
- Halte Antworten prägnant (max. 3-4 Sätze, außer bei technischen Details)`

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  const { messages } = req.body || {}
  if (!Array.isArray(messages)) return res.status(400).json({ error: 'messages required' })

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) return res.status(500).json({ error: 'GROQ_API_KEY not configured' })

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.slice(-10), // keep last 10 messages for context
        ],
        max_tokens: 512,
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.error?.message || 'Groq API error')

    res.status(200).json({ reply: data.choices[0].message.content })
  } catch (err) {
    console.error('chat error:', err)
    res.status(500).json({ error: err.message })
  }
}
