import { motion } from "framer-motion"
import Image from "next/image"

const mockCardInfo = [
  {
    title: "Entrega rápida",
    description: 'Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem sed aliquet quam erat ut odio. Pellentesque habitant morbi',
    image: "/img-entrega.svg"
  },
  {
    title: "Entrega rápida",
    description: 'Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem sed aliquet quam erat ut odio. Pellentesque habitant morbi',
    image: "/img-entrega.svg"
  },
  {
    title: "Entrega rápida",
    description: 'Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem sed aliquet quam erat ut odio. Pellentesque habitant morbi',
    image: "/img-entrega.svg"
  },
  {
    title: "Entrega rápida",
    description: 'Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem sed aliquet quam erat ut odio. Pellentesque habitant morbi',
    image: "/img-entrega.svg"
  },
]

export function Cards() {
  return (
    <div className="w-[85%] m-auto flex flex-wrap gap-4 items-center justify-center">
      {mockCardInfo.map((card, index) => (
        <motion.div className="flex flex-col md:flex-row items-center w-full md:w-fit bg-white rounded-lg" key={index}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.50, delay: index * 0.1 }}>
          <div className="flex flex-col p-5 md:p-10 order-2 md:order-1">
            <h2 className="text-neutral-900 font-bold text-xl">{card.title}</h2>
            <p className="text-neutral-900 w-[300px]">{card.description}</p>
          </div>
          <div className="order-1 md:order-1 md:mr-8">
            <Image
              src={card.image}
              alt=""
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
