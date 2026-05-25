

export type SortField =  'title' | 'date' | 'status' | 'priority'
export type SortOrder = 'asc' | 'desc'
export type SortAction = SortOrder| 'hide'


export type SortOption = {
  value: SortAction
  label: string
}


export type SortContentType = {
  options: SortOption[]
  selected: SortOrder | null
  onSelect: (value: SortAction) => void
}

export type SortType = {
  field: SortField
  selected: SortOrder | null
  onSelect: (field: SortField, order: SortOrder,) => void
}
