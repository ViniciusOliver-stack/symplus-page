"use client";

import { BackToTopButton } from "@/components/backToTopButton";
import { Cards } from "@/components/cards";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Newsletter } from "@/components/newsletter";
import { TabsProducts } from "@/components/tabsProducts";
import { Formulary } from "@/components/formulary";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col gap-[120px]">
      <Header />
      <TabsProducts />
      <BackToTopButton />
      <Cards />
      <Newsletter />
      <Formulary />
    </div>
  );
}
