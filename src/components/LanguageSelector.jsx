import { LANGUAGES } from '../i18n/translations'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="tr-lang">
      <select
        className="tr-lang__select"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        aria-label="Language / Sprache"
      >
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {code.toUpperCase()} — {label}
          </option>
        ))}
      </select>
    </div>
  )
}
