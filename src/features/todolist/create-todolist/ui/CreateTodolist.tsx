import { Input } from '@/shared/ui/Input/Input'
import s from '@/features/todolist/create-todolist/ui/CreateTodolist.module.scss'
import { Button } from '@/shared/ui/button/Button'
import circlePlus from '@/shared/assets/icons/circlePlus.svg'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createTodolistSchema } from '@/features/todolist/create-todolist/lib/create-todolist.schema'
import type { CreateTodolistInputType } from '@/features/todolist/create-todolist/lib/create-todolist.schema'

import { useCreateTodolist } from '@/entities/todolist/api/todolist.queries'

export const CreateTodolist = () => {
  const { mutate: createTodolist } = useCreateTodolist()

  const form = useForm<CreateTodolistInputType>({
    resolver: zodResolver(createTodolistSchema),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<CreateTodolistInputType> = (data) => {
    createTodolist({title: data.title}, { onSuccess: () => form.reset() })
  }

  return (
    <form className={s.wrapperCreateForm} onSubmit={form.handleSubmit(onSubmit)}>
      <p className={s.hint}>Type name</p>

      <div className={s.wrapperInteractive}>
        <Input className={s.input} placeholder="Want to by..." {...form.register('title')} />
        <Button variant="primary" type="submit">
          <img src={circlePlus} alt="circlePlus" />
          Add List
        </Button>
      </div>
    </form>
  )
}
