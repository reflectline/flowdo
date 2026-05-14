import type { Task } from '@/entities/task/lib/types'


type TasksType = {
  task: Task
}

export const TasksItem = (props: TasksType) => {
  const { task } = props
  return (
    <div>
      {task.title}
    </div>
  )
}

// {tasks?.map((task: Task) => (
//   <div key={task.id}>{task.title}</div>
// ))}