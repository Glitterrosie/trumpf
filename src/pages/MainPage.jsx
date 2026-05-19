import { useState } from 'react'
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
        <PerspectiveView
          perspectives={perspectives}
          active={active}
          direction={direction}
          onChange={navigate}
        />
      </main>
      {/* Floating chat widget — position set via CSS vars --tr-chat-bottom / --tr-chat-right */}
      <ChatBot />
    </div>
  )
}
