import { useQuery } from '@tanstack/react-query'
import { todolistsApi } from '@/entities/todolist/api/todolists.api'




export const useGetAllTodolists = () => {
  return useQuery({
    queryKey: ['todolists'],
    queryFn: async () => {
      const { data } = await todolistsApi.getTodolists()
      return data
    },
    retry: false,
  })
}
