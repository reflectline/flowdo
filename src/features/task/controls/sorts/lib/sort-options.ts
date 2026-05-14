import type { SortOption } from '@/features/task/sorts/lib/sort.types'
import { ArrowDown, ArrowUp, EyeOff } from 'lucide-react'



export const sort: SortOption[] = [
  {
    value: 'asc',
    label: 'Asc',
  },
  {
    value: 'desc',
    label: 'Desc',
  },
  {
    value: 'hide',
    label: 'Hide',
  },
]

export const iconsSort = {
  asc: ArrowUp,
  desc: ArrowDown,
  hide: EyeOff,
}