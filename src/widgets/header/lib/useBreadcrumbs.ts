
import {dashboardFilterLabelMap} from '@/app/providers/router/lib/path.schema'
import { path } from '@/app/providers/router/path'
import {useMemo} from 'react'
import {useRouteState} from '@/shared/lib/route/useRouteState'

type Breadcrumb = {
    label: string
    to: string
}

export const useBreadcrumbs = () => {
    const { activeFilter, todoName, todoId } = useRouteState()


    const breadcrumbs = useMemo(() => {

        const items: Breadcrumb[] = []

        if (activeFilter) {
            items.push({
                label: dashboardFilterLabelMap[activeFilter],
                to: path.dashboard.filter(activeFilter),
            })
        }
        if (activeFilter && todoName && todoId) {
            items.push({
                label: todoName,
                to: path.dashboard.todo(activeFilter, todoName, todoId),
            })
        }

        return items
    }, [activeFilter, todoName, todoId])

    const currentBreadcrumb = breadcrumbs.at(-1) ?? {label: 'All lists', to: path.dashboard.root,}



    return {breadcrumbs, currentBreadcrumb, activeFilter}
}
