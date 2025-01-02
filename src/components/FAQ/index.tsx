import Image from 'next/image'
import { useState } from 'react'

interface FAQProps {
  question: string
  answer: string
  onClick: () => void // Adicionando a propriedade onClick
}

export default function FAQ({ question, answer, onClick }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    // Chama a função de callback onClick passada como propriedade
    onClick()
    // Torna o estado isOpen oposto ao atual
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`flex w-full cursor-pointer flex-col items-start justify-start`}
      onClick={handleClick} // Usando o handleClick como o manipulador de eventos onClick
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/atendimento.svg"
            alt="Ícone de Atendimento"
            className="mr-2 h-4 w-4 fill-current text-orange-1000"
            height="4"
            width="4"
          />
          <h2 className="text-start font-semibold uppercase leading-none md:text-xl">
            {question}
          </h2>
        </div>
        <span
          className={`ml-2 inline-block transform ease-in-out ${
            isOpen ? 'rotate-180' : ''
          } transition-transform`}
        >
          &#9660;
        </span>
      </div>

      <div
        className={`transition-max-h overflow-hidden ease-in-out ${
          isOpen ? 'max-h-[2000px]' : 'max-h-0'
        }`}
      >
        <p className="ml-6 mt-3 text-left text-base">{answer}</p>
      </div>
    </div>
  )
}
