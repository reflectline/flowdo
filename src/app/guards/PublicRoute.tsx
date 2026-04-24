import { useAuth } from '@/features/auth/model/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from '@/app/providers/router/path'

export const PublicRoute = () => {
    const { isAuthenticated, isLoading } = useAuth()

    if (isLoading) return <div>Loading...</div>

    if (isAuthenticated) {
        return <Navigate to={path.dashboard.root} replace />
    }

    return <Outlet />
}
