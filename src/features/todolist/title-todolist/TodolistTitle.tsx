import {EditableSpan} from '@/shared/ui/editable/EditableSpan'
import {useUpdateTodolistTitle} from '@/entities/todolist/api/todolist.queries';

type TodolistTitleType = {
  id: string,
  title?: string
  className?: string
}

export const TodolistTitle = (props: TodolistTitleType) => {
  const { id, title } = props
  const { mutate: updateTodolistTitle } = useUpdateTodolistTitle()

  const handleSubmit = (newTitle: string)=> {
    updateTodolistTitle({ id, title: newTitle })
    console.log(newTitle)
  }
  return (
      <EditableSpan  title={title} onSubmit={handleSubmit}/>
  )
}