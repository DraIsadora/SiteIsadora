import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import Logo from "../../../public/Logo.png";
import * as ga from "../../lib/gtag";

export default function Footer() {
  const trackButtonClick = (category: string, label: string) => {
    // Envia os dados do evento de clique para o Google Analytics
    ga.event({
      action: "Clique em botão",
      category,
      label,
      value: undefined, // Definindo um valor padrão
    });
  };

  return (
    <div
      id="endereço"
      className="bg-orange-10 px-4 py-10 text-bege-100 md:px-40"
    >
      <div className="grid w-full items-start justify-center md:grid-cols-2">
        <div className="mb-8 flex flex-col gap-5 md:mb-0 md:w-[500px]">
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
                trackButtonClick("Contato", "WhatsApp");
                window.open("https://wa.me/5511994373124", "_blank");
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
                trackButtonClick("Contato", "WhatsApp");
                window.open("https://wa.me/5511987662698", "_blank");
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
                trackButtonClick("Contato", "Email");
                window.open("mailto:isadoraromaninib@gmail.com", "_blank");
              }}
            >
              isadoraromaninib@gmail.com
            </button>
          </div>
          <div className="flex items-center gap-2">
            <LuMapPin className="h-7 w-7" />
            <button
              id="ButtonGoogleMapsFooter"
              onClick={() => {
                trackButtonClick("Localização", "Google Maps");
                window.open(
                  "https://maps.app.goo.gl/4N3LHHtNLd1vKDCU7",
                  "_blank",
                );
              }}
            >
              Rua Itapeva, 366 - 131 Cj - Bela Vista - São Paulo
            </button>
          </div>
          <div className="flex items-center gap-2">
            <LuMapPin className="h-7 w-7" />
            <button
              id="ButtonGoogleMapsFooter"
              onClick={() => {
                trackButtonClick("Localização", "Google Maps");
                window.open(
                  "https://maps.app.goo.gl/5VjzyFNmkDoXKBCq9",
                  "_blank",
                );
              }}
            >
              Rua Almirante Brasil, 685, Sala 803, São Paulo - Mooca
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2616398393207!2d-46.65552202446094!3d-23.559044861507598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ca25df7d6f%3A0x4df17f16cf6bfb0b!2sR.%20Itapeva%2C%20366%20-%20Cj%20131%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001332-000!5e0!3m2!1spt-BR!2sbr!4v1707952021268!5m2!1spt-BR!2sbr"
            loading="lazy"
            height="300"
            width="100%"
          ></iframe> */}
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          id="ButtonPrivacyPolicyFooter"
          onClick={() => {
            trackButtonClick("Outros", "Política de Privacidade");
            window.open("/politica-de-privacidade", "_blank");
          }}
        >
          Política de Privacidade
        </button>
      </div>
    </div>
  );
}
