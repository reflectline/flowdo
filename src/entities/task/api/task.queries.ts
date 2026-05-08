import {useQuery} from '@tanstack/react-query';
import {taskApi} from '@/entities/task/api/task.api'
import {getTaskStats} from '@/entities/task/lib/getTaskStats'
import type {Task, TasksQueryResult } from '@/entities/task/lib/types'


export const useGetTasks = (todolistId: string) => {
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