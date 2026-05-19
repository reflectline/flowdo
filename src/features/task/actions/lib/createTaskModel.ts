import type { Task, UpdateTaskModel } from '@/entities/task/lib/task.types'

export const createTaskModel = (task: Task, value: Partial<UpdateTaskModel>): UpdateTaskModel => {
  return {
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    startDate: task.startDate,
    deadline: task.deadline,
    ...value
  }
}