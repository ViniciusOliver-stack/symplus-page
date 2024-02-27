import Image from "next/image";

const mockInput = [
  { id: "1", title: "Sites/Landing Pages" },
  { id: "2", title: "Dashboard/CRM" },
  { id: "3", title: "Tráfego Pago" },
  { id: "4", title: "Chat Bot" },
  { id: "5", title: "Desenvolvimento de Softwares" },
  { id: "6", title: "Outros." },
];

export function Formulary() {
  return (
    <div className="flex justify-between mx-56 mt-80">
      <div className="overflow-x-visible flex justify-start flex-col gap-4">
        <h1 className="text-5xl">
          Vamos levar sua marca <br /> ao próximo{" "}
          <span className="text-blue-700">nivel</span>.
        </h1>
        <Image
          className="-z-50 absolute -left-44 mt-24"
          src="/Rectangle 45.svg"
          alt=""
          width={600}
          height={500}
        />
        <p className="text-xl mt-16">
          Você pode entrar em contato conosco a qualquer momento <br /> via
          contato@symplus.net
        </p>
        <Image
          className=""
          src="/Revenue-bro 1.svg"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col justify-items-end gap-4">
        <div>
          <input
            type="text"
            placeholder="Seu nome"
            className=" text-black font-medium h-10 w-[32rem] rounded-lg outline-none pl-5 placeholder-zinc-600 bg-white"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email@hotmail.com"
            className=" text-black font-medium h-10 w-[32rem] rounded-lg outline-none pl-5 placeholder-zinc-600 bg-white"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="+55 (00) 00000-0000"
            className=" text-black font-medium h-10 w-[32rem] rounded-lg outline-none pl-5 placeholder-zinc-600 bg-white"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Conte-nos um pouco sobre o projeto..."
            className="text-black font-medium h-40 w-[32rem] rounded-lg outline-none pl-5 placeholder-zinc-600 bg-white"
          />
        </div>
        <h1 className="text-xl font-medium">Serviços</h1>
        <div className="grid grid-cols-2 gap-4">
          {mockInput.map((value) => [
            <div className="flex items-center h-5">
              <div key={value.id}>
                <input
                  id={value.id}
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="ms-2 text-sm">
                <label
                  htmlFor={value.id}
                  className=" text-base font-medium text-white dark:text-gray-300"
                >
                  {value.title}
                </label>
              </div>
            </div>,
          ])}
        </div>
        <button className=" mt-4 text-lg font-medium bg-blue-700 w-56 h-12 rounded-lg">
          Vamos começar!
        </button>
      </div>
    </div>
  );
}
