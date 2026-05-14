import { useForm } from 'react-hook-form'
import s from '@/features/task/actions/create-task/ui/CreateTask.module.scss'
import { Input } from '@/shared/ui/Input/Input'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCreateTask } from '@/entities/task/api/task.queries'
import {type CreateTaskInputType, createTaskSchema,} from '@/features/task/actions/create-task/lib/create-task.schema'

type CreateTaskFormType = {
  todolistId: string
}

export const CreateTaskForm = (props: CreateTaskFormType) => {
  const { todolistId } = props
  const { mutate: createTask } = useCreateTask()

  const form = useForm<CreateTaskInputType>({
    resolver: zodResolver(createTaskSchema),
    mode: 'onBlur',
  })

  const onSubmit = form.handleSubmit((data) => {
    (createTask({ todolistId: todolistId, title: data.title },
      {onSuccess:() => form.reset()}
    ))

  })

  return (
    <form className={s.form} id="create-task-form" onSubmit={onSubmit}>
      <Input placeholder={'Write task name...'} className={s.input} size={'sm'} textSize={'sm'} {...form.register('title')} />
    </form>
  )
}
