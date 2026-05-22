import {type ReactNode, useEffect, useRef, useState,} from 'react'
import s from '@/shared/ui/popover/Popover.module.scss'
import {cn} from '@/shared/lib/utils'

type PopoverType = {
  disabled?: boolean
  position?: 'relative'|'absolute'
  align?: 'right' | 'left'
  trigger: ReactNode
  children: ReactNode
}

export const Popover = (props: PopoverType) => {
  const{ trigger, position='relative', align = 'right',  children, disabled = false } = props
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleToggle = () => {
    if (disabled) return
    setOpen(prev => !prev)
  }

  return (
    <div ref={ref} className={cn(s.popover, s[position],  s[align])}>
      <div onClick={handleToggle}>
        {trigger}
      </div>

      {open && (
        <div className={s.content}>
          {children}
        </div>
      )}
    </div>
  )
}