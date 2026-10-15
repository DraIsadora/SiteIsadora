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
                window.open('https://wa.me/5511925183909', '_blank')
              }}
            >
              (11) 92518-3909
            </button>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="h-7 w-7" />
            <button
              id="ButtonWhatsAppFooter"
              onClick={() => {
                trackButtonClick('Contato', 'WhatsApp')
                window.open('https://wa.me/5518996016258', '_blank')
              }}
            >
              (18) 99601-6258
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
                  'https://maps.app.goo.gl/73GLQHVBPdu1ePHp9',
                  '_blank',
                )
              }}
            >
              Avenida Antartica, 675 - Perdizes - São Paulo
            </button>
          </div>
          <div className="flex items-center gap-2">
            <LuMapPin className="h-7 w-7" />
            <button
              id="ButtonGoogleMapsFooter"
              onClick={() => {
                trackButtonClick('Localização', 'Google Maps')
                window.open(
                  'https://maps.app.goo.gl/RCQPWezpho6fNpHQA',
                  '_blank',
                )
              }}
            >
              Alameda Navarro de Andrade, 145 – Centro, Adamantina - SP
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:mb-0 altDisplayFlex">
         <iframe
  src="https://www.google.com/maps/place/Alameda+Navarro+de+Andrade,+145+-+Centro,+Adamantina+-+SP,+17800-007/@-21.6902472,-51.0733572,17z/data=!3m1!4b1!4m6!3m5!1s0x9496a3df645ecdf1:0x4fe3fbf894a635f7!8m2!3d-21.6902472!4d-51.0707823!16s%2Fg%2F11fmz8wc6v?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D"
  loading="lazy"
  height="300"
  width="48%"
  className='mapaFooter'
></iframe>
         <iframe
  src="https://www.google.com/maps?q=Avenida+Antartica,+675,+São+Paulo&output=embed"
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
