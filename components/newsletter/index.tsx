import Image from "next/image";

export function Newsletter() {
  return (
    <div className="flex justify-around px-64">
      <div className="pt-24">
        <h1 className="text-4xl font-bold">Assine nossa NewsLetter</h1>
        <Image
          className=" ml-56"
          src="/Underline-newsletter.svg"
          alt=""
          width={300}
          height={30}
        />
        <p className="text-base w-1/2 pt-28">
          Não perca as últimas novidades em tecnologia e notícias exclusivas da
          nossa empresa! Assine nossa newsletter agora e mantenha-se à frente do
          jogo. Seja o primeiro a receber insights, atualizações e ofertas
          especiais diretamente na sua caixa de entrada. Junte-se à nossa
          comunidade de entusiastas de tecnologia hoje mesmo!
        </p>
      </div>
      <div className="place-content-end">
        <input
          className="h-20 w-[36rem] text-black text-xl font-medium p-1 pl-6 rounded-xl bg-white mt-60 placeholder-blue-600 placeholder-opacity-85 placeholder:text-xl placeholder:font-medium outline-none"
          type="email"
          placeholder="Seu e-mail aqui"
        />
        <button className=" bg-slate-400 px-12 py-3 mt-6 ml-[21rem] opacity-90 rounded-xl font-medium text-white text-lg">
          ASSINE AGORA!
        </button>
      </div>
      <Image
        src="/background-newsletter.svg"
        alt=""
        width={1620}
        height={450}
        className="-z-50 absolute"
      />
    </div>
  );
}
