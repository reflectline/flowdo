import type { Todolist } from '@/entities/todolist/lib/todolist.types'
import type { TaskStats } from '@/entities/task/lib/task.types'
import { isToday } from 'date-fns'
import {parseUtcDate} from '@/shared/lib/dates/parseUtcDate'

export  type TodolistWithStats = Todolist & {
  stats: TaskStats
}

export const filterTodolists = (todolists: TodolistWithStats[], filter: string| null) => {
  switch (filter) {
    case 'today':
      return todolists.filter(
        (t) => t.addedDate && isToday(parseUtcDate(t.addedDate)),
      )

    case 'in-process':
      return todolists.filter(
        (t) => t.stats.status > 0 && t.stats.status < t.stats.total
      )

    case 'done':
      return todolists.filter(
        (t) => t.stats.total > 0 && t.stats.percent === 100
      )

    default:
      return todolists
  }
}