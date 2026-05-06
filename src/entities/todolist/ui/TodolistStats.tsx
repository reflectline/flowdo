import { formatDaysAgoShort } from '@/shared/lib/dates/formatDaysAgoShort'
import type { TaskStats } from '@/entities/task/lib/types'
import s from '@/entities/todolist/ui/Todolist.module.scss'

type TodolistStatsType = {
  stats: TaskStats
}

export const TodolistStats = (props: TodolistStatsType) => {
  const { total, completed, oldestDate, percent } = props.stats

  const sum = total === 1 ? '1 task' : `${total} tasks`
  const done = `${completed} done`
  const days = oldestDate ? formatDaysAgoShort(oldestDate) : '0 d.'
  const interest = `${percent}%`
  const statsList  = [sum, done, days]

  return (
    <div className={s.statsContent}>
      <div className={s.splitWrapper}>
        {statsList.map((stat, i) => (
          <span  key={i} className={s.splitItem}>
            {stat}
          </span >
        ))}
      </div>
      <p>{interest}</p>
      {/*{sum} | {done} | {days} | {interest}*/}
      {/*<>6 tasks | 9 done | 9 d.  50%</>*/}
    </div>
  )
}
