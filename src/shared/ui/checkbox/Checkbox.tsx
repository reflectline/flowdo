import type { InputHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'
import s from '@/shared/ui/checkbox/Checkbox.module.scss'
import {Check} from 'lucide-react'

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  variant?: 'filter' | 'view'
  size?: 'sm' | 'md'
}

export const Checkbox = (props: CheckboxProps) => {
  const { size = 'md', variant= 'filter', className, id, ...rest } = props

  const checkboxId = id ?? crypto.randomUUID()

  return (
    <span className={cn(s.root, s[variant], className)}>
      <input
        id={checkboxId}
        type="checkbox"
        className={s.input}
        {...rest}
      />

      <span className={cn(s.control, s[size])}>
        <Check className={s.icon} />
      </span>
    </span>
  )
}

Checkbox.displayName = 'Checkbox'