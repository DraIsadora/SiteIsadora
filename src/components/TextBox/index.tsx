import { GiCheckMark } from 'react-icons/gi'

interface TextCardProps {
  children: string
}

export default function TextBox({ children }: TextCardProps) {
  return (
    <div className="flex items-start justify-center gap-2">
      <span className="flex h-4 w-4 items-start">
        <GiCheckMark />
      </span>
      <span className="text-lg font-light leading-none">{children}</span>
    </div>
  )
}
