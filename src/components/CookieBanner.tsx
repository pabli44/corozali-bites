import { useState } from 'react'
import './CookieBanner.css'

type Consent = 'granted' | 'denied'

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent | null>(() => {
    try {
      const stored = localStorage.getItem('cookieConsent')
      return stored === 'granted' || stored === 'denied' ? stored : null
    } catch {
      return null
    }
  })

  if (consent !== null) {
    return null
  }

  const accept = () => {
    try {
      localStorage.setItem('cookieConsent', 'granted')
    } catch {
      // Storage may be unavailable in private mode or with restrictions.
    }
    setConsent('granted')
  }

  const deny = () => {
    try {
      localStorage.setItem('cookieConsent', 'denied')
    } catch {
      // Storage may be unavailable in private mode or with restrictions.
    }
    setConsent('denied')
  }

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-label="Consentimiento de cookies"
    >
      <p className="cookie-banner-text">
        Usamos cookies propias y de terceros (incluido Google AdSense) para
        mejorar tu experiencia y mostrar publicidad relevante. Puedes aceptar o
        configurar tus preferencias. Más info en nuestra{' '}
        <a className="cookie-banner-link" href="/privacidad.html">
          Política de privacidad
        </a>
        .
      </p>
      <div className="cookie-banner-actions">
        <button
          type="button"
          className="cookie-banner-btn cookie-banner-btn-primary"
          onClick={accept}
        >
          Aceptar
        </button>
        <button
          type="button"
          className="cookie-banner-btn cookie-banner-btn-secondary"
          onClick={deny}
        >
          Solo necesarias
        </button>
        <a
          className="cookie-banner-btn cookie-banner-btn-ghost"
          href="/privacidad.html"
        >
          Política de privacidad
        </a>
      </div>
    </div>
  )
}
