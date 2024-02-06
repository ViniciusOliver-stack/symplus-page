"use client"

import { Cards } from "@/components/cards"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { TabsProducts } from "@/components/tabsProducts"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header />
      <Cards />
    </div>
  )
}
