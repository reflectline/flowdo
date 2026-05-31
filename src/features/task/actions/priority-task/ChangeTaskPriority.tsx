import type { Task } from '@/entities/task/lib/task.types'
import { Popover } from '@/shared/ui/popover/Popover'
import { TaskPriority } from '@/shared/api/enums'
import { PriorityContent } from '@/features/task/actions/priority-task/priority-content/PriorityContent'
import { useUpdateTask } from '@/entities/task/api/task.queries'
import { createTaskModel } from '@/features/task/actions/lib/createTaskModel'
import { PriorityBadge } from '@/shared/ui/badges/PriorityBadge'

type ChangeTaskStatusType = {
  todolistId: string
  task: Task
}
export type priorityOptions = {
  value: TaskPriority
  label: string
  variant: string
}

export const ChangeTaskPriority = (props: ChangeTaskStatusType) => {
  const { todolistId, task } = props
  const { mutate: updateTask } = useUpdateTask()

  const priorityOptions = [
    { value: TaskPriority.Low, label: 'Low', variant: 'low' },
    { value: TaskPriority.Middle, label: 'Medium', variant: 'medium' },
    { value: TaskPriority.High, label: 'High', variant: 'high' },
    { value: TaskPriority.Urgently, label: 'Urgently', variant: 'urgently' },
    { value: TaskPriority.Later, label: 'Later', variant: 'later' },
  ] as const

  const currentPriority = priorityOptions.find((option) => option.value === task.priority)
  if (!currentPriority) return null

  const changeTaskStatusHandler = (priority: TaskPriority) => {
    updateTask({
      todolistId: todolistId,
      taskId: task.id,
      model: createTaskModel(task, { priority }),
    })
  }

  return (
    <Popover trigger={
      <PriorityBadge variant={currentPriority.variant}>
        {currentPriority.label}
      </PriorityBadge>}>

      {(close) => (
        <PriorityContent
          options={priorityOptions}
          selected={currentPriority.value}
          onToggle={(value) => {
            changeTaskStatusHandler(value)
            close()
          }}
        />
      )}
    </Popover>
  )
}
