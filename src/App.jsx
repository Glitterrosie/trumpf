import { useState } from 'react'
import { useLanguage } from './context/LanguageContext'
import PerspectiveSlider from './components/PerspectiveSlider'
import PerspectiveView from './components/PerspectiveView'
import LanguageSelector from './components/LanguageSelector'

const PERSPECTIVE_IDS = ['werks', 'prod', 'clevel']
const PERSPECTIVE_IMAGES = {
  werks:  '/images/werksmitarbeiter.jpg',
  prod:   '/images/produktionsleiter.jpg',
  clevel: '/images/clevel.jpg',
}

export default function App() {
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
      <header className="tr-header" role="banner">
        <div className="tr-logo" aria-label="TRUMPF">
          <span className="tr-logo__wordmark">TRUMPF</span>
          <div className="tr-logo__block" aria-hidden="true" />
        </div>
        <LanguageSelector />
      </header>
      <main className="tr-perspectives">
        <PerspectiveSlider
          steps={perspectives}
          active={active}
          onChange={navigate}
        />
        <PerspectiveView
          perspectives={perspectives}
          active={active}
          direction={direction}
          onChange={navigate}
        />
      </main>
    </div>
  )
}
