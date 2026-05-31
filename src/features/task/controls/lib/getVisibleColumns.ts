import type { SelectedView } from '@/features/task/controls/lib/controls.types'


export const getVisibleColumns = (selectedViews: SelectedView[]) => {
  return {
    title: !selectedViews.includes('title'),
    date: !selectedViews.includes('date'),
    status: !selectedViews.includes('status'),
    priority: !selectedViews.includes('priority'),
  } as const
}