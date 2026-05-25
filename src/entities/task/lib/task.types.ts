import type { TaskStatus, TaskPriority } from '@/shared/api/enums';


export type GetTasksResponse <T = unknown>={
  error: string | null
  totalCount: number
  items: T
}
export type Task = {
  addedDate: string
  deadline: string
  description: string
  id: string
  order: number
  priority: TaskPriority
  startDate: string
  status: TaskStatus
  title: string
  todoListId: string
}
export type GetTasksParams = {
  page?: number
  count?: number
}
export type UpdateTaskModel = {
  title: string,
  description: string,
  status: TaskStatus,
  priority: TaskPriority,
  startDate: string,
  deadline: string,
}


export type TaskStats = {
  total: number
  status: number
  percent: number
  oldestDate: string | null
  latestDate: string | null
}



