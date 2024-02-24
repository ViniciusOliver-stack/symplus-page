import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface Item {
  id: number
  image: string
  text: string
  description: string
  imageStartPosition: string
  textStartPosition: string
  buttonText: string
  buttonLink: string
}

const items = [
  {
    id: 1,
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1645205958185/sdsAgMv12.png",
    text: "Landing Page",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio quo, sapiente officia ipsum aperiam quas corporis provident qui sint dicta dolor, expedita voluptatum tenetur aut, distinctio assumenda modi molestiae!",
    imageStartPosition: "left",
    textStartPosition: "right",
    buttonText: "Saiba mais",
    buttonLink: "/landing-page",
  },
  {
    id: 2,
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1645205958185/sdsAgMv12.png",
    text: "Texto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio quo, sapiente officia ipsum aperiam quas corporis provident qui sint dicta dolor, expedita voluptatum tenetur aut, distinctio assumenda modi molestiae!",
    imageStartPosition: "right",
    textStartPosition: "left",
    buttonText: "Saiba mais",
    buttonLink: "/texto-2",
  },
  // Adicione mais itens conforme necessário
]

const ScrollEffect = () => {
  return (
    <div className="my-20">
      {items.map((item) => (
        <div key={item.id}>
          <ScrollItem
            id={item.id}
            image={item.image}
            text={item.text}
            description={item.description}
            imageStartPosition={item.imageStartPosition}
            textStartPosition={item.textStartPosition}
            buttonText={item.buttonText}
            buttonLink={item.buttonLink}
          />
        </div>
      ))}
    </div>
  )
}

const ScrollItem = ({
  id,
  image,
  text,
  description,
  imageStartPosition,
  textStartPosition,
  buttonText,
  buttonLink,
}: Item) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: id === 1 ? -100 : 100 },
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
        className={`w-full md:w-1/2 ${
          imageStartPosition === "left" ? "order-1" : "order-2"
        }`}
      >
        <Image
          src={image}
          className="w-full h-auto rounded"
          alt="Imagem Apresentação dos projetos"
          width={1000}
          height={1000}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, delay: 0.5 }}
        className={`w-full md:w-1/2 md:flex flex-col gap-4 mb-8 ${
          textStartPosition === "left" ? "order-1" : "order-2"
        }`}
      >
        <h2 className="text-3xl mb-4 font-semibold">{text}</h2>
        <p>{description}</p>
        <div className="mt-4">
          <Link href={buttonLink} className="text-blue-500">
            {buttonText}
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ScrollEffect
