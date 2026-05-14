export type FilterKey = 'status' | 'priority' | 'view'

export type FilterValue = string

export type FilterContentType = {
  options: {
    value: string
    label: string
  }[]
  selected: string[]
  onToggle?: (value: string) => void
}




