import { useMe } from '@/features/auth/api/auth.queries'


export const useAuth = () => {
    const { data, isLoading } = useMe()


    return {
        user: data ?? null,
        isAuthenticated: !!data,
        isLoading,
    }
}
