import s from '@/widgets/tasks/ui/Tasks.module.scss'
import icon from '@/shared/styles/icons.module.scss'
import {  Layers } from 'lucide-react'
import { TitleSort } from '@/features/task/controls/sorts/TitleSort'
import { StatusSort } from '@/features/task/controls/sorts/StatusSort'
import { PrioritySort } from '@/features/task/controls/sorts/PrioritySort'
import { DateSort } from '@/features/task/controls/sorts/DateSort'

export const TasksHeader = () => {
  return (
    <div className={s.tasksHeaderWrapper}>
      <div className={s.numberWrapper}>
        <Layers className={icon.icon14} />
        <p>Task</p>
      </div>

      <div className={s.titleWrapper}>
        <TitleSort />
      </div>

      <div className={s.dateWrapper}>
        <DateSort />
      </div>

      <div className={s.dateWrapper}>
        <StatusSort />
      </div>

      <div className={s.priorityWrapper}>
        <PrioritySort />
      </div>
    </div>
  )
}
