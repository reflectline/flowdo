import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {taskApi} from '@/entities/task/api/task.api'
import {getTaskStats} from '@/entities/task/lib/getTaskStats'
import type {Task, TasksQueryResult } from '@/entities/task/lib/types'


export const useGetTasks = (todolistId?: string) => {
  return useQuery<Task[], Error, TasksQueryResult>({
    queryKey: ['tasks', todolistId],
    enabled: !!todolistId,
    queryFn: async () => {
      const { data } = await taskApi.getTasks(todolistId)
      return data.items
    },
    select: (tasks) => {
      const stats = getTaskStats(tasks)
      return { tasks, stats }
    },
    retry: 1,
  })
}


export const useCreateTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ todolistId ,title }: { todolistId: string ,title: string }) =>
      taskApi.createTask(todolistId,title),

    onSuccess: (res, variables) => {
      const newTasks = res.data.data.item
      queryClient.setQueryData<Task[]>(['tasks', variables.todolistId], (old) =>
        old ? [newTasks, ...old] : [newTasks]
      )
    },
  })
}


