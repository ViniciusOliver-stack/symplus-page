import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb"

import LogoSymplus from "/public/Symplus.svg"

import { HiArrowDownRight } from "react-icons/hi2"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const getYear = new Date().getFullYear()

  return (
    <footer className="text-white">
      <div className="w-[85%] m-auto px-4 pb-6 pt-24 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-blue-700 sm:justify-start">
              <Image
                src={LogoSymplus}
                alt="Logo Symplus"
                width={50}
                height={50}
              />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Potencialize sua Criatividade, Conquiste Clientes e Alcance Novos
              Patamares de Sucesso. Juntos, Podemos Mais!
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <Link
                  href="https://www.instagram.com/sym.plus?igsh=MWd0cDdsazJ6YWZlZQ=="
                  className="flex items-center gap-3"
                  target="_blank"
                >
                  <TbBrandInstagram size={22} />
                  Instagram
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="flex items-center gap-3"
                  target="_blank"
                >
                  <TbBrandLinkedin size={22} />
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-3xl font-medium text-neutral-200">Brasil</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    href="https://wa.me/+5577988500766?text=Tenho%20interesse%20em%20conhecer%20melhor%20o%20seu%20produto!"
                    target="_blank"
                    className="text-neutral-700 font-medium"
                  >
                    +55 77 988500766
                  </Link>
                </li>

                <li>
                  <Link
                    href="mailto:contact@symplus.net"
                    className="text-neutral-700 font-medium"
                  >
                    contact@symplus.net
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-3xl font-medium text-neutral-200">EUA</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-neutral-700 font-medium">
                    Coming soon
                  </Link>
                </li>

                <li>
                  <Link
                    href="mailto:contact@symplus.net"
                    className="text-neutral-700 font-medium"
                  >
                    contact@symplus.net
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-3xl font-medium text-neutral-200">Europa</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-neutral-700 font-medium">
                    Coming soon
                  </Link>
                </li>

                <li>
                  <Link
                    href="mailto:contact@symplus.net"
                    className="text-neutral-700 font-medium"
                  >
                    contact@symplus.net
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">
                Todos os direitos reservados.
              </span>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; Copyright {getYear} Symplus
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
