import type { Task } from '@/entities/task/lib/task.types'
import { TaskItem } from '@/entities/task/ui/TaskItem'
import s from '@/widgets/tasks/ui/Tasks.module.scss'
import { TasksHeader } from '@/widgets/tasks/ui/TasksHeader'
import { emptyTasksMessages } from '@/shared/config/messages'
import { TASKS_PER_PAGE_15 } from '@/entities/task/config/task.constants'
import type {SelectedView} from '@/features/task/controls/lib/types'



type TasksTableType = {
  todolistId: string
  tasks: Task[]
  selectedViews: SelectedView[]
  page: number
}

export const TasksList = (props: TasksTableType) => {
  const { todolistId, tasks, selectedViews, page } = props

  const start = (page - 1) * TASKS_PER_PAGE_15
  const end = start + TASKS_PER_PAGE_15
  const visibleTasks = tasks.slice(start, end)

  return (
    <div className={s.tasksListWrapper}>
      <TasksHeader selectedViews={selectedViews} />
      <div className={s.list}>
        {visibleTasks?.map((task: Task, index: number) => {
          const isLast = index === visibleTasks.length - 1
          const isOnly = visibleTasks.length === 1

          return (
            <TaskItem
              key={task.id}
              todolistId={todolistId}
              task={task}
              number={start + index + 1}
              selectedViews={selectedViews}
              isLast={isLast}
              isOnly={isOnly}
            />
          )
        })}
        {tasks.length === 0 && <p className={s.empty}>{emptyTasksMessages['no-tasks']}</p>}
      </div>
    </div>
  )
}
