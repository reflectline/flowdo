import { cn } from '@/shared/lib/utils'
import s from '@/shared/ui/badges/Badges.module.scss'
import type { ReactNode } from 'react'

type PriorityBadgeType = {
  children?: ReactNode
  variant?: 'high' |  'medium' | 'low' | 'urgently' | 'later'
  onClick?: () => void
}

export const PriorityBadge = (props: PriorityBadgeType) => {
  const { children, variant = 'process', onClick } = props


  return (
    <button type="button" onClick={onClick} className={cn(s.badge, s[variant])}>
      {children}
    </button>
  )
}
