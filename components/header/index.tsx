import Link from "next/link"
import Image from "next/image"
import { TabsProducts } from "../tabsProducts"

export function Header() {
  return (
    <div className="absolute w-full select-none mt-12">
      <div className="h-[80vh]">
        <div className="relative left-0 top-0">
          <Image
            src="/bubble.svg"
            alt=""
            width={300}
            height={705}
            className="w-[150px] md:w-[300px]"
          />
        </div>

        <div className="relative bottom-[350px] md:bottom-[550px] w-[85%] m-auto pt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col gap-6 text-center md:text-left">
                <h1 className="max-w-[500px] text-4xl 2xl:max-w-[700px] 2xl:text-5xl">
                  Lorem ipsum spreadsheets{" "}
                  <span className="text-blue-600">dolor sit ame consectet</span>{" "}
                  adipiscing elit customer
                </h1>

                <p className="max-w-[500px] 2xl:max-w-[700px] text-lg">
                  Otimize seus processos de trabalho para fazer mais juntos e
                  mais rápido, e fique à frente da concorrência.
                </p>

                <div>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#3370FF] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-150"
                  >
                    Entre em contato
                  </Link>
                </div>
              </div>

              <div className="hidden md:block">
                <Image src="/Buildtest.png" alt="" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TabsProducts />
    </div>
  )
}
