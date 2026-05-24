import { useRouteStateStrict } from '@/shared/lib/route/useRouteStateStrict'
import { useGetTasks } from '@/entities/task/api/task.queries'
import { useGetTodolist } from '@/entities/todolist/api/todolist.queries'
import { TasksStats } from '@/entities/task/ui/TasksStats'
import { ErrorPage } from '@/pages/error/ErrorPage'
import s from '@/pages/todolist/TodolistPage.module.scss'
import { Tasks } from '@/widgets/tasks/ui/Tasks'
import { useFilteredTasks } from '@/entities/task/lib/useFilteredTasks'
import { useState } from 'react'
import { DEFAULT_TASKS_PAGE, TASKS_PER_PAGE_15 } from '@/entities/task/config/task.constants'


export const TodolistPage = () => {
  const { activeFilter, todolistId } = useRouteStateStrict()
  const { data, isLoading: isLoadingTasks } = useGetTasks({ todolistId, page: DEFAULT_TASKS_PAGE, count: TASKS_PER_PAGE_15 })
  const { data: todolist, isLoading: isLoadingTodolists } = useGetTodolist(todolistId)
  const  filteredTasks = useFilteredTasks(data?.tasks)
  const [page, setPage] = useState(1)


  if (isLoadingTasks || isLoadingTodolists) return <div>Loading...</div>
  if (!todolist || !todolistId || !activeFilter || !data) {
    return <ErrorPage />
  }



  return (
    <section className={s.page}>
      <div className={s.resizable}>
        <TasksStats todoName={todolist.title} stats={data.stats} />
        <Tasks todolistId={todolist.id} tasks={filteredTasks} page={page} onPageChange={setPage}/>
      </div>
    </section>
  )
}


