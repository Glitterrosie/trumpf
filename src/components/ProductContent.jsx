import { useLanguage } from '../context/LanguageContext'

function AdvantageCard({ title, body }) {
  return (
    <div className="tr-adv-card">
      <h3 className="tr-adv-card__title">{title}</h3>
      <p className="tr-adv-card__body">{body}</p>
    </div>
  )
}

function Step({ num, title, body }) {
  return (
    <div className="tr-step">
      <div className="tr-step__num" aria-hidden="true">{num}</div>
      <div className="tr-step__content">
        <h3 className="tr-step__title">{title}</h3>
        <p className="tr-step__body">{body}</p>
      </div>
    </div>
  )
}

function ModeCard({ title, note, accent }) {
  return (
    <div className={`tr-mode-card tr-mode-card--${accent}`}>
      <span className="tr-mode-card__tag">{title}</span>
      <p className="tr-mode-card__note">{note}</p>
    </div>
  )
}

export default function ProductContent() {
  const { t } = useLanguage()
  const p = t.product

  return (
    <div className="tr-product-content">

      {/* ── Intro ── */}
      <section className="tr-section tr-section--white">
        <div className="tr-section__inner">
          <div className="tr-product-intro">
            <div className="tr-product-intro__text">
              <p className="tr-label">Cutting Assistant</p>
              <h1 className="tr-product-intro__headline">{p.headline}</h1>
              <p className="tr-product-intro__subheadline">{p.subheadline}</p>
              <p className="tr-product-intro__body">{p.intro}</p>
              <a
                className="tr-btn tr-btn--primary"
                href="https://www.trumpf.info/fsbpmj"
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advantages ── */}
      <section className="tr-section tr-section--light">
        <div className="tr-section__inner">
          <h2 className="tr-section__title">{p.advantagesTitle}</h2>
          <p className="tr-section__subtitle">{p.advantagesSubtitle}</p>
          <div className="tr-adv-grid">
            {p.advantages.map((adv, i) => (
              <AdvantageCard key={i} title={adv.title} body={adv.body} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="tr-section tr-section--white">
        <div className="tr-section__inner">
          <h2 className="tr-section__title">{p.stepsTitle}</h2>
          <p className="tr-section__subtitle">{p.stepsSubtitle}</p>
          <div className="tr-steps">
            {p.steps.map((step, i) => (
              <Step key={i} num={step.num} title={step.title} body={step.body} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Modes ── */}
      <section className="tr-section tr-section--primary">
        <div className="tr-section__inner">
          <h2 className="tr-section__title tr-section__title--light">{p.modesTitle}</h2>
          <div className="tr-modes-grid">
            <ModeCard title={p.aiMode}        note={p.aiModeNote}        accent="teal" />
            <ModeCard title={p.bandwidthMode} note={p.bandwidthModeNote} accent="green" />
          </div>
        </div>
      </section>

    </div>
  )
}
