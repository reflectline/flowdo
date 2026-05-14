import type { Todolist } from '@/entities/todolist/lib/types'
import s from '@/entities/todolist/ui/Todolist.module.scss'
import { Link } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import { UpdateTodolistTitle } from '@/features/todolist/update-title/UpdateTodolistTitle'
import { DeleteTodolist } from '@/features/todolist/delete-todolist/DeleteTodolist'
import { motion } from 'framer-motion'
import { cards } from '@/shared/animation/transitions'
import { useGetTasks } from '@/entities/task/api/task.queries'
import { LastUpdate } from '@/shared/ui/statistics/last-update/LastUpdate'
import { TodolistStats } from '@/entities/todolist/ui/TodolistStats'
import { useRouteState } from '@/shared/lib/route/useRouteState'
import {ErrorPage} from '@/pages/error/ErrorPage'
import {ProgressBar} from '@/shared/ui/statistics/progress-bar/ProgressBar'

type TodolistPropsType = {
  todolist: Todolist
}

export const TodolistItem = (props: TodolistPropsType) => {
  const { id, title } = props.todolist
  const { activeFilter } = useRouteState()
  const { data } = useGetTasks(id)

  if (!activeFilter) return <ErrorPage />
  if (!data) return <>loading...</>



  return (
    <motion.div className={s.card} transition={cards} layout data-card>
      <div className={s.content}>
        <div className={s.nameWrapper} >
          <UpdateTodolistTitle id={id} title={title} />
          <DeleteTodolist id={id} />
        </div>

        <div className={s.infoWrapper}>
          <LastUpdate latestDate={data.stats.latestDate} />

          <div className={s.statsWrapper}>
            <TodolistStats stats={data.stats} />
            <ProgressBar percent={data.stats.percent} />
          </div>
        </div>
      </div>

      <Link className={s.linkArea} to={path.dashboard.todo(activeFilter, id)} />
    </motion.div>
  )
}
