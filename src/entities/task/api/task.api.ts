
import { instance } from '@/shared/api/instance'
import type { GetTasksResponse, Task } from '@/entities/task/lib/types'
import type { BaseResponse } from '@/shared/api/types'



export const taskApi = {

  getTasks(todolistId?: string) {
    return instance.get<GetTasksResponse<Task[]>>(`/todo-lists/${todolistId}/tasks`)
  },

  createTask(todolistId: string, title: string) {
    return instance.post<BaseResponse<{ item: Task }>>(`/todo-lists/${todolistId}/tasks`, { title })
  }


}