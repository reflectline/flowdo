import s from '@/widgets/tasks/ui/Tasks.module.scss'
import icon from '@/shared/styles/icons.module.scss'
import { NotebookText } from 'lucide-react'
import {TitleSort} from '@/features/task/controls/sorts/TitleSort'


export const TasksHeader = () => {

  return (
    <div className={s.tasksHeaderWrapper}>

      <div className={s.numberWrapper}>
        <NotebookText className={icon.icon16} />
        <p>Task</p>
      </div>

      <div className={s.titleWrapper}>
        <TitleSort />
      </div>


    </div>
  )
}
