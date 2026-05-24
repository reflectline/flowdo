import type { Task } from '@/entities/task/lib/task.types'
import { TasksToolbar } from '@/widgets/tasks/ui/TasksToolbar'
import { TasksList } from '@/widgets/tasks/ui/TasksList'
import s from '@/widgets/tasks/ui/Tasks.module.scss'
import {useTasksFilters} from '@/shared/lib/hooks/useTasksFilters'


type TasksType = {
  todolistId: string
  tasks: Task[]
  page: number
  onPageChange: (page: number) => void
}

export const Tasks = (props: TasksType) => {
  const { todolistId, tasks, page } = props
  const { selectedViews } = useTasksFilters()

  return (
    <section className={s.tasksWrapper}>
      <TasksToolbar todolistId={todolistId} />
      <TasksList todolistId={todolistId} tasks={tasks} selectedViews={selectedViews} page={page} />
    </section>
  )
}

