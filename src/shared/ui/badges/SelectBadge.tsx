import { cn } from '@/shared/lib/utils'
import s from '@/shared/ui/badges/Badges.module.scss'
import type { ReactNode } from 'react'
import {ChevronDown} from 'lucide-react'

type PriorityBadgeType = {
  children?: ReactNode
  variant?: 'pageSize'
  onClick?: () => void
}

export const SelectBadge = (props: PriorityBadgeType) => {
  const { children, variant = 'process', onClick } = props


  return (
    <button type="button" onClick={onClick} className={cn(s.select, s[variant])}>
      {children}
      <ChevronDown className={s.selectBadgeArrow}/>
    </button>
  )
}
