import type { Task } from '@/entities/task/lib/task.types'
import s from '@/entities/task/ui/Task.module.scss'
import { TaskNumber } from '@/entities/task/ui/TaskNumber'
import { TaskTitle } from '@/features/task/actions/title-task/TaskTitle'

type TasksType = {
  task: Task
  number: number
}

export const TaskItem = (props: TasksType) => {
  const { task, number } = props
  return (
    <div className={s.tasksItemWrapper}>
      <div className={s.item}>

        <div className={s.taskItemNumber}>
          <TaskNumber number={number} />
        </div>

        <div className={s.taskItemTitle}>
          <TaskTitle title={task.title} />
        </div>


      </div>
    </div>
  )
}
