import Image from "next/image"
import { InputFocusBlur } from "../inputFocusBlur"
import { Meteors } from "../ui/meteors"

export function Newsletter() {
  return (
    <div className="w-[85%] md:w-[60%] m-auto select-none ">
      <div className="">
        <div className=" inset-0 transform scale-[0.80] rounded-full blur-3xl" />
        <div className=" shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="md:grid md:grid-cols-2 items-center gap-10">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-4xl font-semibold">
                Assine nossa
                <span className="inline-block ml-2.5">
                  newsletter
                  <Image
                    src="/Underline-newsletter.svg"
                    alt=""
                    width={300}
                    height={30}
                  />
                </span>
              </p>
              <p>
                Não perca as últimas novidades em tecnologia e notícias
                exclusivas da nossa empresa! Assine nossa newsletter agora e
                mantenha-se à frente do jogo. Seja o primeiro a receber
                insights, atualizações e ofertas especiais diretamente na sua
                caixa de entrada. Junte-se à nossa comunidade de entusiastas de
                tecnologia hoje mesmo!
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-8 md:mt-8">
              <InputFocusBlur placeholder="Digite o seu email aqui" />
              <button
                className='isolate px-4 py-2 rounded-xl bg-transparent shadow-lg ring-1 ring-black/8 relative z-0 overflow-hidden whitespace-nowrap font-medium
            text-neutral-300 transition-all duration-300
              before:absolute before:inset-0
              before:-z-10 before:translate-y-[200%]
              before:scale-[2.5]
              before:rounded-[100%] before:bg-neutral-50
              before:transition-transform before:duration-1000
              before:content-[""]
              hover:scale-105 hover:text-neutral-900
              hover:before:translate-y-[0%]
              active:scale-100'
              >
                Assine agora!
              </button>
            </div>
          </div>

          {/* <Meteors number={20} /> */}
        </div>
      </div>
    </div>
  )
}
