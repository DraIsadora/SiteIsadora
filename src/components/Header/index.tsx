import Image from 'next/image'
import { useState } from 'react'
import Logo3 from '../../../public/Logo3.png'
import * as ga from '../../lib/gtag'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    sectionId: string,
    customOffset?: number,
  ) => {
    e.preventDefault()

    const section = document.getElementById(sectionId)
    let offset = customOffset || 0

    if (!customOffset) {
      const headerHeight = document.querySelector('.fixed')?.clientHeight || 0
      offset = headerHeight
    }

    if (section) {
      setMenuOpen(false)
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth',
      })
    }
  }

  const handleClick = (label: string) => {
    // Enviar evento de clique para o Google Analytics
    ga.event({
      action: 'Clique em botão',
      category: 'Navegação',
      label,
      value: undefined,
    })
  }

  return (
    <div className="relative">
      <div className="fixed w-full items-center bg-bege-100 shadow-md headerDra">
        <div className="flex w-full items-center justify-between px-6 py-4 md:px-56">
          <button
            onClick={(e) => {
              scrollToSection(e, 'home', 100)
              handleClick('Logo')
            }}
            className="focus:outline-none"
            id="ButtonLogoHeader"
          >
            <Image
              src={Logo3}
              width={185}
              height={185}
              alt="Logo Dra. Isadora"
            />
          </button>
          <div className="hidden items-center space-x-12 text-orange-1000 md:flex">
            <button
              onClick={(e) => {
                scrollToSection(e, 'aboutMe', 220)
                handleClick('Sobre Mim')
              }}
              style={{ cursor: 'pointer' }}
              className="focus:outline-none"
              id="ButtonSobreMimHeader"
            >
              Sobre Mim
            </button>
            <button
              onClick={(e) => {
                scrollToSection(e, 'atuação', 190)
                handleClick('Atuação')
              }}
              style={{ cursor: 'pointer' }}
              className="focus:outline-none"
              id="ButtonAtuacaoHeader"
            >
              Atuação
            </button>
            <button
              onClick={(e) => {
                scrollToSection(e, 'endereço')
                handleClick('Endereço')
              }}
              style={{ cursor: 'pointer' }}
              className="focus:outline-none"
              id="ButtonEnderecoHeader"
            >
              Endereço
            </button>
            <button
              onClick={(e) => {
                scrollToSection(e, 'duvidas', 160)
                handleClick('Dúvidas')
              }}
              style={{ cursor: 'pointer' }}
              className="focus:outline-none"
              id="ButtonDuvidasHeader"
            >
              Dúvidas
            </button>
            <a
              type="button"
              target="_blank"
              className="rounded-3xl bg-orange-10 px-7 py-1.5 text-whiteoff-100 transition duration-300 ease-in-out hover:bg-orange-10/80"
              href="https://wa.me/5511994373124"
              onClick={() => handleClick('Agendar Consulta')}
              id="ButtonAgendarConsultaHeader"
            >
              Agendar Consulta
            </a>
          </div>
          <div className="items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-esmeralda-800 p-2 text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-[74px] w-1/2 overflow-y-auto rounded-bl-3xl rounded-br-3xl  bg-orange-10 text-whiteoff-100 md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <button
              onClick={(e) => {
                scrollToSection(e, 'aboutMe', 80)
                handleClick('Sobre Mim')
              }}
              style={{ cursor: 'pointer' }}
              className="focus:outline-none"
              id="ButtonSobreMimMobile"
            >
              Sobre Mim
            </button>
            <button
              onClick={(e) => {
                scrollToSection(e, 'atuação', 190)
                handleClick('Atuação')
              }}
              style={{ cursor: 'pointer' }}
              className="focus:outline-none"
              id="ButtonAtuacaoMobile"
            >
              Atuação
            </button>
            <button
              onClick={(e) => {
                scrollToSection(e, 'endereço')
                handleClick('Endereço')
              }}
              style={{ cursor: 'pointer' }}
              className="focus:outline-none"
              id="ButtonEnderecoMobile"
            >
              Endereço
            </button>
            <button
              onClick={(e) => {
                scrollToSection(e, 'duvidas', 160)
                handleClick('Dúvidas')
              }}
              style={{ cursor: 'pointer' }}
              className="focus:outline-none"
              id="ButtonDuvidasMobile"
            >
              Dúvidas
            </button>
            <button
              type="button"
              className="rounded-2xl bg-bege-150 p-3 text-orange-1000 transition duration-300 ease-in-out hover:bg-bege-150/80"
              onClick={() => {
                handleClick('Agendar Consulta')
                window.open('https://wa.me/5511994373124', '_blank')
              }}
              id="ButtonAgendarConsultaMobile"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
