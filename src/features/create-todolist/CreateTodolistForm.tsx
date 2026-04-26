import { Input } from '@/shared/ui/Input/Input'
import s from '@/features/create-todolist/CreateTodolistForm.module.scss'

export const CreateTodolistForm = () => {
  return (
    <div className={s.wrapperCreateForm}>
      <p className={s.hint}>Type name</p>
      <div>
        <Input className={s.input} placeholder="Whant to by..." />

      </div>

    </div>
  )
}
