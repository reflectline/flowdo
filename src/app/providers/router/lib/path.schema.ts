import { z } from 'zod'

export const dashboardFilterSchema = z.enum(['all-lists', 'today', 'in-process', 'done'])

export type DashboardFilter = z.infer<typeof dashboardFilterSchema>

export const dashboardFilterLabelMap: Record<DashboardFilter, string> = {
    'all-lists': 'All lists',
    'today': 'Today',
    'in-process': 'In process',
    'done': 'Done',
}
