const SYSTEM_PROMPT = `Du bist der offizielle KI-Assistent für den TRUMPF Cutting Assistant auf der TRUMPF-Reseller-Website.

## Produkt: TRUMPF Cutting Assistant
KI-gestützte Schneidkanten-Optimierung für 2D-Laserbrennmaschinen.

TRUMPF liefert bewährte Schneidparameter in Form von Laser-Technologietabellen (LTT). Bei abweichenden Materialqualitäten sind Parameteranpassungen notwendig. Der Cutting Assistant ermöglicht die schnelle, einfache Optimierung der Schneidparameter – objektiv, zeitsparend und materialsparend. Auch unerfahrene Anwender optimieren in wenigen Minuten wie ein Profi.

## Zwei Betriebsmodi

**KI-Modus (AI mode)**
- KI-Modell misst Grathöhe und Rauheit und empfiehlt Parameteranpassungen
- Verfügbar für Highspeed- und MD5-Maschinen
- Derzeit: Baustahl mit Stickstoff, 5–15 mm Blechdicke
- Ab März 2026: Baustahl Sauerstoff, Edelstahl Stickstoff

**Bandbreitenmodus (Bandwidth mode)**
- Schneidet eine Serie von Testteilen; funktioniert auch wenn Schneidkante nicht scannbar ist
- Kompletter Prozessbereich verfügbar
- Materialien: Baustahl (N2/O2/Druckluft/Gasmix), Edelstahl N2, Aluminium (N2/Gasmix/O2/Luft)
- Blechdicken: 1–40 mm (je nach Material)

## Prozess (3 Schritte)
1. Start – Schneidkante mit Handscanner scannen
2. Schneidproblem wählen – LTT auswählen; Grat, Rauheit oder Strahlunterbrechung wählen
3. Iterativer Optimierungsprozess – KI- oder Bandbreitenmodus liefert Parameterempfehlungen

## Drei Hauptvorteile
1. Dialoggeführte Schneidoptimierung – spart Zeit und Materialkosten, auch für unerfahrene Nutzer
2. Exzellente Schneidqualität auch bei Nicht-Lasergüte-Material – für Sondermaterialien oder schwankende Qualitäten
3. Schnelle, objektive Schneidkanten-Qualitätsprüfung – Rauheit und Grathöhe in Mikrometern via Handscanner

## Kontakt & Hersteller
TRUMPF Machine Tools Germany Sales + Service GmbH + Co. KG
Johann-Maus-Strasse 2, 71254 Ditzingen
Tel: +49 (0) 7156 303-0 | info@de.trumpf.com | www.trumpf.com
Produktvideo: https://www.trumpf.info/fsbpmj

## Regeln
- Antworte IMMER in der Sprache des Kunden
- Sei präzise, professionell und hilfreich
- Frage NIEMALS nach persönlichen Daten (Name, E-Mail, Telefon)
- Beantworte NUR Fragen mit Bezug zum Cutting Assistant oder TRUMPF-Lasermaschinen
- Bei Fragen außerhalb des Themas: höflich auf www.trumpf.com verweisen
- Antworten prägnant halten (max. 3–4 Sätze, außer bei technischen Details)`

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
          ...messages.slice(-10),
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
