import { cn } from '@/shared/lib/utils'
import s from '@/shared/ui/button/Button.module.scss'
import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md'
  variant?: 'none' | 'primary' | 'secondary' | 'solid' | 'dashed' | 'addTask' | 'view' | 'sort'
  textSize?: 'sm' | 'md'

}

export const Button = (props: ButtonProps) => {
  const {
    className,
    size = 'md',
    variant = 'none',
    textSize = 'md',
    ...rest
  } = props

  return <button className={cn(s.button, s[size], s[`text${textSize}`], s[variant], className)} {...rest} />
}
