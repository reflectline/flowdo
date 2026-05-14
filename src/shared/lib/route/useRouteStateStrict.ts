import {useRouteState} from '@/shared/lib/route/useRouteState';
import {validateTodolistId} from '@/shared/lib/validation/todolist-id.schema'


export const useRouteStateStrict = () => {
  const { activeFilter, todolistId, } = useRouteState()

  const parsedTodoId = validateTodolistId.safeParse(todolistId)


  if (!activeFilter || !todolistId ) {
    throw new Error('Invalid todolist route')
  }

  return {
    activeFilter,
    todolistId: parsedTodoId.data,
  }
}