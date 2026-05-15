
export type SortOrder = 'asc' | 'desc' | 'hide'

export type SortKey = | 'titleSort' | 'dateSort' | 'statusSort' | 'prioritySort'


export type SortOption = {
  value: SortOrder
  label: string
}

export type SortContentType = {
  options: SortOption[]
  selected: SortOrder | null
  onSelect: (value: SortOrder) => void
}

