export const LANGUAGES = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'da', label: 'Dansk' },
  { code: 'ro', label: 'Română' },
]

export const DEFAULT_LANG = 'de'

/* ─── Product content (sourced from official TRUMPF Cutting Assistant flyer) ─── */
const product = {
  de: {
    headline:    'KI-gestützte Schneidkanten-Optimierung',
    subheadline: 'für Ihre 2D-Laserbrennmaschine',
    intro: 'TRUMPF liefert bewährte Schneidparameter in Form von Laser-Technologietabellen. Bei abweichenden Materialqualitäten sind Parameteranpassungen notwendig. Der Cutting Assistant ermöglicht die schnelle und einfache Optimierung Ihrer Schneidparameter – objektiv, zeitsparend und materialsparend.',
    advantagesTitle: 'Vorteile auf einen Blick',
    advantagesSubtitle: 'Schneidkanten-Optimierung – für Ihr Material, für Ihre Mitarbeiter',
    advantages: [
      {
        title: 'Dialoggeführte Schneidoptimierung',
        body: 'Auch unerfahrene Anwender optimieren Schneidparameter in wenigen Minuten wie ein Profi – spart Zeit und Materialkosten.',
      },
      {
        title: 'Exzellente Schneidqualität auch bei Nicht-Lasergüte-Material',
        body: 'Der Cutting Assistant empfiehlt geeignete Optimierungen – für Sondermaterialien oder Materialien mit schwankender Qualität.',
      },
      {
        title: 'Schnelle Schneidkanten-Qualitätsprüfung',
        body: 'Der Handscanner ermöglicht eine objektive Beurteilung der Teilequalität. Der Cutting Assistant zeigt Rauheit und Grathöhe in Mikrometern an.',
      },
    ],
    stepsTitle: 'Einfache Bedienung durch dialoggeführte Schneidoptimierung',
    stepsSubtitle: 'Gezielte Anpassung der Parameter basierend auf dem spezifischen Schneidproblem und Material',
    steps: [
      { num: '01', title: 'Start',                  body: 'Schneidkante mit dem Handscanner scannen.' },
      { num: '02', title: 'Schneidproblem wählen',  body: 'Laser-Technologietabelle (LTT) wählen. Schneidproblem wie Grat, Rauheit oder Strahlunterbrechung auswählen.' },
      { num: '03', title: 'Iterativer Optimierungsprozess', body: 'KI-Modus: Grat- und Rauheitsmessung sowie Parameterempfehlung durch KI-Modell. Bandbreitenmodus: Schneiden einer Serie von Testteilen.' },
    ],
    modesTitle: 'Anwendungsspektrum',
    aiMode:        'KI-Modus',
    bandwidthMode: 'Bandbreitenmodus',
    aiModeNote:    'Highspeed und MD5 · Baustahl N₂ 5–15 mm verfügbar · weitere ab März 2026',
    bandwidthModeNote: 'Kompletter Prozessbereich · Baustahl, Edelstahl, Aluminium · 1–40 mm',
    cta: 'Produktvideo ansehen',
  },
  en: {
    headline:    'AI-assisted cutting edge optimization',
    subheadline: 'for your 2D laser cutting machine',
    intro: 'TRUMPF provides proven cutting parameters with its machines in the form of laser technology tables. For differing material grades, parameter adjustments are still necessary. With the Cutting Assistant, you can quickly and easily optimize your cutting parameters — saving time and material costs, and ensuring excellent cutting quality.',
    advantagesTitle: 'The advantages at a glance',
    advantagesSubtitle: 'Cutting edge optimization – in your material, for your employees',
    advantages: [
      {
        title: 'Dialog-guided cutting data optimization',
        body: 'Even inexperienced users can optimize cutting data like a pro in just a few minutes – saving both time and material costs.',
      },
      {
        title: 'Excellent cutting quality even in non-laser-grade material',
        body: 'The Cutting Assistant suggests suitable optimizations – whether for special materials or materials with fluctuating quality.',
      },
      {
        title: 'Quick inspection of cutting-edge quality',
        body: 'The handheld scanner allows for an objective assessment of part quality. The Cutting Assistant displays roughness and burr height in micrometers.',
      },
    ],
    stepsTitle: 'Easy handling due to dialog-guided cutting data optimization',
    stepsSubtitle: 'Targeted adjustment of parameters based on the specific cutting issue and material',
    steps: [
      { num: '01', title: 'Start',                body: 'Scan the cutting edge with the handheld scanner.' },
      { num: '02', title: 'Select cutting issue', body: 'Select Laser Technology Table (LTT). Select from a variety of cutting issues such as burrs, roughness, or beam interruption.' },
      { num: '03', title: 'Iterative optimization process', body: 'AI mode: Burr and roughness measurement and parameter recommendation by AI model. Bandwidth mode: Cutting a series of test parts.' },
    ],
    modesTitle: 'Application spectrum',
    aiMode:        'AI mode',
    bandwidthMode: 'Bandwidth mode',
    aiModeNote:    'Highspeed and MD5 · Mild Steel N₂ 5–15 mm available · more from March 2026',
    bandwidthModeNote: 'Complete process range · Mild Steel, Stainless Steel, Aluminum · 1–40 mm',
    cta: 'Watch product video',
  },
}

