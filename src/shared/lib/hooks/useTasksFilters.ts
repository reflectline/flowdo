import { useSearchParams } from 'react-router'
import type { FilterKey, FilterValue } from '@/features/task/lib/types'


export const useTasksFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()


  const getFilter = (key: FilterKey): FilterValue[] => {
    return searchParams.get(key)?.split(',').filter(Boolean) ?? []
  }

  const toggleFilter = (key: FilterKey , value: FilterValue) => {
    const current = searchParams.get(key)?.split(',').filter(Boolean) ?? []
    const exists = current.includes(value)

    const updated = exists ? current.filter((item) => item !== value) : [...current, value]
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

    toggleStatus: (value: string) => toggleFilter('status', value),
    togglePriority: (value: string) => toggleFilter('priority', value),
    toggleView: (value: string) => toggleFilter('view', value),
  }
}