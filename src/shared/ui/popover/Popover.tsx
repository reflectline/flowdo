import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

import s from '@/shared/ui/popover/Popover.module.scss'

type Props = {
  trigger: ReactNode
  children: ReactNode
}

export const Popover = ({ trigger, children }: Props) => {
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

  return (
    <div className={s.popover} ref={ref}>
      <div onClick={() => setOpen(prev => !prev)}>
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