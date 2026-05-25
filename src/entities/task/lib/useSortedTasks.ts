import { useTasksSort } from '@/shared/lib/hooks/useTasksSorts'
import type { Task } from '@/entities/task/lib/task.types'

export const useSortedTasks = (tasks: Task[] = []) => {
  const { sortField, sortOrder, setSort } = useTasksSort()

  const sortedTasks = [...tasks]



  if (sortField && sortOrder) {
    sortedTasks.sort((a, b) => {
      switch (sortField) {
        case 'title':
          return sortOrder === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)

        case 'date':
          return sortOrder === 'asc'
            ? +new Date(a.addedDate) - +new Date(b.addedDate)
            : +new Date(b.addedDate) - +new Date(a.addedDate)

        case 'status':
          return sortOrder === 'asc'
            ? a.status - b.status
            : b.status - a.status

        case 'priority':
          return sortOrder === 'asc'
            ? a.priority - b.priority
            : b.priority - a.priority

        default:
          return 0
      }
    })
  }

  return {
    sortedTasks,
    sortField,
    sortOrder,
    setSort,
  }
}
