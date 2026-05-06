
import { instance } from '@/shared/api/instance'
import type { GetTasksResponse, Task } from '@/entities/task/lib/types'



export const taskApi = {

  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse<Task[]>>(`/todo-lists/${todolistId}/tasks`)
  }

}