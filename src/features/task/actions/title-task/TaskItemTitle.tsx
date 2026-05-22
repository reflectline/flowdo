import { EditableSpan } from '@/shared/ui/editable/EditableSpan'
import {useUpdateTask} from '@/entities/task/api/task.queries'
import {createTaskModel} from '@/features/task/actions/lib/createTaskModel'
import type {Task} from '@/entities/task/lib/task.types'

type TaskItemTitleType = {
  todolistId: string
  task: Task
}
export const TaskItemTitle = (props: TaskItemTitleType) => {
  const { todolistId, task } = props
  const { mutate: updateTask } = useUpdateTask()

  const handleSubmit = (newTitle: string) => {
    updateTask({
      todolistId: todolistId,
      taskId: task.id,
      model: createTaskModel(task, { title: newTitle }),
    })
  }

  return <EditableSpan variant={'task'} size={'sm'} title={task.title} onSubmit={handleSubmit} />
}
