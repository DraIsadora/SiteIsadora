import Analytics from '@/components/Analytics'
import { HeadSeo } from '@/components/HeadSeo'
import PoliticPrivacityModal from '@/components/Modal/PoliticPrivacityModal'
import SEO from '@/components/SEO'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadSeo
        title='Dra. Isadora Romanini Brambilla...'
        description='Dra. Isadora R. Brambilla, especialista em pediatria e endocrinologia pediátrica'
      />
      <Analytics />
      <main>
        <SEO />
        <Component {...pageProps} />
        <PoliticPrivacityModal />
      </main>
    </>
  );
}
