import type { Task } from '@/entities/task/lib/task.types'
import { Dot } from 'lucide-react'
import { Popover } from '@/shared/ui/popover/Popover'
import { TaskPriority } from '@/shared/api/enums'
import { ActionContent } from '@/features/task/actions/action-content/ActionContent'
import { StatusBadge } from '@/shared/ui/status-badge/StatusBadge'
import { useUpdateTask } from '@/entities/task/api/task.queries'
import { createTaskModel } from '@/features/task/actions/lib/createTaskModel'

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
    <Popover
      trigger={
        <StatusBadge variant={currentPriority.variant}>
          <Dot style={{ transform: 'scale(3)' }} />
          {currentPriority.label}
        </StatusBadge>
      }
    >
      <ActionContent options={priorityOptions} selected={currentPriority.value} onToggle={changeTaskStatusHandler} />
    </Popover>
  )
}
