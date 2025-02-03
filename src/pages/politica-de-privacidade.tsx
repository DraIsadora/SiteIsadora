import Footer from '@/components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo3 from 'public/Logo3.png'
import { useEffect, useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaArrowUp } from 'react-icons/fa'

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <div className="w-full bg-bege-150">
        <div className="fixed w-full items-center bg-bege-100 shadow-md">
          <div className="flex md:px-56 bg-bege-100 w-full justify-center items-center px-6 py-4  ">
            <Link href="/">
              <Image
                src={Logo3}
                width={185}
                height={185}
                alt="Logo Dra. Isadora"
              />
            </Link>
          </div>
        </div>
        <Head>
          <title>Política de Privacidade</title>
        </Head>

        <div className="md:px-28 pb-10 2xl:px-36 pt-32 px-6">
          <h1 className="text-4xl text-center font-semibold mb-4">
            Política de Privacidade
          </h1>

          <p className="mb-12 text-center">
            Esta Política de Privacidade explica como coletamos, utilizamos e protegemos as informações pessoais dos usuários de nosso site. Ao acessar e utilizar nossos serviços, você concorda com os termos aqui descritos.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            1. Coleta de Informações
          </h2>
          <p className="mb-8">
          Coletamos informações conforme sua interação com nosso site. Os dados podem incluir:
            <ol>
              <li>Informações de navegação (endereço IP, tipo de dispositivo, navegador utilizado e páginas acessadas);</li>
              <li>Preferências e interações com nosso conteúdo;</li>
              <li>Dados fornecidos voluntariamente por meio de formulários de contato ou cadastros.</li>
            </ol>
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            2. Uso das informações
          </h2>
          <p className="mb-8">
            As informações que coletamos são usadas para melhorar a experiência
            do usuário em nosso site, fornecer serviços aos usuários, cumprir
            nossas obrigações legais e para outros fins legítimos e comerciais.
          </p>

          <h2 className="text-2xl font-semibold mb-2">3. Cookies</h2>
          <p className="mb-8">
            Utilizamos cookies para melhorar a experiência do usuário em nosso
            site. Os cookies são arquivos com uma pequena quantidade de dados
            que são comumente usados como identificadores exclusivos anônimos.
            Eles são enviados para o seu navegador a partir do site que você
            visita e são armazenados no disco rígido do seu computador.
          </p>

          <h2 className="text-2xl font-semibold mb-2">4. Google Analytics</h2>
          <p className="mb-8">
            Usamos o Google Analytics para coletar informações sobre como os
            usuários interagem com nosso site. Essas informações incluem o
            número de visitantes do site, as páginas visitadas, o tempo gasto no
            site, entre outros dados similares. As informações coletadas pelo
            Google Analytics são usadas para melhorar a experiência do usuário
            em nosso site e para analisar o desempenho do site.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            5. Divulgação das informações
          </h2>
          <p className="mb-8">
            Não divulgamos informações pessoais dos usuários a terceiros, exceto
            quando exigido por lei ou para cumprir nossas obrigações legais.
          </p>
        </div>
        <Footer />
        <div
          className={`fixed bottom-6 right-6 bg-bege-150 opacity-70 p-3 rounded-full text-orange-1000 cursor-pointer transition duration-300 ease-in-out ${
            scrolled ? 'block' : 'hidden'
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowUp size={24} />
        </div>
        <div
          className="fixed mb-8 bottom-16 right-6 bg-green-500 p-3 rounded-full text-white cursor-pointer transition duration-300 ease-in-out hover:bg-green-600 animate-bounce"
          onClick={() => window.open('https://wa.me/5511994373124', '_blank')}
        >
          <BsWhatsapp size={36} />
        </div>
      </div>
    </>
  )
}
