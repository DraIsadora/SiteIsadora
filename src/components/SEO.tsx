import { DefaultSeo } from 'next-seo'

const SEO = () => {
  return (
    <DefaultSeo
      title="Dra. Isadora Romanini Brambilla"
      description="Dra. Isadora R. Brambilla, especialista em pediatria e endocrinologia pediátrica. Agende uma consulta hoje mesmo."
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        url: 'draisadorabrambilla.com.br',
        site_name:
          'Dra. Isadora R. Brambilla - Especialista em Pediatria e Endocrinologia Pediátrica',
      }}
    />
  )
}

export default SEO
