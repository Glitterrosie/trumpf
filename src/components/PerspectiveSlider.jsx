import { Fragment } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function PerspectiveSlider({ steps, active, onChange }) {
  const { t } = useLanguage()

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && active < steps.length - 1) onChange(active + 1)
    if (e.key === 'ArrowLeft'  && active > 0)               onChange(active - 1)
  }

  return (
    <nav
      className="tr-stepper"
      aria-label={t.selectPerspective}
      onKeyDown={handleKeyDown}
    >
      <div className="tr-stepper__track" role="list">
        {steps.map((step, i) => (
          <Fragment key={step.id}>
            {i > 0 && (
              <div
                className={`tr-stepper__connector${active >= i ? ' tr-stepper__connector--done' : ''}`}
                aria-hidden="true"
              />
            )}
            <div
              className={`tr-stepper__item${
                i === active ? ' tr-stepper__item--active' :
                i <  active ? ' tr-stepper__item--done'   : ''
              }`}
              role="listitem"
            >
              <button
                className="tr-stepper__btn"
                onClick={() => onChange(i)}
                aria-current={i === active ? 'step' : undefined}
                aria-label={`${step.label}, ${t.stepOf(i + 1, steps.length)}`}
              />
              <span className="tr-stepper__label" aria-hidden="true">
                {step.label}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </nav>
  )
}
