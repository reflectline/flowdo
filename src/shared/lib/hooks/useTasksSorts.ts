import { useSearchParams } from 'react-router'
import type { SortField, SortOrder } from '@/features/task/controls/sorts/lib/sort.types'


export const useTasksSort = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const sortField = searchParams.get('sortField') as SortField | null
  const sortOrder = searchParams.get('sortOrder') as SortOrder | null

  const setSort = (field: SortField) => {
    const nextParams = new URLSearchParams(searchParams)

    const isSameField = sortField === field

    // OFF → ASC
    if (!isSameField || !sortOrder) {
      nextParams.set('sortField', field)
      nextParams.set('sortOrder', 'asc')
      setSearchParams(nextParams)
      return
    }

    // ASC → OFF
    if (sortOrder === 'asc') {
      nextParams.delete('sortField')
      nextParams.delete('sortOrder')
      setSearchParams(nextParams)
      return
    }

    // fallback (на всякий случай)
    nextParams.delete('sortField')
    nextParams.delete('sortOrder')
    setSearchParams(nextParams)
  }



  return {
    sortField,
    sortOrder,
    setSort,
  }
}