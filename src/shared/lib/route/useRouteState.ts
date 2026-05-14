import {useParams} from 'react-router-dom'
import {parseDashboardFilter} from '@/shared/lib/route/parseDashboardFilter'

export const useRouteState = () => {
  const { filter, todolistId } = useParams<{
    filter?: string
    todoName?: string
    todolistId?: string
  }>()


  return {
    activeFilter: parseDashboardFilter(filter),
    todolistId: todolistId ?? null,
  }

}