import { Navigate, Outlet } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import {useAuth} from '@/features/auth/model/useAuth'


export const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth()


    if (isLoading) return <div>Loading</div> // или loader


    if (!isAuthenticated) return <Navigate to={path.login} replace />
    return <Outlet/>

}
