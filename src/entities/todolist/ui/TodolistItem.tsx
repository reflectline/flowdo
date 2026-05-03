import type { Todolist } from '@/entities/todolist/lib/types'
import s from '@/entities/todolist/ui/Todolist.module.scss'
import { Link, useParams } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import type { DashboardFilter } from '@/app/providers/router/lib/path.schema'
import { UpdateTodolistTitle } from '@/features/todolist/update-title/UpdateTodolistTitle'
import { DeleteTodolist } from '@/features/todolist/delete-todolist/DeleteTodolist'

type TodolistPropsType = {
  todolist: Todolist
}

export const TodolistItem = (props: TodolistPropsType) => {
  const { id, title } = props.todolist
  const { filter = 'all-lists' } = useParams<{ filter: DashboardFilter }>()

  return (
    <div className={s.card}>
      <div className={s.content}>
        <div className={s.nameWrapper}>
          <UpdateTodolistTitle id={id} title={title} />
          <DeleteTodolist id={id} />
        </div>

        <p>last update 2 days ago.</p>
      </div>

      <Link className={s.linkArea} to={path.dashboard.todo(filter, title)} />
    </div>
  )
}
