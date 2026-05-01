import { type ReactNode, useEffect } from 'react'
import {useAppSelector} from '@/app/models/hooks'
import {selectThemeMode} from '@/app/models/appSlice'




export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const theme = useAppSelector(selectThemeMode)

    useEffect(() => {
        const root = document.documentElement

        root.setAttribute('data-theme', theme)

        localStorage.setItem('theme', theme)
    }, [theme])

    return <>{children}</>
}
