'use client'
import { useEffect, useRef } from 'react'

interface EyeFollowProps {
    size?: number // размер SVG
    pupilRadius?: number // радиус движения зрачка
}

export const EyeFollow= ({ size, pupilRadius = 4 }: EyeFollowProps) => {

    const pupilRef = useRef<SVGCircleElement>(null)
    const eyeRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        let rafId: number

        const handleMouseMove = (e: MouseEvent) => {
            if (!pupilRef.current || !eyeRef.current) return

            const rect = eyeRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            let dx = e.clientX - centerX
            let dy = e.clientY - centerY

            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance > pupilRadius) {
                const angle = Math.atan2(dy, dx)
                dx = Math.cos(angle) * pupilRadius
                dy = Math.sin(angle) * pupilRadius
            }

            // плавное следование с requestAnimationFrame
            const pupil = pupilRef.current
            const currentTransform = pupil.getAttribute('transform')
            const match = currentTransform?.match(/translate\(([-\d.]+), ([-\d.]+)\)/)
            const prevX = match ? parseFloat(match[1]) : 0
            const prevY = match ? parseFloat(match[2]) : 0

            const lerp = (start: number, end: number, t: number) => start + (end - start) * t
            const newX = lerp(prevX, dx, 0.15) // slow effect
            const newY = lerp(prevY, dy, 0.15) // slow effect

            pupil.setAttribute('transform', `translate(${newX}, ${newY})`)
            rafId = requestAnimationFrame(() => handleMouseMove(e))
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(rafId)
        }
    }, [pupilRadius])

    return (
        <svg
            ref={eyeRef}
            width={size}
            height={size}
            viewBox="0 2 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
            <circle ref={pupilRef} cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
    )
}
