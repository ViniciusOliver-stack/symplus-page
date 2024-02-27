import { motion } from "framer-motion"
import React, { useState, useEffect } from "react"

export function Header() {
  const [numSquares, setNumSquares] = useState<number>(0)
  const [squares, setSquares] = useState<number[]>([])

  useEffect(() => {
    const calculateSquares = () => {
      const numSquares = Math.floor(window.innerWidth / 75)
      const squares = Array.from({ length: numSquares }, (_, i) => i)
      setNumSquares(numSquares)
      setSquares(squares)
    }

    calculateSquares()

    const handleResize = () => {
      calculateSquares()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="bg-neutral-950/20">
      <div className="grid h-[80vh] md:h-[95vh] w-full grid-cols-[repeat(auto-fit,minmax(75px,1fr))] grid-rows-[repeat(auto-fit,minmax(75px,1fr))]">
        {squares.map((rowIndex) => (
          <React.Fragment key={rowIndex}>
            {squares.map((colIndex) => (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                className="h-full w-full border-[1px] border-neutral-900"
                style={{ background: "rgba(129, 140, 248, 0)" }}
                whileHover={{ backgroundColor: "#3370FF", opacity: 0.5 }}
                whileTap={{ backgroundColor: "#3370FF", opacity: 0.5 }}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
        <h1 className="text-center text-xl font-black uppercase text-white sm:text-8xl md:text-4xl">
          Inteligente, <span className="text-[#3370FF]">Simples</span>, Flexível
        </h1>
        <h1 className="text-center text-5xl font-black uppercase text-white sm:text-8xl md:text-9xl">
          Para pessoas ambiciosas
        </h1>
        <p className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-neutral-500 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          quisquam nemo excepturi officia necessitatibus veritatis enim ipsam!
          Laudantium, reiciendis officia!
        </p>

        <button className="pointer-events-auto bg-[#3370FF] px-4 py-2 text-base font-bold uppercase text-white  rounded-md  transition-all shadow-[-3px_-3px_0px_white] hover:shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px]">
          Fale conosco
        </button>
      </div>
    </div>
  )
}
