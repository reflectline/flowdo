import {type ReactNode, useEffect, useLayoutEffect, useRef, useState,} from 'react'
import { createPortal } from 'react-dom'
import s from '@/shared/ui/popover/Popover.module.scss'

type PopoverType = {
  disabled?: boolean
  align?: 'left' | 'right'
  trigger: ReactNode
  children: ReactNode | ((close: () => void) => ReactNode)
}

export const Popover = (props: PopoverType) => {
  const {trigger, children, align = 'right', disabled = false,} = props
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({top: 0, left: 0,})
  const content = typeof children === 'function' ? children(() => setOpen(false)) : children

  useLayoutEffect(() => {
    if (!open || !triggerRef.current || !contentRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const contentWidth = contentRef.current?.offsetWidth ?? 0
    const contentHeight = contentRef.current.offsetHeight + 4
    const shouldOpenTop = rect.bottom + contentHeight > window.innerHeight

    const top = shouldOpenTop ? rect.top - contentHeight : rect.bottom
    const left = align === 'right' ? rect.left : rect.right - contentWidth

    setCoords({
      top,
      left,
    })
  }, [open, align])

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (!triggerRef.current?.contains(target) && !contentRef.current?.contains(target)) {
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

  useEffect(() => {
    if (!open) return
    const closeOnScroll  = () => {
      setOpen(false)
    }

    window.addEventListener('scroll', closeOnScroll, true)
    return () => {
      window.removeEventListener('scroll', closeOnScroll, true)
    }
  }, [open]);

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])



  return (
    <>
      <div
        ref={triggerRef}
        className={s.trigger}
        onClick={handleToggle}
      >
        {trigger}
      </div>

      {open &&
        createPortal(
          <div
            ref={contentRef}
            className={s.content}
            style={{top: coords.top, left: coords.left}}
          >
            {content}
          </div>,
          document.body,
        )}
    </>
  )
}