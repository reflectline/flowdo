import { parseUtcDate } from '@/shared/lib/dates/parseUtcDate'
import s from '@/entities/task/ui/Task.module.scss'
import { Calendar } from 'lucide-react'
import icon from '@/shared/styles/icons.module.scss'

type TaskItemDateType = {
  date: string
}

export const TaskItemDate = (props: TaskItemDateType) => {
  const { date } = props

  const prepare = parseUtcDate(date)

  const day = String(prepare.getDate()).padStart(2, '0')
  const month = String(prepare.getMonth() + 1).padStart(2, '0')
  const year = prepare.getFullYear()

  const hours = String(prepare.getHours()).padStart(2, '0')
  const minutes = String(prepare.getMinutes()).padStart(2, '0')

  return (
    <span className={s.taskDateContent}>
      <Calendar className={icon.icon14} />
      <div className={s.taskDate}>
        <span>{`${day}.${month}.${year}`}</span>
        <span>{`${hours}:${minutes}`}</span>
      </div>
    </span>
  )
}
