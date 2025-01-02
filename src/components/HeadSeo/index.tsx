import Head from 'next/head'

interface SeoProps {
  title: string
  description?: string
}

export function HeadSeo({ title, description }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta
        name="description"
        content="Dra. Isadora R. Brambilla, especialista em pediatria e endocrinologia pediátrica. Agende uma consulta hoje mesmo."
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="draisadorabrambilla.com.br" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <link rel="apple-touch-icon" sizes="192x192" href="/Logo.ico" />
      <link rel="icon" type="image/ico" href="/Logo.ico" sizes="190" />
    </Head>
  )
}
