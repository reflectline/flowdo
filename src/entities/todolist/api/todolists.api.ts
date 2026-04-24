import { instance } from '@/shared/api/instance'
import type { BaseResponse } from '@/shared/api/types'
import type {Todolist} from '@/entities/todolist/lib/types'

export const todolistsApi = {

    getTodolists() {
        return instance.get<Todolist[]>('/todo-lists')
    },

    createTodolist(title: string) {
        return instance.post<BaseResponse<{ item: Todolist }>>('/todo-lists', { title })
    },

    deleteTodolist(id: string) {
        return instance.delete<BaseResponse>(`/todo-lists/${id}`)
    },

    changeTodolistTitle(id: string, title: string) {
        return instance.put<BaseResponse>(`/todo-lists/${id}`, { title })
    },

    changeTodolistPosition(id: string, putAfterItemId: string | null) {
        return instance.put<BaseResponse>( `/todo-lists/${id}/reorder`, {putAfterItemId})
    },
}
