import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

/* Arrow icon — 2px stroke, no fill, per TRUMPF icon guidelines */
function ArrowIcon({ direction }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {direction === 'prev'
        ? <polyline points="15 18 9 12 15 6" />
        : <polyline points="9 6 15 12 9 18" />
      }
    </svg>
  )
}

/* Framer Motion variants — direction-aware slide + fade
   custom: 1 = forward, -1 = backward */
const variants = {
  enter:  (dir) => ({ x: dir > 0 ?  60 : -60, opacity: 0 }),
  center:         ({ x: 0,                      opacity: 1 }),
  exit:   (dir) => ({ x: dir > 0 ? -60 :  60,  opacity: 0 }),
}

const transition = {
  duration: 0.42,
  ease: [0.25, 0.46, 0.45, 0.94],
}

export default function PerspectiveView({ perspectives, active, direction, onChange }) {
  const { t } = useLanguage()
  const current = perspectives[active]
  const total   = perspectives.length

  return (
    <section className="tr-pview" aria-label={t.perspectiveTag}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={active}
          className="tr-pview__frame"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
        >
          <img
            className="tr-pview__img"
            src={current.image}
            alt={current.alt}
            loading="eager"
            onError={(e) => { e.currentTarget.style.opacity = '0' }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="tr-pview__overlay" aria-hidden="true" />

      <div className="tr-pview__label">
        <span className="tr-pview__label-tag">{t.perspectiveTag}</span>
        <span className="tr-pview__label-title">{current.label}</span>
      </div>

      <span className="tr-pview__counter" aria-hidden="true">
        {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>

      <div className="tr-pview__nav">
        <button
          className="tr-pview__nav-btn"
          onClick={() => onChange(active - 1)}
          disabled={active === 0}
          aria-label={t.prevPerspective}
        >
          <ArrowIcon direction="prev" />
        </button>
        <button
          className="tr-pview__nav-btn"
          onClick={() => onChange(active + 1)}
          disabled={active === total - 1}
          aria-label={t.nextPerspective}
        >
          <ArrowIcon direction="next" />
        </button>
      </div>
    </section>
  )
}
