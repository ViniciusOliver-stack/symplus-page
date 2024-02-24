type titleInformationProps = {
  title: string
  description: string
}

export function TitleInformation({
  title,
  description,
}: titleInformationProps) {
  return (
    <div className="w-[85%] m-auto md:w-full flex flex-col items-center justify-center text-center md:text-left gap-4 mb-8">
      <h3 className="text-3xl font-semibold md:text-[40px]">{title}</h3>
      <p className="text-neutral-500">{description}</p>
    </div>
  )
}
