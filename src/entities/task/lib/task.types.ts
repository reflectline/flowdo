export type GetTasksResponse <T = unknown>={
  error: string | null
  totalCount: number
  items: T
}

export type Task = {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}


export type TaskStats = {
  total: number
  completed: number
  percent: number
  oldestDate: string | null
  latestDate: string | null
}

export type GetTasksParams = {
  page?: number
  count?: number
}

export type TasksQueryResult = {
  tasks: Task[]
  stats: TaskStats
  totalCount: number
}

