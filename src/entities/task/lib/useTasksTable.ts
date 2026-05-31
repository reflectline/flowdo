import { useEffect, useMemo, useState } from 'react'
import type { Task } from '@/entities/task/lib/task.types'
import { useSortedTasks } from '@/entities/task/lib/useSortedTasks'

export const useTasksTable = (tasks: Task[]) => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(15)
  const { sortedTasks, sortField, sortOrder, setSort } = useSortedTasks(tasks)

  const total= sortedTasks.length
  const rowNumberStart = (page - 1) * pageSize
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  useEffect(() => {
    setPage(prev => Math.min(prev, totalPages))
  }, [totalPages])

  const visibleTasks = useMemo(() => {
    return sortedTasks.slice(rowNumberStart, rowNumberStart + pageSize)
  }, [sortedTasks, rowNumberStart, pageSize])

  const handlePageSizeChange = (size: number) => {
    setPageSize(size)
    setPage(1)
  }


  return {
    tasks: {
      visibleTasks,
      total,
      rowNumberStart,
    },

    sorting: {
      sortField,
      sortOrder,
      setSort,
    },

    pagination: {
      page,
      totalPages,
      setPage,
      pageSize,
      setPageSize: handlePageSizeChange,
    },
  }
}