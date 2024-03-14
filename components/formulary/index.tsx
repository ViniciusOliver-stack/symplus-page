import Image from "next/image"
import { Formulario } from "../ui/inputForm"

export function Formulary() {
  return (
    <div className="w-[85%] m-auto scroll-section mt-20" id="contact">
      <div className="flex items-center justify-around flex-col md:flex-row gap-6 flex-wrap">
        <div>
          <div className="flex flex-col gap-4">
            <p className="uppercase font-light text-lg">Fale Conosco</p>
            <h3 className="text-5xl md:w-[550px]">
              Vamos levar sua marca ao próximo
              <span className="text-blue-700 ml-1.5">nível</span>.
            </h3>
            <p className="text-lg text-neutral-500 max-w-[450px]">
              Sabemos que provavelmente você tem uma rotina corrida, mas em{" "}
              <span className="text-white">40 minutos</span>, conseguimos
              apresentar tudo aquilo que é relevante para você começar a
              alcançar o <span className="text-white">próximo nível</span>.{" "}
              <br />
            </p>
          </div>
        </div>

        <Formulario />
      </div>
    </div>
  )
}
