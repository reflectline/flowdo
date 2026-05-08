import {useParams} from 'react-router-dom'
import {parseDashboardFilter} from '@/shared/lib/route/parseDashboardFilter'

export const useRouteState = () => {
  const { filter, todoName, todoId } = useParams<{
    filter?: string
    todoName?: string
    todoId?: string
  }>()


  return {
    activeFilter: parseDashboardFilter(filter),
    todoName: todoName ? decodeURIComponent(todoName) : null,
    todoId: todoId ?? null,
  }

}