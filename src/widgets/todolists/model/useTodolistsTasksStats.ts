import { useQueries } from '@tanstack/react-query'
import { useGetTodolists } from '@/entities/todolist/api/todolist.queries'
import { taskApi } from '@/entities/task/api/task.api'
import { getTaskStats } from '@/entities/task/lib/getTaskStats'

export const useTodolistsTasksStats = () => {
  const { data: todolists = [], isLoading: isLoadingLists } = useGetTodolists()

  const tasksQueries = useQueries({
    queries: todolists.map((todolist) => ({
      queryKey: ['tasks', todolist.id],
      queryFn: async () => {
        const { data } = await taskApi.getTasks(todolist.id)
        return data.items
      },
      staleTime: 60 * 1000,
      // placeholderData: [],
    })),
  })

  const tasksMap = new Map(
    tasksQueries.map((q, i) => [
      todolists[i]?.id,
      q.data ?? [],
    ])
  )

  const isLoadingTasks = tasksQueries.every(q => q.isLoading)
  const data = todolists.map((todolist) => {
    const tasks = tasksMap.get(todolist.id) ?? []
    const stats = getTaskStats(tasks)

    return {
      ...todolist,
      stats,
    }
  })

  return {
    todolists: data,
    isLoading: isLoadingLists || isLoadingTasks,
  }
}


// export const useTodolistsTasksStats = () => {
//   const { data: todolists = [], isLoading: isLoadingLists } = useGetTodolists()
//
//   const tasksQueries = useQueries({
//     queries: todolists.map((todolist) => ({
//       queryKey: ['tasks', todolist.id],
//       queryFn: async () => {
//         const { data } = await taskApi.getTasks(todolist.id)
//         return data.items
//       },
//       staleTime: 60 * 1000,
//       placeholderData: [],
//     })),
//   })
//
//   const isLoadingTasks = tasksQueries.every(q => q.isLoading)
//   const tasksMap = new Map(tasksQueries.map((q, i) =>
//     [todolists[i]?.id, q.data ?? []])
//   )
//
//   const data = todolists.map((todolist) => {
//     const tasks =  tasksMap.get(todolist.id) ?? []
//     const stats = getTaskStats(tasks)
//
//     return {
//       ...todolist,
//       stats,
//     }
//   })
//
//   return {
//     todolists: data,
//     isLoading: isLoadingLists || isLoadingTasks,
//   }
// }