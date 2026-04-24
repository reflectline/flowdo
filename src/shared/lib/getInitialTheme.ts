import type {ThemeMode} from '@/app/models/appSlice'

export const getInitialTheme = (): ThemeMode => {
    if (typeof window === 'undefined') return 'dark'
    const saved = localStorage.getItem('theme') as ThemeMode | null
    if (saved) return saved
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    }
    return 'light'
}