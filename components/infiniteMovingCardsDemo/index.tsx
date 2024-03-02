"use client"

import React, { useEffect, useState } from "react"
import { InfiniteMovingCards } from "../InfiniteSlider"
import { TitleInformation } from "../titleInformation"

export function InfiniteMovingCardsDemo() {
  return (
    <div>
      <div className="text-center scroll-section" id="aboutus">
        <TitleInformation
          title="Depoimento dos clientes"
          description="Veja o que os clientes falam sobre nós."
        />
      </div>

      <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Vinicius",
    title: "CEO | Symplus",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Tarcísio",
    title: "CEO | Symplus",
  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Thiago",
    title: "CEO | Symplus",
  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Caio",
    title: "CEO | Symplus",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Luender",
    title: "CEO | Symplus",
  },
]
