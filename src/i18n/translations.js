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

/* ─── Chat UI strings ─── */
const chat = {
  de: { bubble: 'Haben Sie Fragen?', online: 'Online', close: 'Chat schließen', open: 'Chat öffnen', inputLabel: 'Nachricht eingeben', send: 'Senden' },
  en: { bubble: 'Do you have questions?', online: 'Online', close: 'Close chat', open: 'Open chat', inputLabel: 'Type a message', send: 'Send' },
  fr: { bubble: 'Avez-vous des questions ?', online: 'En ligne', close: 'Fermer le chat', open: 'Ouvrir le chat', inputLabel: 'Votre message', send: 'Envoyer' },
  es: { bubble: '¿Tiene preguntas?', online: 'En línea', close: 'Cerrar chat', open: 'Abrir chat', inputLabel: 'Su mensaje', send: 'Enviar' },
  it: { bubble: 'Ha domande?', online: 'Online', close: 'Chiudi chat', open: 'Apri chat', inputLabel: 'Il suo messaggio', send: 'Invia' },
  da: { bubble: 'Har du spørgsmål?', online: 'Online', close: 'Luk chat', open: 'Åbn chat', inputLabel: 'Din besked', send: 'Send' },
  ro: { bubble: 'Aveți întrebări?', online: 'Online', close: 'Închide chat', open: 'Deschide chat', inputLabel: 'Mesajul dvs.', send: 'Trimite' },
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
  fr: [
    'Et si la coupe fonctionnait simplement ?',
    'Et si la qualité ne dépendait plus de l\'expérience ou du lot ?',
    'Et si l\'efficacité n\'était pas un objectif, mais un standard ?',
  ],
  es: [
    '¿Y si el corte simplemente funcionara?',
    '¿Y si la calidad ya no dependiera de la experiencia ni del lote?',
    '¿Y si la eficiencia no fuera un objetivo, sino un estándar?',
  ],
  it: [
    'E se il taglio funzionasse semplicemente?',
    'E se la qualità non dipendesse più dall\'esperienza o dal lotto?',
    'E se l\'efficienza non fosse un obiettivo, ma uno standard?',
  ],
  da: [
    'Hvad nu hvis snittet bare virker?',
    'Hvad nu hvis kvaliteten ikke længere afhang af erfaring eller charge?',
    'Hvad nu hvis effektivitet ikke var et mål, men en standard?',
  ],
  ro: [
    'Dacă tăierea ar funcționa pur și simplu?',
    'Dacă calitatea nu ar mai depinde de experiență sau de lot?',
    'Dacă eficiența nu ar fi un obiectiv, ci un standard?',
  ],
}

