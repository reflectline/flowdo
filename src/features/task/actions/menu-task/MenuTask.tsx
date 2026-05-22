import { useDeleteTask } from '@/entities/task/api/task.queries'
import { Ellipsis } from 'lucide-react'
import s from '@/entities/task/ui/Task.module.scss'
import { Popover } from '@/shared/ui/popover/Popover'
import { MenuBadge } from '@/shared/ui/badges/MenuBadge'
import {MenuContent} from '@/features/task/actions/menu-task/menu-content/MenuContent'
import type {KeyboardEvent} from 'react'



type MenuTaskType = {
  todolistId: string
  taskId: string
}
export type menuOptionsType = {
  value: string
  label: string
}

export const MenuTask = (props: MenuTaskType) => {
  const { todolistId, taskId } = props
  const { mutate: deleteTask } = useDeleteTask()

  const menuOptions: menuOptionsType[] = [
    { value: 'copy', label: 'Make a copy' },
    { value: 'delete', label: 'Delete' },
  ] as const

  const onClickHandler = (value: string) => {
    if (value==='delete') deleteTask({ todolistId, taskId })
    if (value==='copy') console.log('copy')
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) =>{
    if (e.key === 'Delete') {
      onClickHandler('delete')
    }
  }

  return (
    <Popover
      position={'absolute'}
      align={'left'}
      trigger={
        <MenuBadge>
          <Ellipsis className={s.taskItemDeleteIco} />
        </MenuBadge>
      }
    >
      <MenuContent options={menuOptions} onClick={onClickHandler} onKeyDownHandler={onKeyDownHandler}/>
    </Popover>
  )
}
