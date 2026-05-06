import s from '@/entities/todolist/ui/Todolist.module.scss'

type TodolistProgressType = {
  percent: number
}

export const TodolistProgress = (props: TodolistProgressType ) => {
  const { percent } = props

  return (
    <div className={s.progressBar}>
      <div className={s.progressFill} style={{width: `${percent}%`}}></div>
    </div>
  )
}