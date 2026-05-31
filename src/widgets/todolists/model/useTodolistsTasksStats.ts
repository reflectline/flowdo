import { useQueries } from '@tanstack/react-query'
import { useGetTodolists } from '@/entities/todolist/api/todolist.queries'
import { taskApi } from '@/entities/task/api/task.api'
import { getTaskStats } from '@/entities/task/lib/getTaskStats'
import { DEFAULT_TASKS_COUNT, DEFAULT_TASKS_PAGE } from '@/entities/task/config/task.constants'
import type { GetTasksResponse, Task } from '@/entities/task/lib/task.types'

const emptyTasksResponse: GetTasksResponse<Task[]> = {
  items: [],
  totalCount: 0,
  error: null,
}

export const useTodolistsTasksStats = () => {
  const { data: todolists = [], isLoading: isLoadingLists } = useGetTodolists()

  const tasksQueries = useQueries({
    queries: todolists.map((todolist) => ({

      queryKey: ['todolist-tasks-stats', todolist.id],
      queryFn: async () => {
        const { data } = await taskApi.getTasks(todolist.id, { page: DEFAULT_TASKS_PAGE, count: DEFAULT_TASKS_COUNT })
        return data
      },
      staleTime: 60 * 1000,
      placeholderData: emptyTasksResponse,
    })),
  })

  const tasksById = new Map(tasksQueries.map((q, i) => [todolists[i]?.id, q.data ?? emptyTasksResponse]))
  const isLoadingTasks = tasksQueries.some((q) => q.isLoading)



  const data = todolists.map((todolist) => {
    const tasksData  = tasksById.get(todolist.id) ?? emptyTasksResponse

    return {
      ...todolist,
      stats: getTaskStats(tasksData),
    }
  })

  return {
    todolists: data,
    isLoading: isLoadingLists || isLoadingTasks,
  }
}
