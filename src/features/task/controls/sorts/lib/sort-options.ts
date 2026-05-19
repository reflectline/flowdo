
import { ArrowDown, ArrowUp, EyeOff } from 'lucide-react'
import type {SortOption} from '@/features/task/controls/sorts/lib/sort.types'



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