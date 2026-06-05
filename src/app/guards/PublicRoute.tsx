import { useAuth } from '@/features/auth/model/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import {Loader} from '@/shared/ui/loader/Loader'


export const PublicRoute = () => {
    const { isAuthenticated, isLoading } = useAuth()

    if (isLoading) return <Loader/>

    if (isAuthenticated) {
        return <Navigate to={path.dashboard.root} replace />
    }

    return <Outlet />
}
