import { useRouteStateStrict } from '@/shared/lib/route/useRouteStateStrict'
import { useGetTasks } from '@/entities/task/api/task.queries'
import { useGetTodolist } from '@/entities/todolist/api/todolist.queries'
import { TasksStats } from '@/entities/task/ui/TasksStats'
import { ErrorPage } from '@/pages/error/ErrorPage'
import s from '@/pages/todolist/TodolistPage.module.scss'
import { Tasks } from '@/widgets/tasks/ui/Tasks'
import { useFilteredTasks } from '@/entities/task/lib/useFilteredTasks'
import { DEFAULT_TASKS_COUNT, DEFAULT_TASKS_PAGE } from '@/entities/task/config/task.constants'


export const TodolistPage = () => {
  const { activeFilter, todolistId } = useRouteStateStrict()
  const { data, isLoading: isLoadingTasks } = useGetTasks({ todolistId, page: DEFAULT_TASKS_PAGE, count: DEFAULT_TASKS_COUNT })
  const { data: todolist, isLoading: isLoadingTodolists } = useGetTodolist(todolistId)
  const  filteredTasks = useFilteredTasks(data?.tasks)



  if (isLoadingTasks || isLoadingTodolists) return <div>Loading...</div>
  if (!todolist || !todolistId || !activeFilter || !data) {
    return <ErrorPage />
  }



  return (
    <section className={s.page}>
      <div className={s.resizable}>
        <TasksStats todoName={todolist.title} stats={data.stats} />
        <Tasks todolistId={todolist.id} tasks={filteredTasks}/>
      </div>
    </section>
  )
}


