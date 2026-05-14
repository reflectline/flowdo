import type { TaskStats } from '@/entities/task/lib/types'
import s from '@/entities/task/ui/Task.module.scss'
import { LastUpdate } from '@/shared/ui/statistics/last-update/LastUpdate'
import { ProgressBar } from '@/shared/ui/statistics/progress-bar/ProgressBar'

type TasksStatsType = {
  todoName: string
  stats: TaskStats
}

export const TasksStats = (props: TasksStatsType) => {
  const { todoName, stats } = props

  const total = stats.total === 1 ? '1 task' : `${stats.total} tasks`
  const completed = `${stats.completed} completed`
  const remaining = `${stats.total - stats.completed} remaining`
  const percent = stats.percent
  const statsList = [total, completed, remaining]

  return (
    <section className={s.statsContent}>

      <div className={s.introWrapper}>
        <h1 className={s.title}>{todoName}</h1>
        <div className={s.splitWrapper}>
          {statsList.map((stat, i) => (
            <span key={i} className={s.splitItem}>
              {stat}
            </span>
          ))}
        </div>
        <LastUpdate className={s.lastUpdate} latestDate={stats.latestDate} />
      </div>


      <ProgressBar variant='secondary' percent={percent} />
    </section>
  )
}
