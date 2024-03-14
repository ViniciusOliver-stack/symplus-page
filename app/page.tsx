"use client"

import { BackToTopButton } from "@/components/backToTopButton"
import { Cards } from "@/components/cards"
import { Header } from "@/components/header"
import { Newsletter } from "@/components/newsletter"
import { TabsProducts } from "@/components/tabsProducts"
import { Formulary } from "@/components/formulary"
import { InfiniteMovingCardsDemo } from "@/components/infiniteMovingCardsDemo"
import { TextGenerateEffect } from "@/components/loader"
import { useEffect, useState } from "react"

export default function Home() {
  const words = `Potencialize sua Criatividade, Conquiste Clientes e Alcance Novos Patamares de Sucesso. Juntos, Podemos Mais!
`
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="overflow-x-hidden flex flex-col gap-[120px]">
      {loading ? (
        <TextGenerateEffect words={words} />
      ) : (
        <div>
          <Header />
          <TabsProducts />
          <BackToTopButton />
          <Cards />
          <InfiniteMovingCardsDemo />
          <Newsletter />
          <Formulary />
        </div>
      )}
    </div>
  )
}
