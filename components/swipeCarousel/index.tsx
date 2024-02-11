import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"
import Image from "next/image"

const imgs = [
  "/example.png",
  "/Landingpage.webp",
  "/crm.jpg",
  "/software.webp",
  "/software.webp",
  "/software.webp",
]

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
}

interface TabsProps {
  tabsValue: {
    text: string
    imageUrl: string
    icon: string
    iconActive?: string // Adicione a propriedade iconActive
  }[]
}

export const SwipeCarousel = ({ tabsValue }: TabsProps) => {
  const [imgIndex, setImgIndex] = useState(0)

  const dragX = useMotionValue(0)

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get()

      if (x === 0) {
        setImgIndex((prevImage) => {
          if (prevImage === imgs.length - 1) {
            return 0
          }
          return prevImage + 1
        })
      }
    }, AUTO_DELAY)

    return () => clearInterval(intervalRef)
  }, [])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1)
    }
  }

  return (
    <div className="relative overflow-hidden py-8">
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} tabs={tabsValue} />
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
    </div>
  )
}

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="h-[350px] md:h-[700px] w-full aspect-video shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        )
      })}
    </>
  )
}

const Dots = ({
  imgIndex,
  setImgIndex,
  tabs,
}: {
  imgIndex: number
  setImgIndex: Dispatch<SetStateAction<number>>
  tabs: Array<any>
}) => {
  // Função para rolar a lista de botões para que o botão selecionado esteja sempre visível
  const scrollToSelectedButton = () => {
    const button = document.getElementById(`button-${imgIndex}`)
    if (button) {
      button.scrollIntoView({ behavior: "smooth", inline: "center" })
    }
  }

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    if (isMobile) {
      scrollToSelectedButton()
    }
  }, [imgIndex])

  return (
    <div className="flex md:flex-wrap items-center gap-12 md:gap-8 text-sm xs:text-base lg:text-lg lg:flex-nowrap overflow-x-auto py-4 lg:items-center lg:justify-center">
      {tabs.map((tab, idx) => {
        return (
          <button
            key={idx}
            id={`button-${idx}`} // Adicionando um ID único para cada botão
            onClick={() => setImgIndex(idx)}
            className={`transition-colors ${
              idx === imgIndex
                ? "text-blue-500 md:border-b md:border-b-blue-500"
                : "text-white"
            }`}
            style={{
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
            }}
          >
            {tab.icon && (
              <Image
                src={imgIndex === idx ? tab.iconActive || tab.icon : tab.icon}
                alt={tab.text}
                width={24}
                height={24}
                className="w-6 h-6 mr-2"
              />
            )}
            <p>{tab.text}</p>
          </button>
        )
      })}
    </div>
  )
}
