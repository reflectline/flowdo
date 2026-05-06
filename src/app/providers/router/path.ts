import type { DashboardFilter } from '@/app/providers/router/lib/path.schema'

export const path = {
    welcome: '/',
    login: '/login',
    error: '/error404',
    dashboard: {
        root: '/dashboard',
        filter: (f: DashboardFilter) => `/dashboard/${f}`,
        todo: (f: DashboardFilter, title: string, id: string) => `/dashboard/${f}/${title}/${id}`,
    },
} as const
