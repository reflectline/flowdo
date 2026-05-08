import { useBreadcrumbs } from '@/widgets/header/lib/useBreadcrumbs'
import type { Todolist } from '@/entities/todolist/lib/types'
import s from '@/widgets/todolists/ui/Todolists.module.scss'
import { TodolistItem } from '@/entities/todolist/ui/TodolistItem'
import { filterTodolists } from '@/features/todolist/filter-todolists/filterTodolists'
import { useTodolistsTasksStats } from '@/widgets/todolists/model/useTodolistsTasksStats'
import { emptyTodolistsMessages } from '@/shared/config/todolistsMessages'
import {ErrorPage} from '@/pages/error/ErrorPage'


export const Todolists = () => {
  const { todolists, isLoading } = useTodolistsTasksStats()
  const { currentBreadcrumb, activeFilter } = useBreadcrumbs()

  if (!activeFilter) return <ErrorPage />
  if (isLoading) return <div>Loading...</div>

  const filtered = filterTodolists(todolists, activeFilter)

  return (
    <div className={s.todolistsWrapper}>
      <h2 className={s.path}>{currentBreadcrumb.label}</h2>

      <div className={s.grid}>
        {filtered?.map((item: Todolist) => (
          <TodolistItem key={item.id} todolist={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={s.empty}>
          {emptyTodolistsMessages[activeFilter]}
        </p>
      )}

      {/*<Button variant="none">hello</Button>*/}
      {/*<Button variant="primary">hello</Button>*/}
      {/*<Button variant="secondary">hello</Button>*/}
      {/*<Button variant="solid">hello</Button>*/}
      {/*<Button variant="dashed">hello</Button>*/}
    </div>
  )
}
