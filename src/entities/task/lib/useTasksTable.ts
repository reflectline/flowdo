import { useEffect, useMemo, useState } from 'react'
import type { Task } from '@/entities/task/lib/task.types'
import { useSortedTasks } from '@/entities/task/lib/useSortedTasks'
import {
  DEFAULT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
  PAGE_SIZE_STORAGE_KEY,
} from '@/features/task/controls/pagination/lib/pagination.constants'

export const useTasksTable = (tasks: Task[]) => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState<number>(() => {
    const saved = Number(localStorage.getItem(PAGE_SIZE_STORAGE_KEY))
    return PAGE_SIZE_OPTIONS.includes(saved as (typeof PAGE_SIZE_OPTIONS)[number]) ? saved : DEFAULT_PAGE_SIZE
  })
  const { sortedTasks, sortField, sortOrder, setSort } = useSortedTasks(tasks)

  const total = sortedTasks.length
  const rowNumberStart = (page - 1) * pageSize
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  useEffect(() => {
    setPage((prev) => Math.min(prev, totalPages))
  }, [totalPages])

  useEffect(() => {
    localStorage.setItem(PAGE_SIZE_STORAGE_KEY, String(pageSize))
  }, [pageSize])

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
