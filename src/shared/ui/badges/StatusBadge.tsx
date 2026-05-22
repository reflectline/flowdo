import { cn } from '@/shared/lib/utils'
import s from '@/shared/ui/badges/Badges.module.scss'
import type { ReactNode } from 'react'

type StatusBadgeProps = {
  children?: ReactNode
  variant?: 'process' | 'done'
  onClick?: () => void
}

export const StatusBadge = (props: StatusBadgeProps) => {
  const { children, variant = 'process', onClick } = props


  return (
    <button type="button" onClick={onClick} className={cn(s.badge, s[variant])}>
      {children}
    </button>
  )
}