/* ─── Per-perspective body texts (sourced from TRUMPF Cutting Assistant flyer) ─── */
const perspectiveTexts = {
  de: [
    'Kennst du das? Ein neues Material kommt an, der Schnitt passt nicht ganz – und du arbeitest dich Schritt für Schritt durch die Parameter, bis es stimmt. Mit dem Cutting Assistant scannst du die Schneidkante einfach mit dem Handscanner, wählst das Problem aus – Grat, Rauheit oder Strahlunterbrechung – und bekommst sofort eine konkrete Empfehlung. Das System misst Rauheit und Grathöhe objektiv in Mikrometern und zeigt dir genau, welche Parameter angepasst werden müssen. So optimierst du in wenigen Minuten wie ein Profi – auch wenn du noch nicht lange an der Maschine arbeitest – und sparst dabei Material und Zeit. Und das Beste: Je öfter du das Tool nutzt, desto präziser werden die Empfehlungen – das System lernt mit jeder Anwendung.',
    'Neue Mitarbeitende schnell einarbeiten, schwankende Materialchargen beherrschen, Prozesssicherheit über alle Schichten hinweg sicherstellen – diese Herausforderungen kennt jede Produktionsleitung. Der TRUMPF Cutting Assistant verankert bewährte Schneidparameter direkt im System: Das Erfahrungswissen Ihrer besten Mitarbeitenden steht damit dem gesamten Team zur Verfügung – unabhängig von Schicht oder Dienstalter. Neue Kolleg*innen erzielen vom ersten Tag an reproduzierbare Ergebnisse, auch bei Nicht-Lasergüte-Material oder Sondermaterialien mit schwankender Qualität. Im KI-Modus werden Grathöhe und Rauheit automatisch gemessen und Parameterempfehlungen generiert; der Bandbreitenmodus deckt den kompletten Prozessbereich für Baustahl, Edelstahl und Aluminium in Blechdicken von 1 bis 40 mm ab. Zudem verbessert sich das System kontinuierlich: Je mehr es im Betrieb eingesetzt wird, desto präziser und zuverlässiger werden die Parameterempfehlungen.',
    'Produktionseffizienz ist der direkte Hebel für Marge, Wettbewerbsfähigkeit und strategisches Wachstum. Der TRUMPF Cutting Assistant steigert die Gesamtanlageneffizienz (OEE), indem er Rüstzeiten und Materialverschnitt beim Einfahren abweichender Materialien konsequent reduziert: Das KI-Modell optimiert Schneidparameter objektiv und reproduzierbar – ohne aufwendige Testläufe. Das Erfahrungswissen einzelner Mitarbeitender wird im System institutionalisiert, was Abhängigkeiten von Schlüsselpersonen abbaut und die Resilienz in Zeiten von Fachkräftemangel stärkt. Kürzere Einarbeitungszeiten, reduzierte Materialkosten und eine höhere Erstteilequalität schaffen den finanziellen Spielraum für Innovation und nachhaltiges Wachstum. Darüber hinaus verbessert sich das KI-Modell mit zunehmender Nutzung – jede Optimierung macht das System präziser und steigert den langfristigen Mehrwert für Ihr Unternehmen.',
  ],
  en: [
    'You know the situation: new material arrives, the cut isn\'t quite right, and you work through the parameters step by step until it fits. With the Cutting Assistant, you simply scan the cutting edge with the handheld scanner, select the issue – burr, roughness, or beam interruption – and immediately receive a concrete recommendation. The system objectively measures roughness and burr height in micrometers and shows you exactly which parameters need adjusting. This lets you optimize like a pro in just a few minutes – even without years of machine experience – saving both material and time. And the best part: the more you use it, the smarter it gets – the system learns with every application.',
    'Getting new employees up to speed quickly, managing varying material batches, and ensuring process consistency across all shifts – every production manager knows these challenges. The TRUMPF Cutting Assistant embeds proven cutting parameters directly in the system, making the expertise of your best operators available to the entire team – regardless of shift or seniority. New colleagues achieve reproducible results from day one, even with non-laser-grade or special materials with fluctuating quality. In AI mode, burr height and roughness are measured automatically and parameter recommendations are generated; bandwidth mode covers the complete process range for mild steel, stainless steel, and aluminum in sheet thicknesses from 1 to 40 mm. What\'s more, the system continuously improves: the more it is used in operation, the more precise and reliable the parameter recommendations become.',
    'Production efficiency is the direct lever for margin, competitiveness, and strategic growth. The TRUMPF Cutting Assistant improves overall equipment effectiveness (OEE) by systematically reducing setup times and material waste when processing non-standard materials: the AI model optimizes cutting parameters objectively and reproducibly – without time-consuming test runs. The expertise of individual employees is institutionalized in the system, reducing dependencies on key personnel and building resilience in times of skilled labor shortages. Shorter onboarding times, reduced material costs, and higher first-part quality create the financial headroom for innovation and sustainable growth. Additionally, the AI model improves with every use – each optimization makes the system more precise and compounds the long-term value for your business.',
  ],
  fr: [
    'Vous connaissez la situation : un nouveau matériau arrive, la coupe n\'est pas tout à fait correcte et vous ajustez les paramètres étape par étape. Avec le Cutting Assistant, scannez simplement le bord de coupe avec le scanner portable, sélectionnez le problème – bavure, rugosité ou interruption du faisceau – et recevez immédiatement une recommandation concrète. Le système mesure objectivement la rugosité et la hauteur des bavures en micromètres et vous indique exactement quels paramètres ajuster. Cela vous permet d\'optimiser comme un pro en quelques minutes – même sans longue expérience – en économisant matière et temps. Et le mieux : plus vous l\'utilisez, plus il devient performant – le système apprend à chaque application.',
    'Former rapidement les nouveaux employés, gérer des lots de matériaux variables et garantir la cohérence des processus sur tous les postes – chaque responsable de production connaît ces défis. Le TRUMPF Cutting Assistant intègre des paramètres de coupe éprouvés directement dans le système, mettant l\'expertise de vos meilleurs opérateurs à la disposition de toute l\'équipe, quelle que soit l\'équipe ou l\'ancienneté. Les nouveaux collègues obtiennent des résultats reproductibles dès le premier jour, même avec des matériaux non standard ou de qualité variable. En mode IA, la hauteur des bavures et la rugosité sont mesurées automatiquement ; le mode bande passante couvre la gamme complète pour l\'acier doux, l\'acier inoxydable et l\'aluminium de 1 à 40 mm. De plus, le système s\'améliore continuellement : plus il est utilisé, plus les recommandations de paramètres deviennent précises et fiables.',
    'L\'efficacité de production est le levier direct de la marge, de la compétitivité et de la croissance stratégique. Le TRUMPF Cutting Assistant améliore l\'efficacité globale des équipements (OEE) en réduisant systématiquement les temps de réglage et les rebuts lors du traitement de matériaux non standard : le modèle IA optimise les paramètres de coupe objectivement et de manière reproductible, sans essais chronophages. L\'expertise des employés est institutionnalisée dans le système, réduisant les dépendances au personnel clé et renforçant la résilience face aux pénuries de main-d\'œuvre qualifiée. Des délais d\'intégration plus courts, des coûts de matériaux réduits et une meilleure qualité des premières pièces libèrent des ressources pour l\'innovation. De plus, le modèle IA s\'améliore à chaque utilisation – augmentant continuellement la valeur à long terme pour votre entreprise.',
  ],
  es: [
    'Conoce la situación: llega un material nuevo, el corte no está del todo bien y ajusta los parámetros paso a paso. Con el Cutting Assistant, escanee simplemente el borde de corte con el escáner portátil, seleccione el problema – rebaba, rugosidad o interrupción del haz – y reciba de inmediato una recomendación concreta. El sistema mide objetivamente la rugosidad y la altura de la rebaba en micrómetros e indica exactamente qué parámetros ajustar. Esto permite optimizar como un profesional en pocos minutos – incluso sin años de experiencia – ahorrando material y tiempo. Y lo mejor: cuanto más se usa, más inteligente se vuelve – el sistema aprende con cada aplicación.',
    'Incorporar rápidamente a nuevos empleados, gestionar lotes de materiales variables y garantizar la consistencia del proceso en todos los turnos – todo responsable de producción conoce estos retos. El TRUMPF Cutting Assistant integra parámetros de corte probados directamente en el sistema, poniendo la experiencia de sus mejores operadores a disposición de todo el equipo, independientemente del turno o la antigüedad. Los nuevos colegas obtienen resultados reproducibles desde el primer día, incluso con materiales no estándar o de calidad variable. En modo IA, la altura de la rebaba y la rugosidad se miden automáticamente; el modo de ancho de banda cubre la gama completa para acero dulce, acero inoxidable y aluminio de 1 a 40 mm. Además, el sistema mejora continuamente: cuanto más se utiliza, más precisas y fiables se vuelven las recomendaciones.',
    'La eficiencia de producción es la palanca directa para el margen, la competitividad y el crecimiento estratégico. El TRUMPF Cutting Assistant mejora la eficiencia general de los equipos (OEE) reduciendo sistemáticamente los tiempos de configuración y el desperdicio de material al procesar materiales no estándar: el modelo de IA optimiza los parámetros de corte de forma objetiva y reproducible, sin pruebas que consuman tiempo. La experiencia de los empleados se institucionaliza en el sistema, reduciendo dependencias del personal clave y fortaleciendo la resiliencia ante la escasez de mano de obra cualificada. Tiempos de incorporación más cortos, costes de materiales reducidos y mayor calidad de las primeras piezas crean el margen para la innovación y el crecimiento sostenible. Además, el modelo de IA mejora con cada uso – aumentando continuamente el valor a largo plazo para su empresa.',
  ],
  it: [
    'Conosce la situazione: arriva un nuovo materiale, il taglio non è del tutto corretto e si lavora sui parametri passo dopo passo. Con il Cutting Assistant, basta scansionare il bordo di taglio con lo scanner portatile, selezionare il problema – bava, rugosità o interruzione del raggio – e ricevere immediatamente una raccomandazione concreta. Il sistema misura obiettivamente la rugosità e l\'altezza delle bave in micrometri e indica esattamente quali parametri regolare. Ciò consente di ottimizzare come un professionista in pochi minuti – anche senza anni di esperienza – risparmiando materiale e tempo. La cosa migliore: più lo si utilizza, più diventa preciso – il sistema apprende ad ogni applicazione.',
    'Formare rapidamente i nuovi dipendenti, gestire lotti di materiali variabili e garantire la coerenza del processo su tutti i turni – ogni responsabile della produzione conosce queste sfide. Il TRUMPF Cutting Assistant integra parametri di taglio collaudati direttamente nel sistema, mettendo l\'esperienza degli operatori migliori a disposizione dell\'intero team, indipendentemente dal turno o dall\'anzianità. I nuovi colleghi ottengono risultati riproducibili fin dal primo giorno, anche con materiali non standard o di qualità variabile. In modalità IA, l\'altezza delle bave e la rugosità vengono misurate automaticamente; la modalità bandwidth copre l\'intera gamma per acciaio dolce, acciaio inossidabile e alluminio da 1 a 40 mm. Inoltre, il sistema migliora continuamente: più viene utilizzato, più le raccomandazioni sui parametri diventano precise e affidabili.',
    'L\'efficienza produttiva è la leva diretta per il margine, la competitività e la crescita strategica. Il TRUMPF Cutting Assistant migliora l\'efficienza complessiva degli impianti (OEE) riducendo sistematicamente i tempi di setup e gli scarti nella lavorazione di materiali non standard: il modello IA ottimizza i parametri di taglio in modo obiettivo e riproducibile, senza prove dispendiose in termini di tempo. L\'esperienza dei singoli dipendenti viene istituzionalizzata nel sistema, riducendo le dipendenze dal personale chiave e rafforzando la resilienza in periodi di carenza di manodopera specializzata. Tempi di inserimento più brevi, costi dei materiali ridotti e una migliore qualità dei primi pezzi creano il margine finanziario per l\'innovazione e la crescita sostenibile. Inoltre, il modello IA migliora ad ogni utilizzo – aumentando continuamente il valore a lungo termine per la sua azienda.',
  ],
  da: [
    'Du kender situationen: nyt materiale ankommer, snittet er ikke helt rigtigt, og du justerer parametrene trin for trin. Med Cutting Assistant scanner du blot skærekanten med den håndholdte scanner, vælger problemet – grater, ruhed eller stråleafbrydelse – og modtager straks en konkret anbefaling. Systemet måler objektivt ruhed og grathøjde i mikrometer og viser dig præcis, hvilke parametre der skal justeres. Det lader dig optimere som en professionel på få minutter – selv uden mange års erfaring – og sparer både materiale og tid. Og det bedste: jo mere du bruger det, jo klogere bliver det – systemet lærer med hver anvendelse.',
    'At oplære nye medarbejdere hurtigt, håndtere varierende materialecharger og sikre proceskonsistens på tværs af alle skift – enhver produktionsleder kender disse udfordringer. TRUMPF Cutting Assistant indlejrer gennemprøvede skæreparametre direkte i systemet og stiller dine bedste operatørers ekspertise til rådighed for hele holdet, uanset skift eller anciennitet. Nye kolleger opnår reproducerbare resultater fra dag ét, selv med materialer der ikke er laserstandard eller af varierende kvalitet. I AI-tilstand måles grathøjde og ruhed automatisk; båndbreddetilstand dækker det komplette procesområde for mild stål, rustfrit stål og aluminium i tykkelser fra 1 til 40 mm. Desuden forbedres systemet løbende: jo mere det bruges, jo mere præcise og pålidelige bliver parameteranbefalingerne.',
    'Produktionseffektivitet er den direkte løftestang for margin, konkurrenceevne og strategisk vækst. TRUMPF Cutting Assistant forbedrer den samlede anlægseffektivitet (OEE) ved systematisk at reducere opstillingstider og materialespild ved bearbejdning af ikke-standardmaterialer: AI-modellen optimerer skæreparametre objektivt og reproducerbart uden tidskrævende testserier. Ekspertisen hos de enkelte medarbejdere institutionaliseres i systemet, reducerer afhængigheden af nøglepersoner og styrker robustheden i tider med mangel på kvalificeret arbejdskraft. Kortere oplæringstider, reducerede materialeomkostninger og højere kvalitet på første dele skaber det finansielle råderum til innovation og bæredygtig vækst. Desuden forbedres AI-modellen med hver brug – og øger løbende den langsigtede værdi for din virksomhed.',
  ],
  ro: [
    'Cunoașteți situația: sosește un material nou, tăierea nu este tocmai corectă și ajustați parametrii pas cu pas. Cu Cutting Assistant, scanați pur și simplu muchia de tăiere cu scanerul portabil, selectați problema – bavuri, rugozitate sau întrerupere a fasciculului – și primiți imediat o recomandare concretă. Sistemul măsoară obiectiv rugozitatea și înălțimea bavurilor în micrometri și vă arată exact ce parametri trebuie ajustați. Astfel puteți optimiza ca un profesionist în câteva minute – chiar și fără ani de experiență – economisind material și timp. Și cel mai bun lucru: cu cât îl folosiți mai mult, cu atât devine mai precis – sistemul învață cu fiecare aplicație.',
    'Integrarea rapidă a noilor angajați, gestionarea loturilor de materiale variabile și asigurarea consistenței proceselor pe toate schimburile – fiecare manager de producție cunoaște aceste provocări. TRUMPF Cutting Assistant integrează parametrii de tăiere verificați direct în sistem, punând expertiza celor mai buni operatori la dispoziția întregii echipe, indiferent de schimb sau vechime. Noii colegi obțin rezultate reproductibile din prima zi, chiar și cu materiale non-standard sau de calitate variabilă. În modul IA, înălțimea bavurilor și rugozitatea sunt măsurate automat; modul bandă de frecvență acoperă gama completă pentru oțel moale, oțel inoxidabil și aluminiu în grosimi de la 1 la 40 mm. În plus, sistemul se îmbunătățește continuu: cu cât este utilizat mai mult, cu atât recomandările de parametri devin mai precise și mai fiabile.',
    'Eficiența producției este pârghia directă pentru marjă, competitivitate și creștere strategică. TRUMPF Cutting Assistant îmbunătățește eficiența globală a echipamentelor (OEE) prin reducerea sistematică a timpilor de configurare și a deșeurilor de materiale la procesarea materialelor non-standard: modelul IA optimizează parametrii de tăiere obiectiv și reproductibil, fără teste consumatoare de timp. Expertiza angajaților este instituționalizată în sistem, reducând dependențele de personalul cheie și consolidând reziliența în perioade de deficit de forță de muncă calificată. Timpii de integrare mai scurți, costurile reduse ale materialelor și o calitate mai bună a primelor piese creează marja financiară pentru inovație și creștere durabilă. În plus, modelul IA se îmbunătățește cu fiecare utilizare – crescând continuu valoarea pe termen lung pentru compania dumneavoastră.',
  ],
}

/* Only product content falls back to English for non-DE/EN languages */
const productFallback = product.en

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
    chat:               chat.de,
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
    chat:               chat.en,
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
    chat:               chat.fr,
    perspectiveSlogans: perspectiveSlogans.fr,
    perspectiveTexts:   perspectiveTexts.fr,
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
    chat:               chat.es,
    perspectiveSlogans: perspectiveSlogans.es,
    perspectiveTexts:   perspectiveTexts.es,
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
    chat:               chat.it,
    perspectiveSlogans: perspectiveSlogans.it,
    perspectiveTexts:   perspectiveTexts.it,
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
    chat:               chat.da,
    perspectiveSlogans: perspectiveSlogans.da,
    perspectiveTexts:   perspectiveTexts.da,
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
    chat:               chat.ro,
    perspectiveSlogans: perspectiveSlogans.ro,
    perspectiveTexts:   perspectiveTexts.ro,
    product: productFallback,
  },
}

export default translations
