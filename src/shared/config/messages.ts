import type {DashboardFilter} from '@/app/providers/router/lib/path.schema'

export const emptyTodolistsMessages: Record<DashboardFilter, string> = {
  'all-lists': 'No todolists yet.',
  'today': 'Nothing scheduled for today.',
  'in-process': 'No active todolists right now.',
  'done': 'Unfortunately, there are no completed todolists yet.',
}

export const emptyTasksMessages = {
  'no-tasks': 'No tasks yet.',
}