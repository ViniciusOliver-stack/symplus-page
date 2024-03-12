import ScrollEffect from "../scrollProducts"
import { TitleInformation } from "../titleInformation"

export function TabsProducts() {
  const content = [
    {
      title: "Página Web",
      description:
        "Nossas landing pages e sites são projetadas para converter visitantes em clientes. Com designs atraentes e conteúdos autênticos, criamos páginas otimizadas que capturam a atenção do seu público-alvo e os guiam diretamente para a ação desejada. Desde o primeiro clique até a conversão, garantimos uma experiência envolvente e eficaz, aumentando assim as chances de sucesso para o seu negócio online.",
    },
    {
      title: "Tráfego Pago",
      description:
        "Maximize o alcance e a relevância do seu negócio online com nosso serviço de gestão de tráfego. Utilizamos estratégias avançadas de publicidade digital para direcionar um fluxo qualificado de visitantes para o seu site, aumentando assim sua visibilidade e conversões. Desde campanhas segmentadas até otimização contínua, garantimos o melhor retorno sobre o investimento em cada clique.",
    },
    {
      title: "Tráfego Pago",
      description:
        "Maximize o alcance e a relevância do seu negócio online com nosso serviço de gestão de tráfego. Utilizamos estratégias avançadas de publicidade digital para direcionar um fluxo qualificado de visitantes para o seu site, aumentando assim sua visibilidade e conversões. Desde campanhas segmentadas até otimização contínua, garantimos o melhor retorno sobre o investimento em cada clique.",
    },
    // Adicione mais itens conforme necessário
  ]

  return (
    <div className="w-[85%] m-auto scroll-section" id="products">
      <TitleInformation
        title="Veja nosso produtos"
        description="Conheça alguns de nossos produto que facilitam e atendem a sua necessidade e da sua empresa."
      />

      <div>
        <ScrollEffect />
      </div>
    </div>
  )
}