/* ─── Perspective slogans ─── */
const perspectiveSlogans = {
  de: [
    'Was wäre wenn: der Schnitt einfach passt?',
    'Was wäre wenn: Qualität nicht mehr von Erfahrung oder Charge abhängt?',
    'Was wäre wenn: Effizienz nicht Ziel, sondern Standard ist?',
  ],
  en: [
    'What if the cut just works?',
    'What if quality no longer depended on experience or batch?',
    'What if efficiency wasn\'t a goal, but a standard?',
  ],
}

/* ─── Per-perspective body texts (sourced from TRUMPF Cutting Assistant flyer) ─── */
const perspectiveTexts = {
  de: [
    'Kennst du das? Ein neues Material kommt an, der Schnitt passt nicht ganz – und du arbeitest dich Schritt für Schritt durch die Parameter, bis es stimmt. Mit dem Cutting Assistant scannst du die Schneidkante einfach mit dem Handscanner, wählst das Problem aus – Grat, Rauheit oder Strahlunterbrechung – und bekommst sofort eine konkrete Empfehlung. Das System misst Rauheit und Grathöhe objektiv in Mikrometern und zeigt dir genau, welche Parameter angepasst werden müssen. So optimierst du in wenigen Minuten wie ein Profi – auch wenn du noch nicht lange an der Maschine arbeitest – und sparst dabei Material und Zeit.',
    'Neue Mitarbeitende schnell einarbeiten, schwankende Materialchargen beherrschen, Prozesssicherheit über alle Schichten hinweg sicherstellen – diese Herausforderungen kennt jede Produktionsleitung. Der TRUMPF Cutting Assistant verankert bewährte Schneidparameter direkt im System: Das Erfahrungswissen Ihrer besten Mitarbeitenden steht damit dem gesamten Team zur Verfügung – unabhängig von Schicht oder Dienstalter. Neue Kolleg*innen erzielen vom ersten Tag an reproduzierbare Ergebnisse, auch bei Nicht-Lasergüte-Material oder Sondermaterialien mit schwankender Qualität. Im KI-Modus werden Grathöhe und Rauheit automatisch gemessen und Parameterempfehlungen generiert; der Bandbreitenmodus deckt den kompletten Prozessbereich für Baustahl, Edelstahl und Aluminium in Blechdicken von 1 bis 40 mm ab.',
    'Produktionseffizienz ist der direkte Hebel für Marge, Wettbewerbsfähigkeit und strategisches Wachstum. Der TRUMPF Cutting Assistant steigert die Gesamtanlageneffizienz (OEE), indem er Rüstzeiten und Materialverschnitt beim Einfahren abweichender Materialien konsequent reduziert: Das KI-Modell optimiert Schneidparameter objektiv und reproduzierbar – ohne aufwendige Testläufe. Das Erfahrungswissen einzelner Mitarbeitender wird im System institutionalisiert, was Abhängigkeiten von Schlüsselpersonen abbaut und die Resilienz in Zeiten von Fachkräftemangel stärkt. Kürzere Einarbeitungszeiten, reduzierte Materialkosten und eine höhere Erstteilequalität schaffen den finanziellen Spielraum für Innovation und nachhaltiges Wachstum.',
  ],
  en: [
    'You know the situation: new material arrives, the cut isn\'t quite right, and you work through the parameters step by step until it fits. With the Cutting Assistant, you simply scan the cutting edge with the handheld scanner, select the issue – burr, roughness, or beam interruption – and immediately receive a concrete recommendation. The system objectively measures roughness and burr height in micrometers and shows you exactly which parameters need adjusting. This lets you optimize like a pro in just a few minutes – even without years of machine experience – saving both material and time.',
    'Getting new employees up to speed quickly, managing varying material batches, and ensuring process consistency across all shifts – every production manager knows these challenges. The TRUMPF Cutting Assistant embeds proven cutting parameters directly in the system, making the expertise of your best operators available to the entire team – regardless of shift or seniority. New colleagues achieve reproducible results from day one, even with non-laser-grade or special materials with fluctuating quality. In AI mode, burr height and roughness are measured automatically and parameter recommendations are generated; bandwidth mode covers the complete process range for mild steel, stainless steel, and aluminum in sheet thicknesses from 1 to 40 mm.',
    'Production efficiency is the direct lever for margin, competitiveness, and strategic growth. The TRUMPF Cutting Assistant improves overall equipment effectiveness (OEE) by systematically reducing setup times and material waste when processing non-standard materials: the AI model optimizes cutting parameters objectively and reproducibly – without time-consuming test runs. The expertise of individual employees is institutionalized in the system, reducing dependencies on key personnel and building resilience in times of skilled labor shortages. Shorter onboarding times, reduced material costs, and higher first-part quality create the financial headroom for innovation and sustainable growth.',
  ],
}

