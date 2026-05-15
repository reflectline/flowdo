import { useRouteState } from '@/shared/lib/route/useRouteState'

export const useDashboardFilterStrict = () => {
  const { activeFilter } = useRouteState()

  if (!activeFilter) {
    throw new Error('Invalid dashboard filter')
  }

  return { activeFilter }
}