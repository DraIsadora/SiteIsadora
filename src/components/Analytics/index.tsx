import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import * as ga from '../../lib/gtag'

export default function Analytics() {
  const router = useRouter()

  useEffect(() => {
    const handleRouterChange = (url: string) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouterChange)

    // Adiciona um listener de evento de clique globalmente
    document.addEventListener('click', handleClickEvent)

    return () => {
      router.events.off('routeChangeComplete', handleRouterChange)
      document.removeEventListener('click', handleClickEvent)
    }
  }, [router.events])

  // Função para lidar com eventos de clique nos botões
  const handleClickEvent = (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
      // Obtém o texto do botão
      const buttonId = event.target.id

      // Envia os dados do evento de clique para o Google Analytics
      ga.event({
        action: 'Clique em botão',
        category: 'Botão',
        label: buttonId,
        value: undefined, // Valor opcional, deixe como undefined para botões
      })
    }
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>

      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('event', 'page_view', {
            send_to: '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}',
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
