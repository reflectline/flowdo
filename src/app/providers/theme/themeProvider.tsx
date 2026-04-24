import { useEffect } from 'react'
import {useAppSelector} from '@/app/models/hooks'
import {selectThemeMode} from '@/app/models/appSlice'
import * as React from 'react'



export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = useAppSelector(selectThemeMode)

    useEffect(() => {
        const root = document.documentElement

        root.setAttribute('data-theme', theme)

        localStorage.setItem('theme', theme)
    }, [theme])

    return <>{children}</>
}
