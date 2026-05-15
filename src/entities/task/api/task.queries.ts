import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { taskApi } from '@/entities/task/api/task.api'
import { getTaskStats } from '@/entities/task/lib/getTaskStats'
import type { GetTasksResponse, Task, TasksQueryResult } from '@/entities/task/lib/task.types'
import { DEFAULT_TASKS_COUNT, DEFAULT_TASKS_PAGE } from '@/entities/task/config/task.constants'

// export const useGetTasks = (todolistId?: string) => {
//   return useQuery<Task[], Error, TasksQueryResult>({
//     queryKey: ['tasks', todolistId],
//     enabled: !!todolistId,
//     queryFn: async () => {
//       const { data } = await taskApi.getTasks(todolistId)
//       return data.items
//     },
//     select: (tasks) => {
//       const stats = getTaskStats(tasks)
//       return { tasks, stats }
//     },
//     retry: 1,
//   })
// }

type UseGetTasksParams = {
  todolistId?: string
  page?: number
  count?: number
}
export const useGetTasks = ({todolistId, page = DEFAULT_TASKS_PAGE, count = DEFAULT_TASKS_COUNT,}: UseGetTasksParams) => {
  return useQuery<GetTasksResponse<Task[]>, Error, TasksQueryResult>({
    queryKey: ['tasks', todolistId,],
    enabled: !!todolistId,

    queryFn: async () => {
      const { data } = await taskApi.getTasks(todolistId, { page, count })
      return data
    },
    select: (data) => {
      return {
        tasks: data.items,
        stats: getTaskStats(data.items),
        totalCount: data.totalCount,
      }
    },
    retry: 1,
  })
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ todolistId, title }: { todolistId: string; title: string }) => taskApi.createTask(todolistId, title),

    onSuccess: (res, variables) => {
      const newTasks = res.data.data.item
      queryClient.setQueriesData<GetTasksResponse<Task[]>>({ queryKey: ['tasks', variables.todolistId] }, (old) => {
        if (!old) return old
        return { ...old, totalCount: old.totalCount + 1, items: [newTasks, ...old.items] }
      })
    },
  })
}
