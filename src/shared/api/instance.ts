import axios, { type InternalAxiosRequestConfig } from 'axios'
import { parseHttpError } from '@/shared/api/lib/parseHttpError'
import { queryClient } from '@/app/providers/query-client/query-client'
import { parseServerError } from '@/shared/api/lib/parseServerError'
import { tokenStorage } from '@/features/auth/lib/token-storage'

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    'API-KEY': import.meta.env.VITE_API_KEY,
  },
})
console.log('BASE_URL:', import.meta.env.VITE_BASE_URL)

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = tokenStorage.get()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

instance.interceptors.response.use(
  (res) => {
    if (res.data?.resultCode !== undefined && res.data.resultCode !== 0) {
      throw parseServerError(res)
    }
    return res
  },
  (error) => {
    if (error.response?.status === 401) {
      tokenStorage.remove()
      queryClient.setQueryData(['auth', 'me'], null)
    }
    throw parseHttpError(error)
  },
)
