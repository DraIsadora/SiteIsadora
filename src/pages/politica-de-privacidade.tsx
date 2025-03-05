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
          <h1 className="text-4xl text-left font-semibold mb-4">
            Política de Privacidade
          </h1>

          <p className="mb-12 text-left">
            A sua privacidade é essencial para nós. Esta Política de Privacidade
            detalha como coletamos, utilizamos, armazenamos e protegemos suas
            informações pessoais ao acessar e utilizar nosso site. Ao continuar a
            navegação, você concorda com as diretrizes descritas nesta política.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              1. Informações que coletamos
            </h2>
            <p >
              Coletamos informações pessoais e não pessoais conforme sua interação com nosso site.
              Os dados podem incluir:
            </p>
            <ul>
              <li>
                <b>Fornecidos diretamente por você: </b>ao preencher formulários, se inscrever para
                newsletters ou entrar em contato conosco.
              </li>
              <li>
                <b>Coletados automaticamente: </b>endereço IP, tipo de navegador, dispositivo utilizado,
                páginas visitadas e dados de navegação por meio de cookies e tecnologias semelhantes.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              2. Uso das informações
            </h2>
            <p>As informações coletadas são utilizadas para:</p>
            <ul>
              <li>Melhorar a experiência do usuário;</li>
              <li>Fornecer e aprimorar nossos serviços;</li>
              <li>Personalizar conteúdos e ofertas;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              3. Cookies e Tecnologias Semelhantes
            </h2>
            <p>
              Utilizamos cookies para otimizar sua experiência. Eles permitem lembrar suas preferências,
              personalizar conteúdo e analisar o desempenho do site. Você pode gerenciar suas configurações
              de cookies no navegador, podendo restringi-los ou bloqueá-los conforme desejar.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              4. Google Analytics e Ferramentas de Monitoramento
            </h2>
            <p>
              Usamos o Google Analytics para entender como os visitantes interagem com nosso site. Os dados
              coletados incluem páginas visitadas, tempo de navegação, origem do tráfego e outras métricas.
              Essas informações são utilizadas para aprimorar o conteúdo e o desempenho do site. Você pode
              desativar o rastreamento do Google Analytics alterando as configurações do seu navegador.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              5. Compartilhamento e Divulgação de Informações
            </h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
              exceto nos seguintes casos:
            </p>
            <ul>
              <li>Para cumprimento de obrigações legais ou exigências governamentais;</li>
              <li>Com prestadores de serviço que auxiliam na operação do site e suporte ao cliente,
                garantindo a segurança dos dados.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              6. Segurança das Informações
            </h2>
            <p>
              Adotamos medidas técnicas e administrativas para proteger suas informações contra acessos não
              autorizados, alteração, divulgação ou destruição indevida. Apesar de nossos esforços, não
              podemos garantir segurança absoluta na transmissão de dados pela internet.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              7. Seus Direitos
            </h2>
            <p>
              De acordo com a legislação aplicável, você tem direito de:
            </p>
            <ul>
              <li>Acessar, corrigir ou atualizar suas informações pessoais;</li>
              <li>Solicitar a exclusão de seus dados, salvo obrigações legais;</li>
              <li>Revogar consentimentos previamente concedidos. Para exercer seus direitos,
                entre em contato pelo e-mail: isadoraromaninib@gmail.com .</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              8. Compartilhamento e Divulgação de Informações
            </h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
              exceto nos seguintes casos:
            </p>
            <ul>
              <li>Para cumprimento de obrigações legais ou exigências governamentais;</li>
              <li>Com prestadores de serviço que auxiliam na operação do site e suporte ao cliente,
                garantindo a segurança dos dados.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              8. Alterações na Política de Privacidade
            </h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente. Qualquer alteração será
              comunicada por meio do nosso site e a data de revisão será atualizada.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              9. Contatos
            </h2>
            <p>
              Se tiver dúvidas sobre nossa Política de Privacidade, entre em contato conosco:
            </p>
            <p>
              <b>Dra. Isadora Brambilla</b><br />
              <b>Telefone: </b>(11) 99437-3124<br />
              <b>Endereço: </b>R. Itapeva, 366 - Cj 131 - Bela Vista, São Paulo - SP, 01332-000<br />
            </p>
            <p>Ao continuar a utilizar nosso site, você confirma que leu e concorda com os termos desta Política de Privacidade.</p>
          </div>


        </div>
        <Footer />
        <div
          className={`fixed bottom-6 right-6 bg-bege-150 opacity-70 p-3 rounded-full text-orange-1000 cursor-pointer transition duration-300 ease-in-out ${scrolled ? 'block' : 'hidden'
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