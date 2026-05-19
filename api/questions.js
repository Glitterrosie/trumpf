import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
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

function save(data) {
  const dir = dirname(DATA_PATH)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2))
}

/* Strip obvious PII before saving */
function removePII(text) {
  return text
    .replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g, '[E-MAIL ENTFERNT]')
    .replace(/\b(\+?[\d][\d\s\-().]{7,}\d)\b/g, '[TELEFON ENTFERNT]')
    .replace(/\b(Herr|Frau|Mr\.|Mrs\.|Dr\.)\s+[A-ZÄÖÜ][a-zäöüß]+\b/g, '[NAME ENTFERNT]')
}

function detectCategory(question) {
  const q = question.toLowerCase()
  if (/preis|kost|günstig|teuer|rabatt|budget|lizenz|abo|subscription/.test(q)) return 'Preisfrage'
  if (/feature|funktion|wunsch|könnte|möchte|wäre toll|hinzufügen|ergänzen|feature request/.test(q)) return 'Feature-Wunsch'
  if (/problem|fehler|bug|funktioniert nicht|geht nicht|absturz|crash|error/.test(q)) return 'Technisches Problem'
  if (/kaufen|bestellen|erwerben|demo|testen|ausprobieren|anschaffen|purchase|buy/.test(q)) return 'Kaufinteresse'
  if (/integration|kompatibel|verbinden|api|schnittstelle|connect/.test(q)) return 'Integration'
  return 'Support'
}

function anonymousId() {
  return 'anonymous_' + Math.random().toString(36).slice(2, 11)
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method === 'GET') {
    const data = load()
    return res.status(200).json(data)
  }

  if (req.method === 'POST') {
    const { question, sessionId } = req.body || {}
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'question required' })
    }

    const cleaned = removePII(question.trim().slice(0, 500))
    const entry = {
      customerId:  sessionId || anonymousId(),
      timestamp:   new Date().toISOString(),
      question:    cleaned,
      category:    detectCategory(cleaned),
    }

    const data = load()
    data.questions.push(entry)
    save(data)
    return res.status(201).json({ ok: true })
  }

  return res.status(405).end()
}
