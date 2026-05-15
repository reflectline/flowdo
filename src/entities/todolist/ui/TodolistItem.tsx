import s from '@/entities/todolist/ui/Todolist.module.scss'
import { Link } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import { TodolistTitle } from '@/features/todolist/title-todolist/TodolistTitle'
import { DeleteTodolist } from '@/features/todolist/delete-todolist/DeleteTodolist'
import { motion } from 'framer-motion'
import { cards } from '@/shared/animation/transitions'
import { LastUpdate } from '@/shared/ui/statistics/last-update/LastUpdate'
import { TodolistStats } from '@/entities/todolist/ui/TodolistStats'
import {ProgressBar} from '@/shared/ui/statistics/progress-bar/ProgressBar'
import type {TodolistWithStats} from '@/features/todolist/filter-todolists/filterTodolists'
import {useDashboardFilterStrict} from '@/shared/lib/route/useDashboardFilterStrict'

type TodolistPropsType = {
   todolist: TodolistWithStats
}

export const TodolistItem = (props: TodolistPropsType) => {
  const { todolist } = props
  const { activeFilter } = useDashboardFilterStrict()


  return (
    <motion.div className={s.card} transition={cards} layout data-card>
      <div className={s.content}>
        <div className={s.nameWrapper} >
          <TodolistTitle id={todolist.id} title={todolist.title} />
          <DeleteTodolist id={todolist.id} />
        </div>

        <div className={s.infoWrapper}>
          <LastUpdate latestDate={todolist.stats.latestDate} />

          <div className={s.statsWrapper}>
            <TodolistStats stats={todolist.stats} />
            <ProgressBar percent={todolist.stats.percent} />
          </div>
        </div>
      </div>

      <Link className={s.linkArea} to={path.dashboard.todo(activeFilter, todolist.id)} />
    </motion.div>
  )
}