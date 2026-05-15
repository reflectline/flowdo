import { useBreadcrumbs } from '@/widgets/header/lib/useBreadcrumbs'
import s from '@/widgets/todolists/ui/Todolists.module.scss'
import { TodolistItem } from '@/entities/todolist/ui/TodolistItem'
import { filterTodolists, type TodolistWithStats } from '@/features/todolist/filter-todolists/filterTodolists'
import { useTodolistsTasksStats } from '@/widgets/todolists/model/useTodolistsTasksStats'
import { emptyTodolistsMessages } from '@/shared/config/messages'
import { ErrorPage } from '@/pages/error/ErrorPage'

export const Todolists = () => {
  const { todolists, isLoading } = useTodolistsTasksStats()
  const { currentBreadcrumb, activeFilter } = useBreadcrumbs()

  if (!activeFilter) return <ErrorPage />
  if (isLoading) return <div>Loading...</div>

  const filtered = filterTodolists(todolists, activeFilter)

  return (
    <section className={s.todolistsWrapper}>
      <h2 className={s.path}>{currentBreadcrumb.label}</h2>

      <div className={s.grid}>
        {filtered?.map((item: TodolistWithStats) => (
          <TodolistItem key={item.id} todolist={item} />
        ))}
      </div>
      {filtered.length === 0 && <p className={s.empty}>{emptyTodolistsMessages[activeFilter]}</p>}

    </section>
  )
}
