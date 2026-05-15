
import { instance } from '@/shared/api/instance'
import type { GetTasksParams, GetTasksResponse, Task } from '@/entities/task/lib/task.types'
import type { BaseResponse } from '@/shared/api/types'



export const taskApi = {

  getTasks(todolistId?: string, params?: GetTasksParams) {
    return instance.get<GetTasksResponse<Task[]>>(`/todo-lists/${todolistId}/tasks`,{ params })
  },

  createTask(todolistId: string, title: string) {
    return instance.post<BaseResponse<{ item: Task }>>(`/todo-lists/${todolistId}/tasks`, { title })
  }


}