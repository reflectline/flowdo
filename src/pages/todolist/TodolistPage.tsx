import { useGetTasks } from '@/entities/task/api/task.queries'
import type {Task, TaskStats} from '@/entities/task/lib/types'
import {useRouteState} from '@/shared/lib/route/useRouteState';
import {ErrorPage} from '@/pages/error/ErrorPage';

export const TodolistPage = () => {
  const { activeFilter, todoName, todoId } = useRouteState()
  const { data } = useGetTasks(todoId)



  if (!activeFilter) {
    return <ErrorPage />
  }

  const tasks = data?.tasks as Task[]
  const stats = data?.stats as TaskStats


  return (
    <div>
      <div>
        {tasks?.map((task: Task) =>
          <div key={task.id}>{task.title}</div>

        )}
      </div>
      <h2>{todoName}</h2>
      <p>Filter: {activeFilter}</p>
      {/* отрисовка задач этого тудулиста */}
    </div>
  )
}
