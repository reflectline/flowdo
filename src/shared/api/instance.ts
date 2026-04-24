import axios, { type InternalAxiosRequestConfig } from 'axios'
import { parseHttpError } from '@/shared/api/lib/parseHttpError'
import { tokenStorage } from '@/shared/lib/token'
import {queryClient} from '@/app/providers/query-client/query-client';
import {parseServerError} from '@/shared/api/lib/parseServerError.ts';





export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'API-KEY': import.meta.env.VITE_API_KEY,
  },
})

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
  }
)
