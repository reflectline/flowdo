import type {Task} from "@/entities/task/lib/types.ts";

export const Tasks = () => {

  return (
    <div>
      {tasks?.map((task: Task) =>
        <div key={task.id}>{task.title}</div>

      )}
    </div>
  )
}