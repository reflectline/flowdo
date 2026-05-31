import s from '@/widgets/tasks/ui/Tasks.module.scss'
import icon from '@/shared/styles/icons.module.scss'
import {  Layers } from 'lucide-react'
import { TitleSort } from '@/features/task/controls/sorts/TitleSort'
import { StatusSort } from '@/features/task/controls/sorts/StatusSort'
import { PrioritySort } from '@/features/task/controls/sorts/PrioritySort'
import { DateSort } from '@/features/task/controls/sorts/DateSort'
import type { SelectedView, } from '@/features/task/controls/lib/controls.types'
import type { SortField, SortOrder } from '@/features/task/controls/sorts/lib/sort.types'
import {getVisibleColumns} from '@/features/task/controls/lib/getVisibleColumns'



type TasksHeaderType = {
  setSort: (field: SortField, order: SortOrder) => void
  sortField: SortField | null
  sortOrder: SortOrder | null
  selectedViews: SelectedView[]
}

export const TasksHeader = (props: TasksHeaderType) => {
  const { setSort, sortField, sortOrder, selectedViews } = props

  const visibleColumns = getVisibleColumns(selectedViews)
  return (
    <div className={s.tasksHeaderWrapper}>
      <div className={s.numberWrapper}>
        <Layers className={icon.icon14} />
        <p>Task</p>
      </div>

      {visibleColumns.title && (
        <div className={s.titleWrapper}>
          <TitleSort
            field="title"
            selected={sortField === 'title' ? sortOrder : null}
            onSelect={setSort}
          />
        </div>
      )}

      {visibleColumns.date && (
        <div className={s.dateWrapper}>
          <DateSort
            field="date"
            selected={sortField === 'date' ? sortOrder : null}
            onSelect={setSort}
          />
        </div>
      )}

      {visibleColumns.status && (
        <div className={s.statusWrapper}>
          <StatusSort
            field="status"
            selected={sortField === 'status' ? sortOrder : null}
            onSelect={setSort}
          />
        </div>
      )}

      {visibleColumns.priority && (
        <div className={s.priorityWrapper}>
          <PrioritySort
            field="priority"
            selected={sortField === 'priority' ? sortOrder : null}
            onSelect={setSort}
          />
        </div>
      )}

      <div className={s.resetWrapper}>

      </div>

    </div>
  )
}
