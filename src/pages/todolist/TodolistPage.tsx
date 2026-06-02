import { useRouteStateStrict } from '@/shared/lib/route/useRouteStateStrict'
import { useGetTasks } from '@/entities/task/api/task.queries'
import { useGetTodolist } from '@/entities/todolist/api/todolist.queries'
import { TasksStats } from '@/entities/task/ui/TasksStats'
import { ErrorPage } from '@/pages/error/ErrorPage'
import s from '@/pages/todolist/TodolistPage.module.scss'
import { Tasks } from '@/widgets/tasks/ui/Tasks'
import { useFilteredTasks } from '@/entities/task/lib/useFilteredTasks'
import { DEFAULT_TASKS_COUNT, DEFAULT_TASKS_PAGE } from '@/entities/task/config/task.constants'
import { useResizable } from '@/shared/lib/hooks/useResizable'
import {TasksStatsSkeleton} from '@/shared/ui/skeleton/TasksStatsSkeleton'
import {TasksSkeleton} from '@/shared/ui/skeleton/TasksSkeleton'

export const TodolistPage = () => {
  const { activeFilter, todolistId } = useRouteStateStrict()
  const { data, isLoading: isLoadingTasks } = useGetTasks({
    todolistId,
    page: DEFAULT_TASKS_PAGE,
    count: DEFAULT_TASKS_COUNT,
  })
  const { data: todolist, isLoading: isLoadingTodolists } = useGetTodolist(todolistId)
  const filteredTasks = useFilteredTasks(data?.tasks)
  const { containerRef, containerStyle, resizeHandleProps } = useResizable()




  if (isLoadingTasks || isLoadingTodolists) {
    return (
      <section className={s.page}>
        <div ref={containerRef} className={s.resizable} style={containerStyle}>
          <TasksStatsSkeleton />
          <TasksSkeleton />
        </div>
      </section>
    )
  }

  if (!activeFilter || !todolist || !data) return <ErrorPage />


  return (
    <section className={s.page}>
      <div ref={containerRef} className={s.resizable} style={containerStyle}>
        <TasksStats todoName={todolist.title} stats={data.stats} />
        <Tasks todolistId={todolist.id} tasks={filteredTasks}  resizeHandleProps={resizeHandleProps}/>
      </div>
    </section>
  )
}
