import { useParams } from 'react-router-dom'
import {dashboardFilterLabelMap, dashboardFilterSchema} from '@/app/providers/router/lib/path.schema'
import { path } from '@/app/providers/router/path'
import {useMemo} from "react";

type Breadcrumb = {
    label: string
    to: string
}

export const useBreadcrumbs = () => {
    const { filter, todoName } = useParams()
    const parsedFilter = dashboardFilterSchema.safeParse(filter)
    const safeFilter = parsedFilter.success ? parsedFilter.data : undefined

    const breadcrumbs = useMemo(() => {

        const items: Breadcrumb[] = []

        if (safeFilter) {
            items.push({
                label: dashboardFilterLabelMap[safeFilter],
                to: path.dashboard.filter(safeFilter),
            })
        }
        if (safeFilter && todoName) {
            items.push({
                label: decodeURIComponent(todoName),
                to: path.dashboard.todo(safeFilter, todoName),
            })
        }

        return items
    }, [safeFilter, todoName])

    const currentBreadcrumb = breadcrumbs.at(-1) ?? {label: 'All lists', to: path.dashboard.root,}



    return {breadcrumbs, currentBreadcrumb, parsedFilter}
}
