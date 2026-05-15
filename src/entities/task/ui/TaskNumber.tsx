import { StickyNote } from 'lucide-react'
import icon from '@/shared/styles/icons.module.scss'

type TaskItemNumberType = {
  number: number
}

export const TaskNumber = (props: TaskItemNumberType) => {
  const { number } = props

  const formatTaskNumber = (n: number) => {
    return `TASK-${String(n).padStart(4, '0')}`
  }

  return (
    <>
      <StickyNote className={icon.icon14} />
      {formatTaskNumber(number)}
    </>
  )
}
