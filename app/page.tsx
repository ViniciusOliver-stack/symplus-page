"use client"

import { BackToTopButton } from "@/components/backToTopButton"
import { Cards } from "@/components/cards"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { Newsletter } from "@/components/newsletter"
import { TabsProducts } from "@/components/tabsProducts"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <TabsProducts />
      <BackToTopButton />
      <Cards />
      <Newsletter />
    </div>
  )
}
