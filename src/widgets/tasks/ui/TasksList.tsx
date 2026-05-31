import type { Task } from '@/entities/task/lib/task.types'
import { TaskItem } from '@/entities/task/ui/TaskItem'
import s from '@/widgets/tasks/ui/Tasks.module.scss'
import { TasksHeader } from '@/widgets/tasks/ui/TasksHeader'
import { emptyTasksMessages } from '@/shared/config/messages'
import { MIN_ITEMS_WITHOUT_BOTTOM_BORDER } from '@/entities/task/config/task.constants'
import type { SelectedView } from '@/features/task/controls/lib/controls.types'
import type { SortField, SortOrder } from '@/features/task/controls/sorts/lib/sort.types'

type TasksTableType = {
  todolistId: string
  tasks: Task[]
  selectedViews: SelectedView[]
  sortField: SortField | null
  sortOrder: SortOrder | null
  setSort: (field: SortField) => void
  total: number
  start: number
  resizeHandleProps: { onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void }
}

export const TasksList = (props: TasksTableType) => {
  const { todolistId, tasks, selectedViews, sortField, sortOrder, setSort,total,  start , resizeHandleProps } = props


  return (
    <div className={s.tasksListWrapper}>

      <TasksHeader
        setSort={setSort}
        sortField={sortField}
        sortOrder={sortOrder}
        selectedViews={selectedViews}
      />

      <div className={s.list}>
        {tasks?.map((task: Task, index: number) => {
          const isLast = index === tasks.length - 1 && tasks.length > MIN_ITEMS_WITHOUT_BOTTOM_BORDER
          const isOnly = tasks.length === 1

          return (
            <TaskItem
              key={task.id}
              todolistId={todolistId}
              task={task}
              number={total - (start + index)}
              selectedViews={selectedViews}
              isLast={isLast}
              isOnly={isOnly}
            />
          )
        })}
        {tasks.length === 0 && <p className={s.emptyNoTasks}>{emptyTasksMessages['no-tasks']}</p>}
      </div>

      <div
        className={s.resizeHandle}
        {...resizeHandleProps}
      />
    </div>
  )
}
