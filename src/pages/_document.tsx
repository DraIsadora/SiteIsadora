import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {typeof window !== 'undefined' &&
          localStorage.getItem('acceptedPrivacyPolicy') === 'true' && (
            <>
              {/* Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    'anonymize_ip': true,
                    'allow_ad_personalization_signals': false,
                    'allow_google_signals': false
                  });
                `,
                }}
              />
              {/* Google Ads */}
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
                `,
                }}
              />
            </>
          )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}