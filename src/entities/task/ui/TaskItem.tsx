import type { Task } from '@/entities/task/lib/task.types'
import s from '@/entities/task/ui/Task.module.scss'
import { TaskItemNumber } from '@/entities/task/ui/TaskItemNumber'
import { TaskItemTitle } from '@/features/task/actions/title-task/TaskItemTitle'
import { TaskItemDate } from '@/entities/task/ui/TaskItemDate'
import { ChangeTaskStatus } from '@/features/task/actions/status-task/ChangeTaskStatus'
import { ChangeTaskPriority } from '@/features/task/actions/priority-task/ChangeTaskPriority'
import { MenuTask } from '@/features/task/actions/menu-task/MenuTask'

type TasksType = {
  todolistId: string
  task: Task
  number: number
}

export const TaskItem = (props: TasksType) => {
  const { todolistId, task, number } = props

  return (
    <div className={s.tasksItemWrapper}>
      <div className={s.item}>
        <div className={s.taskItemNumber}>
          <TaskItemNumber number={number} />
        </div>

        <div className={s.taskItemTitle}>
          <TaskItemTitle todolistId={todolistId} task={task} />
        </div>

        <div className={s.taskItemDate}>
          <TaskItemDate date={task.addedDate} />
        </div>

        <div className={s.taskItemStatus}>
          <ChangeTaskStatus todolistId={todolistId} task={task} />
        </div>

        <div className={s.taskItemPriority}>
          <ChangeTaskPriority todolistId={todolistId} task={task} />
        </div>

        <div className={s.taskItemDelete}>
          <MenuTask todolistId={todolistId} taskId={task.id} />
        </div>
      </div>
    </div>
  )
}
