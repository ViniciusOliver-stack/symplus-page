import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Tab {
  text: string
  icon: string
  imageUrl: string
}

interface TabsProps {
  tabs: Tab[]
}

export function CustomTabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  function handleTabClick(index: number) {
    setActiveTab(index)
  }

  return (
    <div>
      <div className="flex mb-4 border-b border-b-[#ccc]/15">
        <Carousel className="w-full flex items-center justify-center">
          <CarouselContent className="ml-8 lg:w-[1050px]">
            {tabs.map((tab, index) => (
              <CarouselItem
                key={index}
                onClick={() => handleTabClick(index)}
                className={`border  px-4 py-2 mr-4 gap-2 hover:cursor-pointer pl-1 basis1/2 md:basis-1/6 lg:basis-1/6 ${
                  activeTab === index
                    ? "text-blue-500 border-b border-b-blue-500"
                    : "text-white"
                }`}
              >
                {tab.text}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <motion.div
        className="flex mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <Image
          width={1500}
          height={600}
          // src={tabs[activeTab].imageUrl}
          src="/example.png"
          alt={tabs[activeTab].text}
          className="object-cover w-full"
        />
      </motion.div>
    </div>
  )
}
