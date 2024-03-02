import ScrollEffect from "../scrollProducts"
import { TitleInformation } from "../titleInformation"

export function TabsProducts() {
  const content = [
    {
      title: "Título 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id voluptatum cum illum quod asperiores, quaerat porro vel eaque, inventore accusamus veritatis? Magni exercitationem aspernatur quas quam. Sunt, obcaecati? Nisi!",
    },
    {
      title: "Título 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id voluptatum cum illum quod asperiores, quaerat porro vel eaque, inventore accusamus veritatis? Magni exercitationem aspernatur quas quam. Sunt, obcaecati? Nisi!",
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
