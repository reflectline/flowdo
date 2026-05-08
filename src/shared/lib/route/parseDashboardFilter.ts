import { type DashboardFilter, dashboardFilterSchema } from '@/app/providers/router/lib/path.schema'

export const parseDashboardFilter = (value?: string): DashboardFilter | null => {
  const parsed = dashboardFilterSchema.safeParse(value)

  return  parsed.success? parsed.data : null
}