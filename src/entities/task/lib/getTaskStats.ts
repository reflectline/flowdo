import { TaskStatus } from '@/shared/api/enums'
import type { GetTasksResponse, Task, TaskStats } from '@/entities/task/lib/task.types'




export const getTaskStats = (data: GetTasksResponse<Task[]>): TaskStats => {
  if (!data?.items?.length) return {
      total: 0,
      completed: 0,
      percent: 0,
      oldestDate: null,
      latestDate: null,
    }


  let completed = 0
  let oldestDate: string | null = null
  let latestDate: string | null = null

  for (const task of data.items) {
    if (task.status === TaskStatus.Completed) completed++
    const time = Date.parse(task.addedDate)
    if (!oldestDate || time < Date.parse(oldestDate)) oldestDate = task.addedDate
    if (!latestDate || time > Date.parse(latestDate)) latestDate = task.addedDate
  }
  const percent = data.totalCount > 0 ? Math.round((completed / data.totalCount) * 100) : 0

  return {
    total: data.totalCount,
    completed: completed,
    percent,
    oldestDate,
    latestDate,
  }
}
