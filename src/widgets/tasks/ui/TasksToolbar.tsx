import s from '@/widgets/tasks/ui/Tasks.module.scss'
import { CreateTaskForm } from '@/features/task/actions/create-task/ui/CreateTaskForm'
import { StatusFilter } from '@/features/task/controls/filters/StatusFilter'
import { PriorityFilter } from '@/features/task/controls/filters/PriorityFilter'
import { ViewSettings } from '@/features/task/controls/settings/ViewSettings'
import { AddTaskBottom } from '@/features/task/actions/create-task/ui/AddTaskBottom'

type TasksToolbarType = {
  todolistId: string
}

export const TasksToolbar = (props: TasksToolbarType) => {
  const { todolistId } = props

  return (
    <div className={s.toolbar}>
      <div className={s.left}>
        <CreateTaskForm todolistId={todolistId} />
        <div className={s.filterWrapper}>
          <StatusFilter />
          <PriorityFilter />
        </div>
      </div>

      <div className={s.right}>
        <ViewSettings />
        <AddTaskBottom />
      </div>
    </div>
  )
}
