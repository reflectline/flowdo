import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authApi } from './auth.api'
import { useNavigate } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import { tokenStorage } from '@/shared/lib/token'


export const useLogin = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (res) => {
      tokenStorage.set(res.data.data.token)
      void queryClient.invalidateQueries({ queryKey: ['auth', 'me'] })
      navigate(path.dashboard.root, { replace: true })
    },
  })
}

export const useMe = () => {
  return useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
      const res = await authApi.me()
      return res.data.data
    },
    enabled: !!tokenStorage.get(),
    retry: false,
  })
}
  // enabled: !!tokenStorage.get(),
  // meta: { skipErrorToast: true },

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      tokenStorage.remove()
      queryClient.setQueryData(['auth', 'me'], null)
    },
  })
}
