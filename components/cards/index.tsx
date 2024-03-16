import { motion } from "framer-motion"
import Image from "next/image"
import { TitleInformation } from "../titleInformation"
import Link from "next/link"

const mockCardInfo = [
  {
    title: "Design de Excelência",
    description:
      "Design excepcional que cativa seus visitantes, combinando criatividade e precisão para uma experiência visual impactante.",
    image: "/design.svg",
  },
  {
    title: "Performance Otimizada",
    description:
      "Garantimos resultados excepcionais otimizando cada detalhe, mantendo seus clientes engajados e convertendo.",
    image: "/performance.svg",
  },
  {
    title: "Atendimento Personalizado",
    description:
      "Experiência personalizada para cada cliente, adaptando nossas soluções para garantir sua satisfação.",
    image: "/atendimento-1.svg",
  },
  {
    title: "Suporte ao Cliente",
    description:
      "Estamos prontos para resolver suas dúvidas com precisão e simpatia. Conte conosco para uma experiência de suporte sem igual, onde sua satisfação é nossa prioridade!",
    image: "/customer.svg",
  },
]

export function Cards() {
  return (
    <div
      className="w-[85%] m-auto flex flex-col md:flex-row items-center justify-center gap-8 scroll-section mb-12"
      id="services"
    >
      <div className="md:w-[450px] flex flex-col justify-center items-center">
        <TitleInformation
          title="Motivos para investir com a Symplus"
          description="Com a Symplus, seu investimento é mais do que uma escolha: é o caminho para um crescimento exponencial. Desfrute de um retorno rápido, alcance expandido de clientes e aprimoramento contínuo dos serviços. Conte conosco para impulsionar seu sucesso, com suporte técnico excepcional e uma parceria sólida."
        />

        <Link
          href="/contact"
          className='relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-300 transition-all duration-300
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100 w-fit'
        >
          Fale Conosco
        </Link>
      </div>

      <div className="flex flex-wrap md:grid md:grid-cols-2 gap-4 items-center justify-center">
        {mockCardInfo.map((card, index) => (
          <motion.div
            className=""
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="group relative grid overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-900 transition-colors duration-200" />
              <div className="flex space-x-4 items-center z-10">
                <div className=" flex flex-col space-y-2">
                  <h3 className="text-xl font-semibold text-neutral-200">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-[1.5] text-neutral-400 w-[250px]">
                    {card.description}
                  </p>
                </div>
                <div className="hidden md:block">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    // <div className="w-[85%] m-auto flex flex-wrap gap-4 items-center justify-center">
    //   {mockCardInfo.map((card, index) => (
    //     <motion.div className="flex flex-col md:flex-row items-center w-full md:w-fit bg-white rounded-lg" key={index}
    //     initial={{ opacity: 0, x: -100 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     exit={{ opacity: 0, x: -100 }}
    //     transition={{ duration: 0.50, delay: index * 0.1 }}>
    //       <div className="flex flex-col p-5 md:p-10 order-2 md:order-1">
    //         <h2 className="text-neutral-900 font-bold text-xl">{card.title}</h2>
    //         <p className="text-neutral-900 w-[300px]">{card.description}</p>
    //       </div>
    //       <div className="order-1 md:order-1 md:mr-8">
    //         <Image
    //           src={card.image}
    //           alt=""
    //           width={250}
    //           height={250}
    //         />
    //       </div>
    //     </motion.div>
    //   ))}
    // </div>
  )
}
