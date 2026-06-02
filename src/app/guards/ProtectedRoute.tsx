import { Navigate, Outlet } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import {useAuth} from '@/features/auth/model/useAuth'
import {Loader} from '@/shared/ui/loader/Loader'


export const ProtectedRoute = () => {
    const {user, isAuthenticated,isLoading,isFetching } = useAuth()


    if (!user && isLoading) return (<Loader/>)


    if (!isAuthenticated) return <Navigate to={path.login} replace />
    return <Outlet/>

}
