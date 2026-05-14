import type { Task } from '@/entities/task/lib/types'
import { TasksToolbar } from '@/widgets/tasks/ui/TasksToolbar'
import { TasksList } from '@/widgets/tasks/ui/TasksList'
import s from '@/widgets/tasks/ui/Tasks.module.scss'

type TasksType = {
  todolistId: string
  tasks: Task[]
}

export const Tasks = (props: TasksType) => {
  const { todolistId, tasks } = props

  return (
    <section className={s.tasksWrapper}>
      <TasksToolbar todolistId={todolistId} />
      <TasksList tasks={tasks}  />
    </section>
  )
}
