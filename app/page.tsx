"use client"

import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { TabsProducts } from "@/components/tabsProducts"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header />
    </div>
  )
}
