import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import { Toaster, toast } from "react-hot-toast" // Adicione esta linha

const mockInput = [
  { id: "1", title: "Sites/Landing Pages" },
  { id: "2", title: "Dashboard/CRM" },
  { id: "3", title: "Tráfego Pago" },
  { id: "4", title: "Chat Bot" },
  { id: "5", title: "Desenvolvimento de Softwares" },
  { id: "6", title: "Outros." },
]

const createFormSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório."),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório.")
    .email("O formato do email é inválido."),
  numberPhone: z.string().min(1, "O telefone é obrigatório."),
  message: z.string().min(1, "A mensagem é obrigatória."),
})

type CreateUseFormDate = z.infer<typeof createFormSchema>

type FormData = CreateUseFormDate & { services: string[] }

export function Formulario() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateUseFormDate>({
    resolver: zodResolver(createFormSchema),
  })

  const [output, setOutput] = useState("")
  const [services, setServices] = useState<string[]>([])

  async function sendContactForm(data: FormData) {
    const webhookUrl =
      "https://discord.com/api/webhooks/1213462167702212659/5IaCvRMIeUKQsruolXBWCaYU9MRp3N1uqHX_pYjDZKRhy4Nc0qAz5zV0egazWKdYnQaQ"

    try {
      await axios.post(webhookUrl, {
        content: `
        **Nova mensagem recebida:**
        **Nome:** ${data.name}
        **Email:** ${data.email}
        **Telefone:** ${data.numberPhone}
        **Mensagem:** ${data.message}
        **Serviços:** ${data.services.join(", ")}`,
      })
      toast.success("Mensagem enviada com sucesso!")

      setServices([])
      reset()
    } catch (error) {
      console.log("Erro ao enviar a mensagem")
      toast.error("Erro ao enviar a mensagem")
    }
  }

  const [isChecked, setIsChecked] = useState(false)

  const toggleCheckbox = (service: string) => {
    if (services.includes(service)) {
      setServices(services.filter((s) => s !== service))
    } else {
      setServices([...services, service])
    }
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        sendContactForm({ ...data, services })
      })}
      className="flex flex-col gap-4"
    >
      <Toaster position="bottom-center" reverseOrder={false} />

      <div>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Nome"
          className="w-full h-[42px] px-3 items-center rounded-xl border border-neutral-800 focus-within:border-neutral-200 bg-neutral-900 transition-all duration-200 outline-none text-sm text-neutral-300"
        />
        <p className="text-neutral-500">{errors.name?.message}</p>
      </div>

      <div>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="E-mail"
          className="w-full h-[42px] px-3 items-center rounded-xl border border-neutral-800 focus-within:border-neutral-200 bg-neutral-900 transition-all duration-200 outline-none text-sm text-neutral-300"
        />
        <p className="text-neutral-500">{errors.email?.message}</p>
      </div>

      <div>
        <input
          type="text"
          id="numberPhone"
          {...register("numberPhone")}
          placeholder="+55 (00) 00000-0000"
          className="w-full h-[42px] px-3 items-center rounded-xl border border-neutral-800 focus-within:border-neutral-200 bg-neutral-900 transition-all duration-200 outline-none text-sm text-neutral-300"
        />
        <p className="text-neutral-500">{errors.numberPhone?.message}</p>
      </div>

      <div>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Conte-nos um pouco sobre seu projeto..."
          className="w-full h-[200px] px-3 py-2 items-center rounded-xl border border-neutral-800 focus-within:border-neutral-200 bg-neutral-900 transition-all duration-200 outline-none text-sm text-neutral-300 resize-none"
        />
        <p className="text-neutral-500">{errors.message?.message}</p>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-medium">Serviços</h3>

        <div className="grid grid-cols-2 gap-4">
          {mockInput.map((value) => (
            <div className="inline-flex items-center" key={value.id}>
              <label className="relative flex items-center p-3 rounded-full cursor-pointer">
                <input
                  type="checkbox"
                  value={value.title}
                  onChange={() => toggleCheckbox(value.title)}
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-700 checked:bg-blue-700 checked:before:bg-blue-700 hover:before:opacity-10"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label className="mt-px font-light text-white cursor-pointer select-none">
                {value.title}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={!isValid}
          className={`${
            isValid ? "bg-blue-700" : "bg-neutral-800"
          } font-semibold text-white rounded p-2 w-48  disabled:text-white/50 disabled:hover:cursor-not-allowed`}
        >
          Vamos começar!
        </button>
      </div>
    </form>
  )
}
