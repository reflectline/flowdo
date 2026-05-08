import type { TaskStats } from '@/entities/task/lib/types'
import s from '@/entities/task/ui/Tasks.module.scss'

type TasksStatsType = {
  todoName: string
  stats: TaskStats
}

export const TasksStats = (props: TasksStatsType) => {
  const { todoName, stats } = props

  const total = stats.total === 1 ? '1 task' : `${stats.total} tasks`
  const completed = `${stats.completed} completed`
  const remaining = `${stats.total - stats.completed} remaining`
  // const interest = `${stats.percent}%`
  const statsList = [total, completed, remaining]
  console.log(stats)

  return (
    <div className={s.statsContent}>
      <h1 className={s.title}>{todoName}</h1>
      <div className={s.splitWrapper}>
        {statsList.map((stat, i) => (
          <span key={i} className={s.splitItem}>
          {stat}
        </span>
        ))}
      </div>

    </div>
  )
}

