import { useGetTasks } from '@/entities/task/api/task.queries'
import { TasksStats } from '@/entities/task/ui/TasksStats'
import { ErrorPage } from '@/pages/error/ErrorPage'
import { useRouteStateStrict } from '@/shared/lib/route/useRouteStateStrict'
import s from '@/entities/task/ui/Tasks.module.scss'

export const TodolistPage = () => {
  const { activeFilter, todoName, todoId } = useRouteStateStrict()
  const { data, isLoading } = useGetTasks(todoId)

  if (!activeFilter || !todoName || !todoId || !data) {
    return <ErrorPage />
  }
  if (isLoading) return <div>Loading...</div>


  // const tasks = data?.tasks
  const stats = data?.stats

  return (
    <section className={s.page}>
      <TasksStats todoName={todoName} stats={stats} />
      {/*<Tasks tasks={tasks}/>*/}
    </section>
  )
}
