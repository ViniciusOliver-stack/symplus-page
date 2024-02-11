import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  function handleScroll() {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    controls.start(isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 })
  }, [isVisible, controls])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.button
      className='fixed bottom-10 right-10 w-12 h-12 px-4 shadow-md z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-[1px] 
      border-neutral-700 py-1.5 font-medium bg-[#3370FF] md:bg-transparent
     text-neutral-300 transition-all duration-300
      before:absolute before:inset-0
      before:-z-10 before:translate-y-[200%]
      before:scale-[2.5]
      before:rounded-[100%] before:bg-white md:before:bg-neutral-50
      before:transition-transform before:duration-1000
      before:content-[""]
      hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
      hover:before:translate-y-[0%]
      active:scale-100'
      onClick={scrollToTop}
      animate={controls}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  )
}
