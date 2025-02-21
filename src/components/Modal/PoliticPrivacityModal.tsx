import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function PoliticPrivacityModal() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasAccepted = localStorage.getItem('acceptedPrivacyPolicy')

      if (!hasAccepted) {
        setShowModal(true)
      }
    }
  }, [])

  function acceptPrivacyPolicy() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('acceptedPrivacyPolicy', 'true')
      setShowModal(false)
    }
  }

  if (!showModal) {
    return null
  }

  return (
    <div className="fixed bottom-5 right-1 sm:right-5 z-50">
      <div className="flex flex-col bg-white rounded-md p-8 w-full md:max-w-[400px] items-center justify-between shadow-lg">
        <div className="flex flex-col gap-4">
          <span className="font-bold text-2xl">Nós Usamos Cookies.</span>
          <span className="text-sm font-medium text-gray-900 max-w-[300px]">
            Usamos cookies para garantir uma melhor experiência de navegação,
            bem como cookies de rastreamento para entender como você interage
            com o nosso site. Veja nossa{' '}
            <Link
              href="/politica-de-privacidade"
              className="font-semibold underline"
            >
              política de privacidade
            </Link>
          </span>
        </div>
        <div className="flex w-full items-center mt-4">
          <button
            onClick={acceptPrivacyPolicy}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}