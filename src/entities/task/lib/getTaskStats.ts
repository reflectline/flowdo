import { TaskStatus } from '@/shared/api/enums'
import type { Task, TaskStats } from '@/entities/task/lib/types'




export const getTaskStats = (tasks: Task[]): TaskStats => {
  if (!tasks.length) return {
      total: 0,
      completed: 0,
      percent: 0,
      oldestDate: null,
      latestDate: null,
    }


  let total = 0
  let completed = 0
  let oldestDate: string | null = null
  let latestDate: string | null = null

  for (const task of tasks) {
    total++
    if (task.status === TaskStatus.Completed) completed++
    const time = Date.parse(task.addedDate)
    if (!oldestDate || time < Date.parse(oldestDate)) oldestDate = task.addedDate
    if (!latestDate || time > Date.parse(latestDate)) latestDate = task.addedDate
  }
  const percent = Math.round((completed / total) * 100)

  return {
    total,
    completed,
    percent,
    oldestDate,
    latestDate,
  }
}
