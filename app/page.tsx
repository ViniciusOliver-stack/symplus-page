"use client"

import { BackToTopButton } from "@/components/backToTopButton"
import { Cards } from "@/components/cards"
import { Header } from "@/components/header"
import { InfiniteMovingCardsDemo } from "@/components/infiniteMovingCardsDemo"

import { Newsletter } from "@/components/newsletter"
import { TabsProducts } from "@/components/tabsProducts"

export default function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col gap-[120px]">
      <Header />
      <TabsProducts />
      <BackToTopButton />
      <Cards />
      <InfiniteMovingCardsDemo />
      {/* <Newsletter /> */}
    </div>
  )
}
