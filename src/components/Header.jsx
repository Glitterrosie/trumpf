import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  return (
    <header className="tr-header" role="banner">
      <Link to="/" className="tr-logo" aria-label="TRUMPF – Startseite">
        <span className="tr-logo__wordmark">TRUMPF</span>
        <div className="tr-logo__block" aria-hidden="true" />
      </Link>
      <nav className="tr-header__nav" aria-label="Interne Navigation">
        <Link to="/analytics" className="tr-header__nav-link">Analytics</Link>
      </nav>
      <LanguageSelector />
    </header>
  )
}
