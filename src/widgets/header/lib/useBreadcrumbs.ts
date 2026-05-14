import { dashboardFilterLabelMap } from '@/app/providers/router/lib/path.schema'
import { path } from '@/app/providers/router/path'
import { useMemo } from 'react'
import { useRouteState } from '@/shared/lib/route/useRouteState'
import { useGetTodolist } from '@/entities/todolist/api/todolist.queries'

type Breadcrumb = {
  label: string
  to: string
}

export const useBreadcrumbs = () => {
  const { activeFilter, todolistId } = useRouteState()
  const { data: todolist } = useGetTodolist(todolistId ?? '')

  const breadcrumbs = useMemo(() => {
    const items: Breadcrumb[] = []

    if (activeFilter) {
      items.push({
        label: dashboardFilterLabelMap[activeFilter],
        to: path.dashboard.filter(activeFilter),
      })
    }
    if (activeFilter && todolistId && todolist) {
      items.push({
        label: todolist.title,
        to: path.dashboard.todo(activeFilter, todolistId),
      })
    }

    return items
  }, [activeFilter, todolistId, todolist])

  const currentBreadcrumb = breadcrumbs.at(-1) ?? { label: 'All lists', to: path.dashboard.root }

  return { breadcrumbs, currentBreadcrumb, activeFilter }
}
