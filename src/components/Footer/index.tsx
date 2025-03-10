import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { LuMapPin, LuInstagram } from 'react-icons/lu'
import { MdOutlineEmail } from 'react-icons/md'
import Logo from '../../../public/Logo.png'
import * as ga from '../../lib/gtag'

export default function Footer() {
  const trackButtonClick = (category: string, label: string) => {
    // Envia os dados do evento de clique para o Google Analytics
    ga.event({
      action: 'Clique em botão',
      category,
      label,
      value: undefined, // Definindo um valor padrão
    })
  }

  return (
    <div
      id="endereço"
      className="bg-orange-10 px-4 py-10 text-bege-100 md:px-40"
    >
      <div className="grid w-full items-start justify-center md:grid-cols-2">
        <div className="mb-6 flex flex-col gap-5 md:mb-0 md:w-[500px] contactFooter">
          <Image
            className="rounded-md bg-bege-150 p-3"
            src={Logo}
            width={100}
            height={100}
            alt="Logo Dra. Isadora"
          />
          <div className="flex items-center gap-2">
            <FaWhatsapp className="h-7 w-7" />
            <button
              id="ButtonWhatsAppFooter"
              onClick={() => {
                trackButtonClick('Contato', 'WhatsApp')
                window.open('https://wa.me/5511994373124', '_blank')
              }}
            >
              (11) 99437-3124
            </button>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="h-7 w-7" />
            <button
              id="ButtonWhatsAppFooter"
              onClick={() => {
                trackButtonClick('Contato', 'WhatsApp')
                window.open('https://wa.me/5511987662698', '_blank')
              }}
            >
              (11) 98766-2698
            </button>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail className="h-7 w-7" />
            <button
              id="ButtonEmailFooter"
              onClick={() => {
                trackButtonClick('Contato', 'Email')
                window.open('mailto:isadoraromaninib@gmail.com', '_blank')
              }}
            >
              isadoraromaninib@gmail.com
            </button>
          </div>
          <div className="flex items-center gap-2">
            <LuInstagram className="h-7 w-7" />
            <button
              id="ButtonInstagramFooter"
              onClick={() => {
                trackButtonClick('Contato', 'Instagram')
                window.open('https://www.instagram.com/isadorarb/', '_blank')
              }}
            >
              @isadorarb
            </button>
          </div>
          <div className="flex items-center gap-2">
            <LuMapPin className="h-7 w-7" />
            <button
              id="ButtonGoogleMapsFooter"
              onClick={() => {
                trackButtonClick('Localização', 'Google Maps')
                window.open(
                  'https://maps.app.goo.gl/4N3LHHtNLd1vKDCU7',
                  '_blank',
                )
              }}
            >
              R. Itapeva, 366 - 131 Cj - Bela Vista - São Paulo
            </button>
          </div>
          <div className="flex items-center gap-2">
            <LuMapPin className="h-7 w-7" />
            <button
              id="ButtonGoogleMapsFooter"
              onClick={() => {
                trackButtonClick('Localização', 'Google Maps')
                window.open(
                  'https://maps.app.goo.gl/5VjzyFNmkDoXKBCq9',
                  '_blank',
                )
              }}
            >
              R. Almirante Brasil, 685, Sala 803, - Mooca - São Paulo
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:mb-0 altDisplayFlex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2615023868802!2d-46.6529471!3d-23.5590498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ac30b186ff%3A0xc6750200e85cdba9!2sDra%20Isadora%20Brambilla%20-%20Endocrinologista%20Pedi%C3%A1trica!5e0!3m2!1spt-BR!2sbr!4v1741202159845!5m2!1spt-BR!2sbr"
            loading="lazy"
            height="300"
            width="48%"
            className='mapaFooter'
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4538621877173!2d-46.6056879!3d-23.552137600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce593bd3df143d%3A0x4b9ce5cd6bd0ee9f!2sRua%3A%20Almirante%20Brasil%2C%20685%20-%20Mooca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003162-010!5e0!3m2!1spt-BR!2sbr!4v1741202267048!5m2!1spt-BR!2sbr"
            loading="lazy"
            height="300"
            width="48%"
            className='mapaFooter'
          ></iframe>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          id="ButtonPrivacyPolicyFooter"
          onClick={() => {
            trackButtonClick('Outros', 'Política de Privacidade')
            window.open('/politica-de-privacidade', '_blank')
          }}
        >
          Política de Privacidade
        </button>
      </div>
    </div>
  )
}