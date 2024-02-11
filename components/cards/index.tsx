import Image from "next/image"
export function Cards() {
  return (
    <div className="flex justify-center w-full">
      <div className=" grid grid-cols-2 gap-x-10">
        <div className="flex bg-white my-5 rounded-xl items-center h-60 w-[750px]">
          <div className=" flex flex-col space-y-2 p-10">
            <h2 className="text-neutral-900 font-bold text-xl">
              Entrega rápida
            </h2>
            <p className="text-neutral-900 w-[400px] text-base">
              Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem
              sed aliquet quam erat ut odio. Pellentesque habitant morbi
            </p>
          </div>
          <div className="">
            <Image
              src="/img-entrega.svg"
              alt=""
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>

        <div className="flex bg-white my-5 rounded-xl items-center h-60 w-[750px]">
          <div className=" flex  flex-col space-y-2 p-10">
            <h2 className="text-neutral-900 font-bold text-xl">
              Suporte ao cliente
            </h2>
            <p className="text-neutral-900 w-[400px] text-base">
              Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem
              sed aliquet quam erat ut odio. Pellentesque habitant morbi
            </p>
          </div>
          <div className="">
            <Image
              src="/img-entrega.svg"
              alt=""
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>

        <div className="flex bg-white my-5 rounded-xl items-center h-60 w-[750px]">
          <div className=" flex  flex-col space-y-2 p-10">
            <h2 className="text-neutral-900 font-bold text-xl">
              Garantia de serviço
            </h2>
            <p className="text-neutral-900 w-[400px] text-base">
              Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem
              sed aliquet quam erat ut odio. Pellentesque habitant morbi
            </p>
          </div>
          <div className="">
            <Image
              src="/img-entrega.svg"
              alt=""
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>

        <div className="flex bg-white my-5 rounded-xl items-center h-60 w-[750px]">
          <div className=" flex  flex-col space-y-2 p-10">
            <h2 className="text-neutral-900 font-bold text-xl">
              Preço acessível
            </h2>
            <p className="text-neutral-900 w-[400px] text-base">
              Vivamus lobortis, urna non ultricies placerat, ex quam luctus sem
              sed aliquet quam erat ut odio. Pellentesque habitant morbi
            </p>
          </div>
          <div className="">
            <Image
              src="/img-entrega.svg"
              alt=""
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
