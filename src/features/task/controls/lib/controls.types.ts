export type FilterKey = 'status' | 'priority' | 'view'
export type SelectedView = 'title' | 'date' | 'status' | 'priority'
export type ViewFilterValue = 'title' | 'date' | 'status' | 'priority'
export type StatusFilterValue = 'in-process' | 'done'
export type PriorityFilterValue = 'low' | 'medium' | 'high' | 'urgently' | 'later'

export type Option<T extends string> = {
  value: T
  label: string
}

export type ContentType<T extends string> = {
  options: Option<T>[]
  selected: T[]
  onToggle: (value: T) => void
}