/* Languages without a dedicated translation fall back to English */
const productFallback          = product.en
const perspectiveSlogansFallback = perspectiveSlogans.en
const perspectiveTextsFallback   = perspectiveTexts.en

const translations = {
  de: {
    perspectiveTag:      'Perspektive',
    selectPerspective:   'Perspektive wählen',
    prevPerspective:     'Vorherige Perspektive',
    nextPerspective:     'Nächste Perspektive',
    stepOf:   (n, t) => `Schritt ${n} von ${t}`,
    perspectives: {
      werks:  { label: 'Werksmitarbeiter*in',  alt: 'Werksmitarbeiter bei der Arbeit in der Fertigungshalle' },
      prod:   { label: 'Produktionsleiter*in', alt: 'Produktionsleiter mit Laptop in der Fertigungshalle' },
      clevel: { label: 'C-Level',              alt: 'C-Level Führungskraft in einem Meeting' },
    },
    perspectiveSlogans: perspectiveSlogans.de,
    perspectiveTexts:   perspectiveTexts.de,
    product: product.de,
  },
  en: {
    perspectiveTag:      'Perspective',
    selectPerspective:   'Select perspective',
    prevPerspective:     'Previous perspective',
    nextPerspective:     'Next perspective',
    stepOf:   (n, t) => `Step ${n} of ${t}`,
    perspectives: {
      werks:  { label: 'Factory Worker',      alt: 'Factory worker at their workstation on the production floor' },
      prod:   { label: 'Production Manager',  alt: 'Production manager reviewing plans on a laptop in the factory' },
      clevel: { label: 'C-Level',             alt: 'C-level executive leading a boardroom meeting' },
    },
    perspectiveSlogans: perspectiveSlogans.en,
    perspectiveTexts:   perspectiveTexts.en,
    product: product.en,
  },
  fr: {
    perspectiveTag:      'Perspective',
    selectPerspective:   'Choisir une perspective',
    prevPerspective:     'Perspective précédente',
    nextPerspective:     'Perspective suivante',
    stepOf:   (n, t) => `Étape ${n} sur ${t}`,
    perspectives: {
      werks:  { label: "Opérateur d'usine",          alt: "Opérateur travaillant à son poste sur le sol de production" },
      prod:   { label: 'Responsable de production',  alt: 'Responsable de production consultant un ordinateur portable en usine' },
      clevel: { label: 'C-Level',                    alt: 'Cadre dirigeant animant une réunion de direction' },
    },
    perspectiveSlogans: perspectiveSlogansFallback,
    perspectiveTexts:   perspectiveTextsFallback,
    product: productFallback,
  },
  es: {
    perspectiveTag:      'Perspectiva',
    selectPerspective:   'Seleccionar perspectiva',
    prevPerspective:     'Perspectiva anterior',
    nextPerspective:     'Perspectiva siguiente',
    stepOf:   (n, t) => `Paso ${n} de ${t}`,
    perspectives: {
      werks:  { label: 'Operario de fábrica',       alt: 'Operario trabajando en su puesto en la planta de producción' },
      prod:   { label: 'Director de producción',    alt: 'Director de producción revisando datos en un portátil en la fábrica' },
      clevel: { label: 'C-Level',                   alt: 'Directivo de alto nivel liderando una reunión de directorio' },
    },
    perspectiveSlogans: perspectiveSlogansFallback,
    perspectiveTexts:   perspectiveTextsFallback,
    product: productFallback,
  },
  it: {
    perspectiveTag:      'Prospettiva',
    selectPerspective:   'Seleziona prospettiva',
    prevPerspective:     'Prospettiva precedente',
    nextPerspective:     'Prospettiva successiva',
    stepOf:   (n, t) => `Fase ${n} di ${t}`,
    perspectives: {
      werks:  { label: 'Operaio di fabbrica',           alt: "Operaio al lavoro sulla linea di produzione" },
      prod:   { label: 'Responsabile di produzione',    alt: 'Responsabile di produzione con laptop nello stabilimento' },
      clevel: { label: 'C-Level',                       alt: 'Dirigente di alto livello in una riunione del consiglio' },
    },
    perspectiveSlogans: perspectiveSlogansFallback,
    perspectiveTexts:   perspectiveTextsFallback,
    product: productFallback,
  },
  da: {
    perspectiveTag:      'Perspektiv',
    selectPerspective:   'Vælg perspektiv',
    prevPerspective:     'Forrige perspektiv',
    nextPerspective:     'Næste perspektiv',
    stepOf:   (n, t) => `Trin ${n} af ${t}`,
    perspectives: {
      werks:  { label: 'Fabriksarbejder',      alt: 'Fabriksarbejder ved sin arbejdsstation på produktionsgulvet' },
      prod:   { label: 'Produktionsleder',     alt: 'Produktionsleder gennemgår data på en laptop i fabrikken' },
      clevel: { label: 'C-Level',              alt: 'C-level leder ved et bestyrelsesmøde' },
    },
    perspectiveSlogans: perspectiveSlogansFallback,
    perspectiveTexts:   perspectiveTextsFallback,
    product: productFallback,
  },
  ro: {
    perspectiveTag:      'Perspectivă',
    selectPerspective:   'Selectați perspectiva',
    prevPerspective:     'Perspectiva anterioară',
    nextPerspective:     'Perspectiva următoare',
    stepOf:   (n, t) => `Pasul ${n} din ${t}`,
    perspectives: {
      werks:  { label: 'Muncitor în fabrică',         alt: 'Muncitor la locul de muncă pe podeaua de producție' },
      prod:   { label: 'Manager de producție',        alt: 'Manager de producție analizând date pe laptop în fabrică' },
      clevel: { label: 'C-Level',                     alt: 'Executiv de nivel C conducând o ședință de consiliu' },
    },
    perspectiveSlogans: perspectiveSlogansFallback,
    perspectiveTexts:   perspectiveTextsFallback,
    product: productFallback,
  },
}

export default translations
