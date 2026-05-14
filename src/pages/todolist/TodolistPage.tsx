import { useRouteStateStrict } from '@/shared/lib/route/useRouteStateStrict'
import { useGetTasks } from '@/entities/task/api/task.queries'
import { useGetTodolist } from '@/entities/todolist/api/todolist.queries'
import { TasksStats } from '@/entities/task/ui/TasksStats'
import { ErrorPage } from '@/pages/error/ErrorPage'
import s from '@/pages/todolist/TodolistPage.module.scss'
import { Tasks } from '@/widgets/tasks/ui/Tasks'
import { useFilteredTasks } from '@/entities/task/lib/useFilteredTasks'

export const TodolistPage = () => {
  const { activeFilter, todolistId } = useRouteStateStrict()
  const { data, isLoading: isLoadingTasks } = useGetTasks(todolistId)
  const { data: todolist, isLoading: isLoadingTodolists } = useGetTodolist(todolistId)
  const filteredTasks = useFilteredTasks(data?.tasks)

  if (isLoadingTasks || isLoadingTodolists) return <div>Loading...</div>
  if (!todolist || !todolistId || !activeFilter || !data?.stats) {
    return <ErrorPage />
  }

  const stats = data.stats

  return (
    <section className={s.page}>
      <div className={s.resizable}>
        <TasksStats todoName={todolist.title} stats={stats} />
        <Tasks todolistId={todolist.id} tasks={filteredTasks} />
      </div>
    </section>
  )
}
