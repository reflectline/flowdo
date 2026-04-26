import { cn } from '@/shared/lib/utils'
import s from '@/shared/ui/Input/Input.module.scss'
import * as React from 'react'

// type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
//   size?: 'sm' | 'md' | 'lg'
// }

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: 'sm' | 'md'
}

export const Input = (props: InputProps) => {
  const { size = 'md', className, ...rest } = props

  return <input className={cn(s.input, s[size], className)} {...rest} />
}


