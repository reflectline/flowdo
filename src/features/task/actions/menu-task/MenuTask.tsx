import { useCreateTask, useDeleteTask } from '@/entities/task/api/task.queries'
import { Ellipsis } from 'lucide-react'
import s from '@/entities/task/ui/Task.module.scss'
import { Popover } from '@/shared/ui/popover/Popover'
import { MenuBadge } from '@/shared/ui/badges/MenuBadge'
import {MenuContent} from '@/features/task/actions/menu-task/menu-content/MenuContent'
import type {KeyboardEvent} from 'react'



type MenuTaskType = {
  todolistId: string
  taskId: string
  taskTitle: string
}
export type menuOptionsType = {
  value: string
  label: string
}

export const MenuTask = (props: MenuTaskType) => {
  const { todolistId, taskId, taskTitle } = props
  const { mutate: createTask } = useCreateTask()
  const { mutate: deleteTask } = useDeleteTask()

  const menuOptions: menuOptionsType[] = [
    { value: 'copy', label: 'Make a copy' },
    { value: 'delete', label: 'Delete' },
  ] as const

  const onClickHandler = (value: string) => {
    if (value==='delete') deleteTask({ todolistId, taskId })
    if (value==='copy') createTask({ todolistId: todolistId, title: taskTitle })
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) =>{
    if (e.key === 'Delete') {
      onClickHandler('delete')
    }
  }

  return (
    <Popover
      align={'left'}
      trigger={
        <MenuBadge>
          <Ellipsis className={s.taskItemDeleteIco} />
        </MenuBadge>
      }
    >
      {(close) => (
        <MenuContent
          options={menuOptions}
          onClick={(value) => {
            onClickHandler(value)
            close()
          }}
          onKeyDownHandler={(value) => {
            onKeyDownHandler(value)
            close()
          }}
        />
      )}
    </Popover>
  )
}
