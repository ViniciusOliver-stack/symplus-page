import Image from "next/image"
import { Formulario } from "../ui/inputForm"

export function Formulary() {
  return (
    <div className="w-[85%] m-auto scroll-section" id="contact">
      <div className="flex flex-col md:flex-row gap-6 flex-wrap items-center justify-between">
        <div>
          <Image
            className="-z-50 absolute -left-44 mt-24"
            src="/Rectangle 45.svg"
            alt=""
            width={600}
            height={500}
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-5xl md:w-[550px]">
              Vamos levar sua marca ao próximo
              <span className="text-blue-700 ml-1.5">nível</span>.
            </h3>
            <p className="text-lg text-neutral-500">
              Você pode entrar em contato conosco a qualquer momento <br /> via
              <span className="text-blue-700 ml-1.5">contato@symplus.net</span>
            </p>
          </div>

          <Image
            className="hidden md:block"
            src="/Revenue-bro 1.svg"
            alt=""
            width={400}
            height={400}
          />
        </div>

        <Formulario />
      </div>
    </div>
  )
}
