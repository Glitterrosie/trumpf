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
  },
}

export default translations
