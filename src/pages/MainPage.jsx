import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import Header from '../components/Header'
import PerspectiveSlider from '../components/PerspectiveSlider'
import PerspectiveView from '../components/PerspectiveView'
import ChatBot from '../components/ChatBot'

const PERSPECTIVE_IDS = ['werks', 'prod', 'clevel']
const PERSPECTIVE_IMAGES = {
  werks:  '/images/werksmitarbeiter.jpg',
  prod:   '/images/produktionsleiter.jpg',
  clevel: '/images/clevel.jpg',
}

export default function MainPage() {
  const [active, setActive]       = useState(0)
  const [direction, setDirection] = useState(1)
  const { t } = useLanguage()

  const navigate = (index) => {
    if (index === active) return
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  const perspectives = PERSPECTIVE_IDS.map((id) => ({
    id,
    image: PERSPECTIVE_IMAGES[id],
    label: t.perspectives[id].label,
    alt:   t.perspectives[id].alt,
  }))

  return (
    <div className="tr-app">
      <Header />
      <main className="tr-perspectives">
        <PerspectiveSlider steps={perspectives} active={active} onChange={navigate} />
        <AnimatePresence mode="wait">
          <motion.div
            key={`slogan-${active}`}
            className="tr-slogan"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y:  6 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {t.perspectiveSlogans[active]}
          </motion.div>
        </AnimatePresence>
        <PerspectiveView
          perspectives={perspectives}
          active={active}
          direction={direction}
          onChange={navigate}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${active}`}
            className="tr-pview-text"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p>{t.perspectiveTexts[active]}</p>
          </motion.div>
        </AnimatePresence>
        <ChatBot />
      </main>
    </div>
  )
}
