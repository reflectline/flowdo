import { cn } from '@/shared/lib/utils'
import s from '@/shared/ui/Input/Input.module.scss'
import type { InputHTMLAttributes } from 'react'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: 'sm' | 'md'
  textSize?: 'sm' | 'md'
  border?: boolean
  autoFocus?: boolean
}

export const Input = (props: InputProps) => {
  const {size = 'md', textSize = 'md', border = true, className, ...rest} = props
  return (
    <input
      id="title"
      name="title"
      type="text"
      className={cn(s.input, s[size], s[`text${textSize}`], !border && s.noBorder, className)}
      {...rest}
    />
  )
}

Input.displayName = 'Input'


