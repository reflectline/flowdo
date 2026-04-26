import { cn } from '@/shared/lib/utils'
import s from '@/shared/ui/button/Button.module.scss'
import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &{
  size?: 'sm' | 'md'
  variant?: 'none' | 'primary' | 'secondary' | 'solid'
  borderStyle?: 'none' | 'solid' | 'dashed'
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    size = 'md',
    variant = 'none',
    borderStyle = 'none',
    ...rest
  } = props

  return <button
    className={cn(
      s.button,
      s[size],
      s[variant],
      s[borderStyle],
      className)} {...rest}
  />
}
