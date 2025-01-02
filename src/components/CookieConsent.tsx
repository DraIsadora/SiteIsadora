import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    const consent = document.cookie
      .split(';')
      .some((item) => item.trim().startsWith('consent='))
    setConsent(consent)
  }, [])

  const acceptCookies = () => {
    document.cookie = 'consent=true; max-age=' + 60 * 60 * 24 * 30 // Cookie válido por 30 dias
    setConsent(true)
  }

  if (consent) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#222',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      Este site usa cookies para melhorar sua experiência. Ao continuar a
      navegar, você concorda com o uso de cookies.
      <button
        onClick={acceptCookies}
        style={{
          marginLeft: '10px',
          padding: '5px 10px',
          background: '#4CAF50',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Aceitar
      </button>
    </div>
  )
}
