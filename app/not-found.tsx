"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  )
}

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("https://www.hover.dev/noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  )
}

const ExampleContent = () => {
  const frases404 = [
    { frase: "Ops, página não encontrada!" },
    { frase: "Parece que você se perdeu!" },
    { frase: "Essa página não existe." },
    { frase: "Voltar para o futuro não é possível aqui." },
    { frase: "Essa página foi apagada pelo Thanos." },
    { frase: "Você tropeçou em uma página não existente." },
    { frase: "A página que você está procurando desapareceu no buraco negro." },
    { frase: "Erro 404: Página não encontrada." },
    { frase: "Tente outra vez, essa página está de férias." },
    { frase: "Houston, temos um problema" },
  ]

  const [randomIndex, setRandomIndex] = useState(0)

  useEffect(() => {
    const index = Math.floor(Math.random() * frases404.length)
    setRandomIndex(index)
  }, []) // Executa apenas uma vez, quando o componente é montado

  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <p className="text-center text-6xl font-black text-neutral-50">
        {frases404[randomIndex].frase}
      </p>
      <p className="text-center text-neutral-400">
        Volte para a página inicial para continuar a navegar.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link
          href="/"
          className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}
