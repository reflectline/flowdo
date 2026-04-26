import { useQuery } from '@tanstack/react-query'
import {todolistApi} from '@/entities/todolist/api/todolist.api.ts'






export const useGetAllTodolists = () => {
  return useQuery({
    queryKey: ['todolists'],
    queryFn: async () => {
      const { data } = await todolistApi.getTodolists()
      return data
    },
    retry: false,
  })
}
