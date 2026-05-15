import { useQueries } from '@tanstack/react-query'
import { useGetTodolists } from '@/entities/todolist/api/todolist.queries'
import { taskApi } from '@/entities/task/api/task.api'
import { getTaskStats } from '@/entities/task/lib/getTaskStats'
import { DEFAULT_TASKS_COUNT, DEFAULT_TASKS_PAGE } from '@/entities/task/config/task.constants'

export const useTodolistsTasksStats = () => {
  const { data: todolists = [], isLoading: isLoadingLists } = useGetTodolists()

  const tasksQueries = useQueries({
    queries: todolists.map((todolist) => ({
      todolistId: todolist.id,
      queryKey: ['tasks', todolist.id, DEFAULT_TASKS_PAGE, DEFAULT_TASKS_COUNT],
      queryFn: async () => {
        const { data } = await taskApi.getTasks(todolist.id, { page: DEFAULT_TASKS_PAGE, count: DEFAULT_TASKS_COUNT })
        return data.items
      },
      staleTime: 60 * 1000,
      placeholderData: [],
    })),
  })

  const tasksById = new Map(tasksQueries.map((q, i) => [todolists[i]?.id, q.data ?? []]))
  const isLoadingTasks = tasksQueries.some((q) => q.isLoading)

  const data = todolists.map((todolist) => {
    const tasks = tasksById.get(todolist.id) ?? []

    return {
      ...todolist,
      stats: getTaskStats(tasks),
    }
  })

  return {
    todolists: data,
    isLoading: isLoadingLists || isLoadingTasks,
  }
}
