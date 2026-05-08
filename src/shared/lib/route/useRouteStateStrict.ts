import {useRouteState} from '@/shared/lib/route/useRouteState';
import {validateTodolistId} from "@/shared/lib/validation/todolist-id.schema.ts";


export const useRouteStateStrict = () => {
  const { activeFilter, todoName, todoId, } = useRouteState()

  const parsedTodoId = validateTodolistId.safeParse(todoId)


  if (!activeFilter || !todoId || !todoName) {
    throw new Error('Invalid todolist route')
  }

  return {
    activeFilter,
    todoName,
    todoId: parsedTodoId.data,
  }
}