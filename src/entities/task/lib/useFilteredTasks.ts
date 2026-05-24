import type {Task} from '@/entities/task/lib/task.types'
import {useTasksFilters} from '@/shared/lib/hooks/useTasksFilters'
import { TaskPriority, TaskStatus } from '@/shared/api/enums'


export const useFilteredTasks = (tasks: Task[] = [] ) => {
  const {selectedStatuses, selectedPriorities} = useTasksFilters()


  const statusMap:  Record<string, TaskStatus[]> = {
    'in-process': [TaskStatus.New, TaskStatus.InProcess],
    'done': [TaskStatus.Completed, TaskStatus.Draft],
  } as const

  const priorityMap:  Record<string, TaskPriority> = {
    'low': TaskPriority.Low,
    'medium': TaskPriority.Middle,
    'high': TaskPriority.High,
    'urgently': TaskPriority.Urgently,
    'later': TaskPriority.Later,
  } as const


  return tasks.filter(task => {
    const statusMatch = !selectedStatuses.length ||
      selectedStatuses.some(status =>  statusMap[status]?.includes(task.status))

    const priorityMatch = !selectedPriorities.length ||
      selectedPriorities.some(priority => task.priority === priorityMap[priority])

    return statusMatch && priorityMatch
  })


}