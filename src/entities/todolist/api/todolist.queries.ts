import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { todolistApi } from '@/entities/todolist/api/todolist.api'
import type {Todolist} from '@/entities/todolist/lib/types.ts';
import {queryClient} from "@/app/providers/query-client/query-client.ts";








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
    mutationFn:({title}: { title: string })=>  todolistApi.createTodolist(title),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['todolists'] })
    }
  })
}

export const useUpdateTodolistTitle = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id, title}: { id: string; title: string })=> todolistApi.updateTodolistTitle(id, title),

    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ['todolists'] })
      const prevTodolists = queryClient.getQueryData<Todolist[]>(['todolists'])

      // оптимистично меняем
      queryClient.setQueryData<Todolist[]>(['todolists'], (old) => {
        if (!old) return old

        return old.map((t) =>
          t.id === variables.id
            ? { ...t, title: variables.title }
            : t
        )
      })

      return { prevTodolists }
    },

    // ❌ 2. rollback если ошибка
    onError: (_err, _variables, context) => {
      if (context?.prevTodolists) {
        queryClient.setQueryData(['todolists'], context.prevTodolists)
      }
    },

    onSuccess: (_, variables) => {
      queryClient.setQueryData(['todolists'], (old: Todolist[] | undefined) => {
        if (!old) return old

        return old.map(t =>
          t.id === variables.id
            ? { ...t, title: variables.title }
            : t
        )
      })
    }



  })


}

// onSettled: () => {
//   queryClient.invalidateQueries({ queryKey: ['todolists'] })
// },



// onSuccess: (_, variables) => {
//   queryClient.setQueryData(['todolists'], (old: Todolist[] | undefined) => {
//     if (!old) return old
//     return old.map(todolist => todolist.id === variables.id
//       ? { ...todolist, title: variables.title }
//       : todolist)
//   })
// },
