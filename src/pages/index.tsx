import Cards from '@/components/Cards'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TextBox from '@/components/TextBox'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaArrowUp } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import DraIsadora from '../../public/Isadora.png'
import * as ga from '../lib/gtag'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          bottom: '-70px',
          textAlign: 'center',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  }

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', checkIsMobile)
    checkIsMobile()

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

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

  const handleClick = (id: string) => {
    // Envia um evento de clique para o Google Analytics com o ID do botão como rótulo
    ga.event({
      action: 'Clique em Botão',
      category: 'Interacao',
      label: `Botao_${id}`,
      value: 1, // Valor opcional, se necessário
    })
  }

  return (
    <div className="min-h-full">
      <div className="fixed top-0 z-10 w-full">
        <Header />
      </div>

      {/* Home */}
      <div
        id="home"
        className="mt-20 flex h-[450px] w-full items-center justify-center bg-[url('../../public/Criancas2.png')] bg-center bg-no-repeat px-4 md:mt-10 md:h-screen md:bg-[url('../../public/Criancas.png')] md:bg-cover md:px-56"
      >
        <div className="item-center ml-auto flex w-[270px] flex-col rounded-3xl bg-blackgray-100/[0.65] p-6 text-bege-150 mt-[50px] md:w-[440px] md:p-11">
          <div className="flex flex-col">
            <h1 className="text-left text-2xl uppercase leading-[40px] md:text-5xl md:leading-[60px]">
              DRA. Isadora R. Brambilla
            </h1>
            <span className="text-left">Endocrinologista pediátrica</span>
          </div>
          <div className="mt-2 flex flex-col gap-4 md:gap-8">
            <span className="text-base md:text-2xl">
              CRM 191745 | RQE 979211
            </span>
            <button
              id="HomeButton"
              onClick={() => {
                handleClick('HomeButton')
                window.open('https://wa.me/5511994373124', '_blank')
              }}
              className="rounded-full bg-bege-150 p-2 text-center text-base text-orange-1000 transition duration-300 ease-in-out hover:bg-bege-150/80 md:p-3 md:text-xl"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>

      {/* AboutMe */}
      <div id="aboutMe" className="bg-bege-150 px-3 pt-16 md:h-full md:px-32">
        <div className="relative flex w-full flex-col items-center justify-center gap-4 rounded-[30px] bg-orange-10 px-4 py-8 text-center text-bege-150 shadow-2xl -top-[100px] md:-top-[153px] md:gap-5 md:rounded-[50px] md:px-32">
          <div className="w-[10%] rounded-full border-2 border-orange-1000 md:w-[5%]" />
          <h1 className="mb-4 text-base font-semibold uppercase leading-none md:mb-6 md:text-3xl">
            DRA. ISADORA R. BRAMBILLA
          </h1>
          <div className="grid w-full grid-cols-1 items-start md:grid-cols-2 ">
            <div className="mb-4 flex items-center justify-start">
              <Image
                src={DraIsadora}
                alt="Dra Isadora"
                className="mx-auto h-auto w-full imageDra"
              />
            </div>
            <div className="flex h-full w-full flex-col gap-6 text-left justify-center">
              <TextBox>
                Graduada em Medicina pela Universidade do Oeste Paulista
                (UNOESTE).
              </TextBox>
              <TextBox>
                Residência Médica em Pediatria pela Faculdade de Medicina de São
                José do Rio Preto (FAMERP).
              </TextBox>
              <TextBox>
                Título de Especialista em Pediatria pela Sociedade Brasileira de
                Pediatria.
              </TextBox>
              <TextBox>
                Especialização em Endocrinologia Pediátrica pela Santa Casa de
                Misericórdia de São Paulo.
              </TextBox>
              <TextBox>
                Título de Especialista em Endocrinologia Pediátrica pela
                Sociedade Brasileira de Pediatria.
              </TextBox>
              <TextBox>
                Aperfeiçoamento em Diabetes Pediátrica pela Santa Casa de
                Misericórdia de São Paulo.
              </TextBox>
            </div>
          </div>
        </div>

        {/* Atuacao */}
        <div
          id="atuação"
          className="relative -top-[95px] flex flex-col items-center justify-center gap-7 "
        >
          <h1 className="mt-40 text-3xl font-semibold uppercase leading-none text-orange-1000 md:mt-0 textAtuacao">
            ÁREAS DE ATUAÇÃO
          </h1>
          {isMobile ? (
            <Slider {...settings} className="mx-auto mt-4 max-w-[80%] px-3">
              <div className="p-6">
                <Cards>Distúrbios de crescimento</Cards>
              </div>
              <div className="p-6">
                <Cards>Diabetes</Cards>
              </div>
              <div className="p-6">
                <Cards>Puberdade Precoce ou Atrasada</Cards>
              </div>
              <div className="p-6">
                <Cards>Aparecimento Precoce de Pelos</Cards>
              </div>
              <div className="p-6">
                <Cards>Doenças da glândula suprarrenal</Cards>
              </div>
              <div className="p-6">
                <Cards>Obesidade</Cards>
              </div>
              <div className="p-6">
                <Cards>Alterações do Colesterol e Triglicerides</Cards>
              </div>
              <div className="p-6">
                <Cards>Distúrbios da tireóide</Cards>
              </div>
              <div className="p-6">
                <Cards>Acondroplasia</Cards>
              </div>
              <div className="p-6">
                <Cards>Doenças da hipófise</Cards>
              </div>
            </Slider>
          ) : (
            <div className="grid grid-cols-5 gap-5">
              <Cards>Distúrbios de crescimento</Cards>
              <Cards>Diabetes</Cards>
              <Cards>Puberdade Precoce ou Atrasada</Cards>
              <Cards>Aparecimento Precoce de Pelos</Cards>
              <Cards>Doenças da glândula suprarrenal</Cards>
              <Cards>Obesidade</Cards>
              <Cards>Alterações do Colesterol e Triglicerides</Cards>
              <Cards>Distúrbios da tireóide</Cards>
              <Cards>Acondroplasia</Cards>
              <Cards>Doenças da hipófise</Cards>
            </div>
          )}
        </div>
      </div>

      {/* Duvidas */}
      <div
        id="duvidas"
        className="flex h-full flex-col items-center justify-center bg-bege-150 px-3 md:px-32"
      >
        <div className="mb-16 flex w-full flex-col items-center justify-center gap-5 rounded-3xl bg-orange-10 px-6 py-8 text-center text-bege-150 shadow-2xl md:rounded-[50px] md:px-32">
          <div className="w-[10%] rounded-full border-2 border-orange-1000" />
          <h2 className="mb-6 text-3xl font-semibold uppercase leading-none">
            DÚVIDAS FREQUENTES
          </h2>
          <div className="flex flex-col items-start gap-6">
            <FAQ
              question="Atende por telemedicina?"
              answer="Sim, é só escolher a opção quando for agendar a consulta."
              onClick={() => handleClick('AtendeTelemedicina')}
            />
            <FAQ
              question="Quais as formas de pagamento?"
              answer="Dinheiro, transferência bancária, cartão de crédito ou PIX."
              onClick={() => handleClick('FormasDePagamento')}
            />
            <FAQ
              question="A minha consulta será agendada para o mesmo dia?"
              answer="Após analisar a urgência, faremos o agendamento o mais rápido possível. Se houver disponibilidade, haverá possibilidade de ocorrer no mesmo dia."
              onClick={() => handleClick('ConsultaMesmoDia')}
            />
            <FAQ
              question="Para reembolso do convênio, é emitido nota?"
              answer="Sim, o faremos ao fim da consulta."
              onClick={() => handleClick('ReembolsoConvênio')}
            />
            <FAQ
              question="Tem atendimento por convênio?"
              answer="Não, nosso atendimento é exclusivamente particular. Priorizamos oferecer um serviço personalizado e de alta qualidade, garantindo um acompanhamento diferenciado para cada paciente."
              onClick={() => handleClick('AtendimentoConvênio')}
            />
            <FAQ
              question="Qual a idade máxima para atendimento?"
              answer="Atendemos pacientes com idade máxima de 16 anos. Nosso foco é oferecer um atendimento especializado para crianças e adolescentes, proporcionando um ambiente acolhedor e adequado para essa faixa etária."
              onClick={() => handleClick('IdadeAtendimento')}
            />

          </div>
          <button
            className="my-8 rounded-full bg-bege-150 px-20 py-2 text-center text-xl font-semibold text-orange-10 transition duration-300 ease-in-out hover:bg-bege-150/95"
            onClick={() => {
              handleClick('ButtonClearDoubt')
              window.open('mailto:isadoraromaninib@gmail.com', '_blank')
            }}
          >
            Tire sua duvida?
          </button>
        </div>
        <button
          className="mb-16 rounded-full bg-orange-10 px-20 py-2 text-center text-xl font-semibold text-bege-150 transition duration-300 ease-in-out hover:bg-orange-10/80"
          onClick={() => {
            handleClick('DoubtButton')
            window.open('https://wa.me/5511994373124', '_blank')
          }}
        >
          Agendar Consulta
        </button> 
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
      <button
        className="fixed mb-8 bottom-16 right-6 bg-green-500 p-3 rounded-full text-white cursor-pointer transition duration-300 ease-in-out hover:bg-green-600 animate-bounce"
        onClick={() => {
          handleClick('WhatsAppButton')
          window.open('https://wa.me/5511994373124', '_blank')
        }}
      >
        <BsWhatsapp size={36} />
      </button>
    </div>
  )
}

console.log('GOOGLE_ANALYTICS_ID:', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID)
