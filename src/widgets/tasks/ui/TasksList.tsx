import type { Task } from '@/entities/task/lib/task.types'
import { TaskItem } from '@/entities/task/ui/TaskItem'
import s from '@/widgets/tasks/ui/Tasks.module.scss'
import { TasksHeader } from '@/widgets/tasks/ui/TasksHeader'
import { emptyTasksMessages } from '@/shared/config/messages'
import {TASKS_PER_PAGE} from '@/entities/task/config/task.constants'

type TasksTableType = {
  todolistId: string
  tasks: Task[]
  page: number
}

export const TasksList = (props: TasksTableType) => {
  const { todolistId, tasks, page } = props



  const start = (page - 1) * TASKS_PER_PAGE
  const end = start + TASKS_PER_PAGE
  const visibleTasks = tasks.slice(start, end)



  return (
    <div className={s.tasksListWrapper}>
      <TasksHeader />
      <div>
        {visibleTasks?.map((task: Task, index: number) => (
          <TaskItem
            key={task.id}
            todolistId={todolistId}
            task={task}
            number={start + index + 1}
          />
        ))}
        {tasks.length === 0 && <p className={s.empty}>{emptyTasksMessages['no-tasks']}</p>}
      </div>
    </div>
  )
}
