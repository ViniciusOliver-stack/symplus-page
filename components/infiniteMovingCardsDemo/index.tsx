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
      "Antes da Symplus, meu Instagram estava estagnado. Com seu serviço de emulsionamento e produção de posts, vi um aumento significativo de seguidores e engajamento. Agora, recebo elogios pela qualidade do conteúdo e vejo mais clientes e rentabilidade. A equipe entendeu minha visão e entregou resultados excepcionais. Recomendo a Symplus para quem quer impulsionar sua presença no Instagram.",
    name: "Lucas",
    title: "CEO | Barbearia Saluc",
  },
  {
    quote:
      "A aplicação web da Big Lanches mudou completamente a forma como os clientes pedem seus lanches favoritos. Agora, podem visualizar o cardápio facilmente, fazer seu pedido pedido em poucos cliques e esperar meu lanche chegar fresquinho. É rápido, conveniente e tornou a experiência de pedir comida ainda melhor. Recomendo totalmente!",
    name: "Lara",
    title: "CEO | Big Lanches",
  },
  {
    quote:
      "Com o tráfego pago e geração de leads da Symplus, vimos um aumento significativo em clientes potenciais. Eles não só direcionaram tráfego qualificado para nosso site, mas também nos forneceram leads valiosos que impulsionaram nossas vendas. Recomendo fortemente seus serviços.",
    name: "João Silva",
    title: "Diretor de Marketing | TechSoluções",
  },
  {
    quote:
      "A landing page criada pela Symplus foi fundamental para nossa empresa. Aumentamos nossa taxa de conversão e melhoramos a experiência do usuário, destacando nossos serviços de forma clara e atrativa. Obrigado, Symplus, por nos ajudar a alcançar nossos objetivos!",
    name: "Ana Oliveira,",
    title: "CEO | DigitalInovação",
  },
  {
    quote:
      "A aplicação da Symplus resolveu todos os nossos problemas de gerenciamento de comércio. Desde controle de estoque até gestão de vendas, tudo se tornou mais simples e eficiente. É como ter um assistente virtual que cuida de todos os aspectos do nosso negócio. Estamos muito satisfeitos e gratos à equipe da Symplus pelo excelente trabalho!",
    name: "Pedro Santos",
    title: "Gerente de Operações | VendaFácil",
  },
]
