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
              Avenida Antartica, 675 - São Paulo
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
              R. Fernando Falcão, 1111 - Cj 2305 - Mooca - São Paulo
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:mb-0 altDisplayFlex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1471009185407!2d-46.59091792454622!3d-23.563159761658532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eae871ec9e5%3A0x1c7d54a923fda87e!2sR.%20Fernando%20Falc%C3%A3o%2C%201111%20-%20Vila%20Claudia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003180-003!5e0!3m2!1spt-BR!2sbr!4v1779285165011!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
            loading="lazy"
            height="300"
            width="48%"
            className='mapaFooter'
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.079283551103!2d-46.67932262454734!3d-23.529650660428228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b7618d4a9f%3A0x67d5e28867784f43!2sAv.%20Ant%C3%A1rtica%2C%20675%20-%20Barra%20Funda%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005003-020!5e0!3m2!1spt-BR!2sbr!4v1779285280894!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
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
