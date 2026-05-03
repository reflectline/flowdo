import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { todolistApi } from '@/entities/todolist/api/todolist.api'
import type {Todolist} from '@/entities/todolist/lib/types';








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

export const useCreateTodolist = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ title }: { title: string }) => todolistApi.createTodolist(title),

    onSuccess: (res) => {
      const newTodolist = res.data.data.item
      queryClient.setQueryData<Todolist[]>(['todolists'], (old) =>
        old ? [newTodolist, ...old] : [newTodolist]
      )
    },
  })
}
// export const useCreateTodolist = () => {
//   const queryClient = useQueryClient()
//
//   return useMutation({
//     mutationFn:({title}: { title: string })=>  todolistApi.createTodolist(title),
//     onSuccess: () => {
//       void queryClient.invalidateQueries({ queryKey: ['todolists'] })
//     }
//   })
// }

export const useUpdateTodolistTitle = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id, title}: { id: string; title: string })=> todolistApi.updateTodolistTitle(id, title),
    onMutate: async ({ id, title }) => {
      await queryClient.cancelQueries({ queryKey: ['todolists'] })
      const prev = queryClient.getQueryData<Todolist[]>(['todolists'])
      queryClient.setQueryData<Todolist[]>(['todolists'], (old) =>
        old?.map(todolist => todolist.id === id ? { ...todolist, title } : todolist)
      )
      return { prev }
    },

    onError: (_error, _variables, context) => {
      if (context?.prev) {
        queryClient.setQueryData(['todolists'], context.prev)
      }
    },
  })
}

export const useDeleteTodolist = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id}: { id: string })=> todolistApi.deleteTodolist(id),
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({ queryKey: ['todolists'] })
      const prev = queryClient.getQueryData<Todolist[]>(['todolists'])
      queryClient.setQueryData<Todolist[]>(['todolists'], (old) =>
        old?.filter(todolist => todolist.id !== id)
      )
      return { prev }
    },

    onError: (_error, _variables, context) => {
      if (context?.prev) {
        queryClient.setQueryData(['todolists'], context.prev)
      }
    },
  })
}