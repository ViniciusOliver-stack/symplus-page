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
    text: "Página Web",
    description:
      "Nossas landing pages e sites são projetadas para converter visitantes em clientes. Com designs atraentes e conteúdos autênticos, criamos páginas otimizadas que capturam a atenção do seu público-alvo e os guiam diretamente para a ação desejada. Desde o primeiro clique até a conversão, garantimos uma experiência envolvente e eficaz, aumentando assim as chances de sucesso para o seu negócio online.",
    imageStartPosition: "left",
    textStartPosition: "right",
    buttonText: "Saiba mais",
    buttonLink: "/landing-page",
  },
  {
    id: 2,
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1645205958185/sdsAgMv12.png",
    text: "Tráfego Pago",
    description:
      "Maximize o alcance e a relevância do seu negócio online com nosso serviço de gestão de tráfego. Utilizamos estratégias avançadas de publicidade digital para direcionar um fluxo qualificado de visitantes para o seu site, aumentando assim sua visibilidade e conversões. Desde campanhas segmentadas até otimização contínua, garantimos o melhor retorno sobre o investimento em cada clique.",
    imageStartPosition: "right",
    textStartPosition: "left",
    buttonText: "Saiba mais",
    buttonLink: "/texto-2",
  },

  {
    id: 3,
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1645205958185/sdsAgMv12.png",
    text: "Geração de Leads",
    description:
      "Aprimore sua presença online e cultive relacionamentos duradouros com nossa estratégia de geração de leads. Através de conteúdo relevante e estratégias de SEO eficazes, capturamos a atenção do seu público-alvo, nutrimos seu interesse e os convertemos em leads qualificados. Desde blogs informativos até campanhas de email marketing personalizadas, estamos aqui para impulsionar o crescimento sustentável do seu negócio.",
    imageStartPosition: "left",
    textStartPosition: "right",
    buttonText: "Saiba mais",
    buttonLink: "/landing-page",
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
