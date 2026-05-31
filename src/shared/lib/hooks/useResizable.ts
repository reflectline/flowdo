import { useEffect, useRef, useState } from 'react'
import { type MouseEvent as ReactMouseEvent } from 'react'

const STORAGE_KEY = 'resizable-width'

export const useResizable = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState<number | null>(() => {
    if (typeof window === 'undefined') return null
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? Number(saved) : null
  })

  const startXRef = useRef(0)
  const startWidthRef = useRef(0)
  const minWidthRef = useRef(0)

  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    const element = containerRef.current
    if (!element) return

    const rect = element.getBoundingClientRect()

    startXRef.current = e.clientX
    startWidthRef.current = rect.width
    minWidthRef.current = parseFloat(getComputedStyle(element).minWidth)
    setWidth(rect.width)
    document.body.style.userSelect = 'none'
    document.body.style.cursor = 'ew-resize'

    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - startXRef.current
      setWidth(Math.max(minWidthRef.current, startWidthRef.current + delta))
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)

      document.body.style.userSelect = ''
      document.body.style.cursor = ''
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  useEffect(() => {
    if (width === null) return

    localStorage.setItem(STORAGE_KEY, String(width))
  }, [width])

  return {
    containerRef,
    containerStyle: width === null ? undefined : { width: `${width}px` },
    resizeHandleProps: { onMouseDown: handleMouseDown },
  }
}
