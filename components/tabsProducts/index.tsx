import ScrollEffect from "../scrollProducts";

export function TabsProducts() {

  const content = [
    {
      title: "Título 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id voluptatum cum illum quod asperiores, quaerat porro vel eaque, inventore accusamus veritatis? Magni exercitationem aspernatur quas quam. Sunt, obcaecati? Nisi!",

    },
    {
      title: "Título 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id voluptatum cum illum quod asperiores, quaerat porro vel eaque, inventore accusamus veritatis? Magni exercitationem aspernatur quas quam. Sunt, obcaecati? Nisi!",
    },
    // Adicione mais itens conforme necessário
  ];



  return (
    <div className="w-[85%] m-auto mt-6 md:mt-32">
      <div className="w-[85%] m-auto text-center flex flex-col gap-4">
        <h2 className="text-4xl md:text-[40px]">Veja nossos produtos</h2>
        <p>Veja os produtos que atendem a sua necessidade.</p>
      </div>

      <div>
        <ScrollEffect />
      </div>
    </div>
  )
}
