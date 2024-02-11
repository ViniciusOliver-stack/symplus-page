"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi"

const products = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => setMenuVisible(!isMenuVisible)

  return (
    <div className="flex items-center justify-between px-8 py-4">
      <div className="w-full flex justify-around">
        <h1 className="text-2xl font-semibold">Logo</h1>

        <div className="hidden md:flex">
          <NavigationMenu className="">
            <NavigationMenuList className="flex items-center m-0 p-0 gap-6">
              <NavigationMenuItem>
                <Link href="/" className="text-sm font-normal p-2">
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-normal m-0 p-2 gap-0 bg-neutral-900">
                  Produtos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {products.map((product) => {
                      return (
                        <Link
                          key={product.title}
                          href={product.href}
                          className="flex flex-col gap-2 hover:bg-neutral-300 p-2 rounded-md"
                        >
                          <h1 className="font-semibold">{product.title}</h1>
                          <p className="line-clamp-2 text-xs">
                            {product.description}
                          </p>
                        </Link>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-normal m-0 p-2 gap-0 bg-neutral-900">
                  Serviços
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {products.map((product) => {
                      return (
                        <Link
                          key={product.title}
                          href={product.href}
                          className="flex flex-col gap-2 hover:bg-slate-300 p-2 rounded-md"
                        >
                          <h1 className="font-semibold">{product.title}</h1>
                          <p className="line-clamp-2 text-xs">
                            {product.description}
                          </p>
                        </Link>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/" className="text-sm font-normal p-2">
                  Sobre nós
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/" className="text-sm font-normal p-2">
                  Contato
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Link
          href="/contact"
          className='relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-300 transition-all duration-300
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100'
        >
          Fale Conosco
        </Link>
      </div>

      <div className="flex items-center gap-6 md:hidden">
        <button
          className="md:show bg-transparent border-none text-2xl"
          onClick={toggleMenu}
        >
          <HiMenuAlt3 />
        </button>

        <AnimatePresence>
          {isMenuVisible && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                delay: 0.5,
              }}
              className="fixed top-0 left-0 w-full h-full bg-neutral-900 z-50"
            >
              <button
                className="absolute z-50 top-6 right-6 text-white text-2xl"
                onClick={toggleMenu}
              >
                <HiOutlineX />
              </button>
              <NavigationMenu>
                <NavigationMenuList className="fixed top-0 flex flex-col items-center justify-center w-full h-[100%] gap-8">
                  <NavigationMenuItem>
                    <Link href="/" className="text-2xl font-normal">
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-2xl font-normal m-0 p-0 gap-0 bg-neutral-900">
                      Produtos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {products.map((product) => {
                          return (
                            <Link
                              key={product.title}
                              href={product.href}
                              className="flex flex-col gap-2 hover:bg-slate-300 p-2 rounded-md"
                            >
                              <h1 className="font-semibold">{product.title}</h1>
                              <p className="line-clamp-2 text-xs">
                                {product.description}
                              </p>
                            </Link>
                          )
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-2xl font-normal m-0 p-0 gap- bg-neutral-9000">
                      Serviços
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {products.map((product) => {
                          return (
                            <Link
                              key={product.title}
                              href={product.href}
                              className="flex flex-col gap-2 hover:bg-slate-300 p-2 rounded-md"
                            >
                              <h1 className="font-semibold">{product.title}</h1>
                              <p className="line-clamp-2 text-xs">
                                {product.description}
                              </p>
                            </Link>
                          )
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/" className="text-2xl font-normal">
                      Sobre nós
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/" className="text-2xl font-normal">
                      Contato
                    </Link>
                  </NavigationMenuItem>

                  <div className="absolute bottom-8">
                    <ul className="flex items-center gap-3">
                      <li>Instagram</li>
                      <li>Linkedin</li>
                      <li>Youtube</li>
                    </ul>
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
