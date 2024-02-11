import { SwipeCarousel } from "../swipeCarousel"

export function TabsProducts() {
  const tabs = [
    {
      text: "Chatbot",
      imageUrl: "/example.png",
      icon: "/chatbot.svg",
      iconActive: "/chatbotActive.svg",
    },
    {
      text: "Landing Page",
      imageUrl: "/Landingpage.webp",
      icon: "/landingPage.svg",
      iconActive: "/landingPageActive.svg",
    },
    {
      text: "CRM",
      imageUrl: "/crm.jpg",
      icon: "/crm.svg",
      iconActive: "/crmActive.svg",
    },
    {
      text: "Softwares",
      imageUrl: "/software.webp",
      icon: "/software.svg",
      iconActive: "/softwareActive.svg",
    },
    {
      text: "Trafego Pago",
      imageUrl: "/trafegopago.png",
      icon: "/trafegoPago.svg",
      iconActive: "/trafegoPagoActive.svg",
    },
    {
      text: "Dashboard",
      imageUrl: "/dashboard.png",
      icon: "/dashboard.svg",
      iconActive: "/dashboardActive.svg",
    },
  ]

  return (
    <div className="w-[85%] m-auto mt-6 md:mt-32">
      <div className="w-[85%] m-auto text-center flex flex-col gap-4">
        <h2 className="text-4xl md:text-[40px]">Veja nossos produtos</h2>
        <p>Veja os produtos que atendem a sua necessidade.</p>
      </div>

      <div>
        <SwipeCarousel tabsValue={tabs} />
      </div>
    </div>
  )
}
