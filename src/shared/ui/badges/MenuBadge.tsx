import { cn } from '@/shared/lib/utils'
import s from '@/shared/ui/badges/Badges.module.scss'
import type { ReactNode } from 'react'

type MenuBadgeType = {
  children?: ReactNode
  onClick?: () => void
}

export const MenuBadge = (props: MenuBadgeType) => {
  const { children, onClick } = props


  return (
    <button type="button" onClick={onClick} className={cn(s.menu,)}>
      {children}
    </button>
  )
}