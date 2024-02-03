import { CustomTabs } from "../customTabs"

export function TabsProducts() {
  const tabs = [
    {
      text: "Chatbot",
      imageUrl: "/chat-bot.svg",
      icon: "/chat-bot.svg",
    },
    {
      text: "Landing Page",
      imageUrl: "/path/to/image2.jpg",
      icon: "/browser.svg",
    },
    { text: "CRM", imageUrl: "/path/to/image2.jpg", icon: "/chat-bot.svg" },
    {
      text: "Softwares",
      imageUrl: "/path/to/image2.jpg",
      icon: "/chat-bot.svg",
    },
    {
      text: "Trafego Pago",
      imageUrl: "/path/to/image2.jpg",
      icon: "/chat-bot.svg",
    },
    {
      text: "Dashboard",
      imageUrl: "/path/to/image2.jpg",
      icon: "/chat-bot.svg",
    },
  ]

  return (
    <div className="w-[85%] m-auto mt-6 md:mt-32">
      <div className="w-[85%] m-auto text-center flex flex-col gap-4">
        <h2 className="text-4xl md:text-[40px]">Veja nossos produtos</h2>
        <p>Veja os produtos que atendem a sua necessidade.</p>
      </div>

      <div className="mt-8">
        <CustomTabs tabs={tabs} />
      </div>
    </div>
  )
}
