import { useState } from 'react'
import PerspectiveSlider from './components/PerspectiveSlider'
import PerspectiveView from './components/PerspectiveView'

const PERSPECTIVES = [
  {
    id: 'werks',
    label: 'Werksmitarbeiter*in',
    image: '/images/werksmitarbeiter.jpg',
    alt: 'Werksmitarbeiter bei der Arbeit in der Fertigungshalle',
  },
  {
    id: 'prod',
    label: 'Produktionsleiter*in',
    image: '/images/produktionsleiter.jpg',
    alt: 'Produktionsleiter mit Laptop in der Fertigungshalle',
  },
  {
    id: 'clevel',
    label: 'C-Level',
    image: '/images/clevel.jpg',
    alt: 'C-Level Führungskraft in einem Meeting',
  },
]

export default function App() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const navigate = (index) => {
    if (index === active) return
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  return (
    <div className="tr-app">
      <header className="tr-header" role="banner">
        <div className="tr-logo" aria-label="TRUMPF">
          <span className="tr-logo__wordmark">TRUMPF</span>
          <div className="tr-logo__block" aria-hidden="true" />
        </div>
      </header>
      <main className="tr-perspectives">
        <PerspectiveSlider
          steps={PERSPECTIVES}
          active={active}
          onChange={navigate}
        />
        <PerspectiveView
          perspectives={PERSPECTIVES}
          active={active}
          direction={direction}
          onChange={navigate}
        />
      </main>
    </div>
  )
}
