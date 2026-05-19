import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { taskApi } from '@/entities/task/api/task.api'
import { getTaskStats } from '@/entities/task/lib/getTaskStats'
import type { GetTasksResponse, Task, UpdateTaskModel } from '@/entities/task/lib/task.types'
import { DEFAULT_TASKS_COUNT, DEFAULT_TASKS_PAGE } from '@/entities/task/config/task.constants'

type UseGetTasksType = {
  todolistId?: string
  page: number
  count: number
}
export const useGetTasks = ({todolistId, page = DEFAULT_TASKS_PAGE, count = DEFAULT_TASKS_COUNT,}: UseGetTasksType) => {
  return useQuery({
    queryKey: ['tasks', todolistId],
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

export const useUpdateTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({todolistId, taskId, model}: {todolistId: string, taskId: string, model: UpdateTaskModel}) =>
      taskApi.updateTask(todolistId, taskId, model),

    onMutate: async ({ todolistId, taskId, model }) => {
      await queryClient.cancelQueries({queryKey: ['tasks', todolistId]})
      const previousData = queryClient.getQueryData<GetTasksResponse<Task[]>>(['tasks', todolistId])

      queryClient.setQueryData<GetTasksResponse<Task[]>>(['tasks', todolistId], (old) => {
        if (!old) return old
        return {
          ...old, items: (old.items ?? []).map((task: Task) => task.id === taskId ? { ...task, ...model } : task),
        }
      })

      return { previousData, todolistId }
    },

    onError: (_error, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(['tasks', context.todolistId], context.previousData)
      }
    },

  })
}