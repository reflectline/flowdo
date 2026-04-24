import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import type { ApiError } from '@/shared/api/types'
import { notify } from '@/shared/api/lib/toast'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.meta?.skipErrorToast) return

      const err = error as ApiError
      notify.error(err.message)
      console.error(error)
    },
  }),

  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      if (mutation.meta?.skipErrorToast) return

      const err = error as ApiError
      notify.error(err.message)
      console.error(error)
    },
  }),

  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 мин — данные считаются свежими
      gcTime: 1000 * 60 * 10, // 10 мин — хранение в кеше (v5 вместо cacheTime)
      retry: 1, // 1 повтор при ошибке
      refetchOnWindowFocus: false, // не дергать API при фокусе окна false
      refetchOnReconnect: true,
    },

    mutations: {
      retry: 0,
    },
  },
})


