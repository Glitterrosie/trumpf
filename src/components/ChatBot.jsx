import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function getSessionId() {
  if (!sessionStorage.getItem('tr-session-id')) {
    sessionStorage.setItem('tr-session-id', 'anonymous_' + Math.random().toString(36).slice(2, 11))
  }
  return sessionStorage.getItem('tr-session-id')
}

const WELCOME = {
  de: 'Guten Tag! Ich bin Ihr TRUMPF Cutting Assistant. Wie kann ich Ihnen helfen?',
  en: 'Hello! I am your TRUMPF Cutting Assistant. How can I help you?',
  fr: 'Bonjour ! Je suis votre TRUMPF Cutting Assistant. Comment puis-je vous aider ?',
  es: '¡Hola! Soy su TRUMPF Cutting Assistant. ¿En qué puedo ayudarle?',
  it: 'Buongiorno! Sono il suo TRUMPF Cutting Assistant. Come posso aiutarla?',
  da: 'Goddag! Jeg er din TRUMPF Cutting Assistant. Hvordan kan jeg hjælpe dig?',
  ro: 'Bună ziua! Sunt asistentul dumneavoastră TRUMPF Cutting Assistant. Cum vă pot ajuta?',
}

const PLACEHOLDER = {
  de: 'Ihre Frage…', en: 'Your question…', fr: 'Votre question…',
  es: 'Su pregunta…', it: 'La sua domanda…', da: 'Dit spørgsmål…', ro: 'Întrebarea dvs…',
}

const ERROR_MSG = {
  de: 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
  en: 'Sorry, something went wrong. Please try again.',
  fr: "Désolé, une erreur s'est produite. Veuillez réessayer.",
  es: 'Lo siento, ocurrió un error. Por favor, inténtelo de nuevo.',
  it: 'Spiacente, si è verificato un errore. Riprova.',
  da: 'Beklager, der opstod en fejl. Prøv venligst igen.',
  ro: 'Ne pare rău, a apărut o eroare. Vă rugăm să încercați din nou.',
}

function SendIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="square"
      strokeLinejoin="miter" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function TypingIndicator() {
  return (
    <div className="tr-chat__msg tr-chat__msg--bot">
      <div className="tr-chat__bubble tr-chat__bubble--typing">
        <span /><span /><span />
      </div>
    </div>
  )
}

export default function ChatBot() {
  const { lang, t } = useLanguage()
  const c = t.chat
  const [open, setOpen]         = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput]       = useState('')
  const [loading, setLoading]   = useState(false)
  const bottomRef               = useRef(null)
  const inputRef                = useRef(null)
  const sessionId               = useRef(getSessionId())

  useEffect(() => {
    setMessages([{ role: 'bot', content: WELCOME[lang] ?? WELCOME.de, id: 0 }])
  }, [lang])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150)
  }, [open])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg = { role: 'user', content: text, id: Date.now() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    const history = messages
      .filter((m) => m.id !== 0)
      .map((m) => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content }))

    try {
      fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text, sessionId: sessionId.current }),
      }).catch(() => {})

      const res  = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...history, { role: 'user', content: text }] }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, {
        role: 'bot',
        content: res.ok ? data.reply : (ERROR_MSG[lang] ?? ERROR_MSG.de),
        id: Date.now(),
      }])
    } catch {
      setMessages((prev) => [...prev, {
        role: 'bot', content: ERROR_MSG[lang] ?? ERROR_MSG.de, id: Date.now(),
      }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    /* Position is controlled by CSS vars --tr-chat-top and --tr-chat-right */
    <div className="tr-chat-widget">

      {/* Speech bubble trigger button */}
      <button
        className={`tr-chat-bubble${open ? ' tr-chat-bubble--active' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? c.close : c.open}
        aria-expanded={open}
      >
        <span className="tr-chat-bubble__text">{c.bubble}</span>
        {!open && messages.length > 1 && (
          <span className="tr-chat-bubble__badge" aria-hidden="true" />
        )}
      </button>

      {/* Floating chat panel — opens below the bubble */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="tr-chat-panel"
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,   scale: 1    }}
            exit={{    opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            role="dialog"
            aria-label="TRUMPF Cutting Assistant Chat"
            aria-modal="false"
          >
            {/* Panel header */}
            <div className="tr-chat-panel__head">
              <div className="tr-chat-panel__avatar">
                <img
                  src="/images/chatbot-avatar.jpg"
                  alt=""
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="tr-chat-panel__head-info">
                <span className="tr-chat-panel__name">TRUMPF Cutting Assistant</span>
                <span className="tr-chat-panel__status">
                  <span className="tr-chat-panel__dot" aria-hidden="true" />
                  {c.online}
                </span>
              </div>
              <button
                className="tr-chat-panel__close"
                onClick={() => setOpen(false)}
                aria-label={c.close}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div className="tr-chat-panel__messages" role="log" aria-live="polite">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`tr-chat__msg tr-chat__msg--${msg.role === 'user' ? 'user' : 'bot'}`}
                >
                  <div className="tr-chat__bubble">{msg.content}</div>
                </div>
              ))}
              {loading && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="tr-chat-panel__footer">
              <textarea
                ref={inputRef}
                className="tr-chat__input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
                placeholder={PLACEHOLDER[lang] ?? PLACEHOLDER.de}
                rows={1}
                disabled={loading}
                aria-label={c.inputLabel}
              />
              <button
                className="tr-chat__send"
                onClick={send}
                disabled={!input.trim() || loading}
                aria-label={c.send}
              >
                <SendIcon />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
