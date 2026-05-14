import type {Task} from '@/entities/task/lib/types'
import {TasksItem} from '@/entities/task/ui/TasksItem'
import s from '@/widgets/tasks/ui/Tasks.module.scss'
import {TasksHeader} from '@/widgets/tasks/ui/TasksHeader';


type TasksTableType = {
  tasks: Task[]
}


export const TasksList = (props: TasksTableType) => {
  const {tasks} = props;

  return (
    <div className={s.tasksListWrapper}>
      <TasksHeader/>
      <div>
        {tasks?.map((task: Task) => (
          <TasksItem key={task.id}  task={task}/>
        ))}
        {/*{filtered.length === 0 && <p className={s.empty}>{emptyTodolistsMessages[activeFilter]}</p>}*/}
      </div>
    </div>

  )
}