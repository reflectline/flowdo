"use client"

import { useCallback, useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

import { useAppDispatch, useAppSelector } from "@/app/models/hooks"
import { changeThemeModeAC, selectThemeMode } from "@/app/models/appSlice"

interface Props extends React.ComponentPropsWithoutRef<"button"> {
    duration?: number
}

export const ThemeToggle = ({ duration = 400, ...props }: Props) => {
    const dispatch = useAppDispatch()
    const theme = useAppSelector(selectThemeMode)

    const buttonRef = useRef<HTMLButtonElement>(null)
    const isDark = theme === "dark"

    const handleToggle = useCallback(() => {
        const button = buttonRef.current
        if (!button) return

        const { top, left, width, height } = button.getBoundingClientRect()

        const x = left + width / 2
        const y = top + height / 2

        const vw = window.visualViewport?.width ?? window.innerWidth
        const vh = window.visualViewport?.height ?? window.innerHeight

        const maxRadius = Math.hypot(
            Math.max(x, vw - x),
            Math.max(y, vh - y)
        )

        const applyTheme = () => {
            dispatch(
                changeThemeModeAC({
                    themeMode: isDark ? "light" : "dark",
                })
            )
        }

        if (!document.startViewTransition) {
            applyTheme()
            return
        }

        const transition = document.startViewTransition(() => {
            flushSync(applyTheme)
        })

        transition.ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${maxRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            )
        })
    }, [dispatch, isDark, duration])

    return (
        <button ref={buttonRef} onClick={handleToggle} {...props}>
            {isDark ? <Sun color="white" size={'20px'} /> : <Moon color="black" size={'20px'}/>}
        </button>
    )
}
