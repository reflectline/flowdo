import { useSearchParams } from 'react-router'
import type {FilterKey, PriorityFilterValue, SelectedView, StatusFilterValue} from '@/features/task/controls/lib/types'

type FilterValueMap = {
  status: StatusFilterValue
  priority: PriorityFilterValue
  view: SelectedView
}

export const useTasksFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const getFilter = <K extends FilterKey>(key: K): FilterValueMap[K][] => {
    return (searchParams.get(key)?.split(',').filter(Boolean) as FilterValueMap[K][]) ?? []
  }

  const toggleFilter = <K extends FilterKey>(key: K, value: FilterValueMap[K]) => {
    const current = getFilter(key)
    const exists = current.includes(value)

    const updated = exists
      ? current.filter((item) => item !== value)
      : [...current, value]

    const nextParams = new URLSearchParams(searchParams)

    if (updated.length) {
      nextParams.set(key, updated.join(','))
    } else {
      nextParams.delete(key)
    }

    setSearchParams(nextParams)
  }

  return {
    selectedStatuses: getFilter('status'),
    selectedPriorities: getFilter('priority'),
    selectedViews: getFilter('view'),

    toggleStatus: (value: StatusFilterValue) => toggleFilter('status', value),
    togglePriority: (value: PriorityFilterValue) => toggleFilter('priority', value),
    toggleView: (value: SelectedView) => toggleFilter('view', value),
  }
}