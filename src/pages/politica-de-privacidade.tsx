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
