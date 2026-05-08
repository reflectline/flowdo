import type { Todolist } from '@/entities/todolist/lib/types'
import s from '@/entities/todolist/ui/Todolist.module.scss'
import { Link } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import { UpdateTodolistTitle } from '@/features/todolist/update-title/UpdateTodolistTitle'
import { DeleteTodolist } from '@/features/todolist/delete-todolist/DeleteTodolist'
import { motion } from 'framer-motion'
import { cards } from '@/shared/animation/transitions'
import { useGetTasks } from '@/entities/task/api/task.queries'
import { TodolistLastUpdate } from '@/entities/todolist/ui/TodolistLastUpdate'
import { TodolistStats } from '@/entities/todolist/ui/TodolistStats'
import { TodolistProgress } from '@/entities/todolist/ui/TodolistProgress'
import { useRouteState } from '@/shared/lib/route/useRouteState'
import {ErrorPage} from "@/pages/error/ErrorPage";

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
    <motion.div className={s.card} transition={cards} layout>
      <div className={s.content}>
        <div className={s.nameWrapper}>
          <UpdateTodolistTitle id={id} title={title} />
          <DeleteTodolist id={id} />
        </div>

        <div className={s.infoWrapper}>
          <TodolistLastUpdate latestDate={data.stats.latestDate} />

          <div className={s.statsWrapper}>
            <TodolistStats stats={data.stats} />
            <TodolistProgress percent={data.stats.percent} />
          </div>
        </div>
      </div>

      <Link className={s.linkArea} to={path.dashboard.todo(activeFilter, title, id)} />
    </motion.div>
  )
}
