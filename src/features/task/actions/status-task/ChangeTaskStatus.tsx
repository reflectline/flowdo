import type { Task } from '@/entities/task/lib/task.types'
import { Loader } from 'lucide-react'
import circleCheck from '@/shared/assets/icons/circleCheck.svg'
import { Popover } from '@/shared/ui/popover/Popover'
import { TaskStatus } from '@/shared/api/enums'
import { ActionContent } from '@/features/task/actions/action-content/ActionContent'
import { StatusBadge } from '@/shared/ui/status-badge/StatusBadge'

import { useUpdateTask } from '@/entities/task/api/task.queries'
import { createTaskModel } from '@/features/task/actions/lib/createTaskModel'

type ChangeTaskStatusType = {
  todolistId: string
  task: Task
}

export const ChangeTaskStatus = (props: ChangeTaskStatusType) => {
  const { todolistId, task } = props
  const { mutate: updateTask } = useUpdateTask()
  // const [isCompleted, setIsCompleted] = useState(task.status === TaskStatus.Completed)

  const isCompleted = task.status === TaskStatus.Completed

  const changeTaskStatusHandler = () => {
    const nextStatus = isCompleted ? TaskStatus.InProcess : TaskStatus.Completed
    updateTask({
      todolistId: todolistId,
      taskId: task.id,
      model: createTaskModel(task, { status: nextStatus }),
    })
  }

  return (
    <Popover
      disabled
      trigger={
        <StatusBadge variant={isCompleted ? 'done' : 'process'} onClick={changeTaskStatusHandler}>
          {isCompleted ? <img src={circleCheck} alt="circleCheck" /> : <Loader />}
          {isCompleted ? 'Done' : 'In Process'}
        </StatusBadge>
      }
    >
      <ActionContent />
    </Popover>
  )
}
