import icon from '@/shared/styles/icons.module.scss'
import { Trash } from 'lucide-react'
import {useDeleteTodolist} from '@/entities/todolist/api/todolist.queries'
import {IconButton} from '@/shared/ui/icon-button/IconButton'


type DeleteTodolistType ={
  id: string,
}

export const DeleteTodolist = (props: DeleteTodolistType)=> {
  const { id } = props;
  const { mutate: deleteTodolist } = useDeleteTodolist()

  const handleSubmit = () => {
    deleteTodolist({ id })
  }

  return(
    <IconButton icon={<Trash className={icon.deleteHover}/>} size={'lg'} onClick={handleSubmit}/>
  )
}