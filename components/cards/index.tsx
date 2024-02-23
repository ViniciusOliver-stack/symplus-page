import { motion } from "framer-motion"
import Image from "next/image"

const mockCardInfo = [
  {
    title: "Entrega rápida",
    description:
      "Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem sed aliquet quam erat ut odio. Pellentesque habitant morbi",
    image: "/img-entrega.svg",
  },
  {
    title: "Entrega rápida",
    description:
      "Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem sed aliquet quam erat ut odio. Pellentesque habitant morbi",
    image: "/img-entrega.svg",
  },
  {
    title: "Entrega rápida",
    description:
      "Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem sed aliquet quam erat ut odio. Pellentesque habitant morbi",
    image: "/img-entrega.svg",
  },
  {
    title: "Entrega rápida",
    description:
      "Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem sed aliquet quam erat ut odio. Pellentesque habitant morbi",
    image: "/img-entrega.svg",
  },
]

export function Cards() {
  return (
    <div className="w-[85%] m-auto flex flex-wrap gap-4 items-center justify-center mb-8">
      {mockCardInfo.map((card, index) => (
        <div className="w-fit" key={index}>
          <div className="group relative grid overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-900 transition-colors duration-200" />
            <div className="flex space-x-4 items-center z-10">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-neutral-200">
                  {card.title}
                </h3>
                <p className="text-sm leading-[1.5] text-neutral-400 w-[320px]">
                  {card.description}
                </p>
              </div>
              <Image
                src={card.image}
                alt={card.title}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      ))}
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
