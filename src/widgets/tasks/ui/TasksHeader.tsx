import s from '@/widgets/tasks/ui/Tasks.module.scss'
import icon from '@/shared/styles/icons.module.scss'
import {  Layers } from 'lucide-react'
import { TitleSort } from '@/features/task/controls/sorts/TitleSort'
import { StatusSort } from '@/features/task/controls/sorts/StatusSort'
import { PrioritySort } from '@/features/task/controls/sorts/PrioritySort'
import { DateSort } from '@/features/task/controls/sorts/DateSort'
import type { SelectedView } from '@/features/task/controls/lib/types'
import {getVisibleColumns} from '@/features/task/controls/lib/getVisibleColumns'


type TasksHeaderType = {
  selectedViews: SelectedView[]
}

export const TasksHeader = (props: TasksHeaderType) => {
  const { selectedViews } = props
  const visibleColumns = getVisibleColumns(selectedViews)

  return (
    <div className={s.tasksHeaderWrapper}>
      <div className={s.numberWrapper}>
        <Layers className={icon.icon14} />
        <p>Task</p>
      </div>

      {visibleColumns.title && (
        <div className={s.titleWrapper}>
          <TitleSort />
        </div>
      )}

      {visibleColumns.date && (
        <div className={s.dateWrapper}>
          <DateSort />
        </div>
      )}

      {visibleColumns.status && (
        <div className={s.statusWrapper}>
          <StatusSort />
        </div>
      )}

      {visibleColumns.priority && (
        <div className={s.priorityWrapper}>
          <PrioritySort />
        </div>
      )}

      <div className={s.empty}/>
    </div>
  )
}
