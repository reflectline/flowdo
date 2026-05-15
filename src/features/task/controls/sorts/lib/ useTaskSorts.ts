import { useSearchParams } from 'react-router'
import type { SortKey, SortOrder } from '@/features/task/controls/sorts/lib/sort.types'



export const useTaskSorts = () => {
  const [searchParams, setSearchParams] = useSearchParams()


  const getSort = (key: SortKey): SortOrder | null => {
    const value = searchParams.get(key)
    if (value === 'asc' || value === 'desc' || value === 'hide') return value
    return null
  }

  const setSort = (key: SortKey, value: SortOrder) => {
    const nextParams = new URLSearchParams(searchParams)
    const current = searchParams.get(key)

    if (current === value) {
      nextParams.delete(key)
    } else {
      nextParams.set(key, value)
    }
    setSearchParams(nextParams)
  }

  return {
    selectedTitleSort: getSort('titleSort'),
    selectedStatusSort: getSort('statusSort'),
    selectedPrioritySort: getSort('prioritySort'),
    selectedDateSort: getSort('dateSort'),

    setTitleSort: (value: SortOrder) => setSort('titleSort', value),
    setDateSort: (value: SortOrder) => setSort('dateSort', value),
    setStatusSort: (value: SortOrder) => setSort('statusSort', value),
    setPrioritySort: (value: SortOrder) => setSort('prioritySort', value),
  }
}