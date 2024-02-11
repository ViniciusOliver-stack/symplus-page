"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      <div className="mb-4 border-b border-b-[#ccc]/15 md:w-full">
        <Carousel
          className="md:hidden "
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="pr-2 flex items-center gap-4 w-[150px] text-center">
            {tabs.map((tab, index) => (
              <CarouselItem
                key={index}
                onClick={() => handleTabClick(index)}
                className={`pr-4 ${
                  activeTab === index
                    ? "text-blue-500 border-b border-b-blue-500 "
                    : "text-white"
                }`}
              >
                <p>{tab.text}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="hidden md:flex md:gap-12 md:items-center md:justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`px-1 pb-2 gap-2 hover:cursor-pointer ${
                activeTab === index
                  ? "text-blue-500 border-b border-b-blue-500"
                  : "text-white"
              }`}
            >
              <p>{tab.text}</p>
            </button>
          ))}
        </div>
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
          height={300}
          src={tabs[activeTab].imageUrl}
          alt={tabs[activeTab].text}
          className="object-cover w-full max-h-[700px] rounded-3xl"
        />
      </motion.div>
    </div>
  )
}
