import type { Task } from '@/entities/task/lib/task.types'
import { TasksToolbar } from '@/widgets/tasks/ui/TasksToolbar'
import { TasksList } from '@/widgets/tasks/ui/TasksList'
import s from '@/widgets/tasks/ui/Tasks.module.scss'
import { useTasksFilters } from '@/shared/lib/hooks/useTasksFilters'
import { Pagination } from '@/features/task/controls/pagination/Pagination'
import { useTasksTable } from '@/entities/task/lib/useTasksTable'

type TasksType = {
  todolistId: string
  tasks: Task[]
  resizeHandleProps: { onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void }
}

export const Tasks = (props: TasksType) => {
  const { todolistId, tasks, resizeHandleProps } = props
  const { selectedViews } = useTasksFilters()
  const {tasks: tableTasks, sorting, pagination} = useTasksTable(tasks)

  return (
    <section className={s.tasksWrapper}>
      <div className={s.content}>
        <TasksToolbar todolistId={todolistId} />
        <TasksList
          todolistId={todolistId}
          tasks={tableTasks.visibleTasks}
          selectedViews={selectedViews}
          sortField={sorting.sortField}
          sortOrder={sorting.sortOrder}
          setSort={sorting.setSort}
          total={tableTasks.total}
          start={tableTasks.rowNumberStart}
          resizeHandleProps={resizeHandleProps}
        />
      </div>

      <Pagination
        page={pagination.page}
        setPage={pagination.setPage}
        pageSize={pagination.pageSize}
        setPageSize={pagination.setPageSize}
        total={tableTasks.total}
        totalPages={pagination.totalPages}
      />
    </section>
  )
}
