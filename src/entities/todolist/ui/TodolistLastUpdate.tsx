import { formatDistanceToNowStrict } from 'date-fns'
import { parseUtcDate } from '@/shared/lib/dates/parseUtcDate'
import s from '@/entities/todolist/ui/Todolist.module.scss'

type TodolistLastUpdateType = {
  latestDate: string | null
}

export const TodolistLastUpdate = (props: TodolistLastUpdateType) => {
  const { latestDate } = props
  if (!latestDate) return <p className={s.textLastUpdate}>No tasks yet</p>

  const text = formatDistanceToNowStrict(
    parseUtcDate(latestDate),
    { addSuffix: true }
  )

  return <p className={s.textLastUpdate}>last update {text}</p>
}


// console.log(new Date().toISOString())
// 2026-05-03T20:35:09.256Z
// Sun May 03 2026 23:32:53 GMT+0300 (Москва, стандартное время)
// 2026-05-03T20:20:07.427
