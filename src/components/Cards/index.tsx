interface CardsProps {
  children: string
}

export default function Cards({ children }: CardsProps) {
  return (
    <div className="flex h-[185px] flex-col items-center justify-center overflow-hidden rounded-[40px] bg-bege-100 text-orange-1000 shadow-xl md:w-[212px]">
      <div>
        {/* <hr className="border-2 border-orange-1000 rounded-full" /> */}
        <h3 className="px-8 py-4 text-center md:px-4">{children}</h3>
      </div>
    </div>
  )
}
