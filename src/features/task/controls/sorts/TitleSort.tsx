import { Button } from '@/shared/ui/button/Button'
import { ChevronsUpDown } from 'lucide-react'
import icon from '@/shared/styles/icons.module.scss'
import { Popover } from '@/shared/ui/popover/Popover'
import { SortContent } from '@/features/task/controls/sorts/sort-content/SortContent'
import { sort } from '@/features/task/controls/sorts/lib/sort-options'
import {useTasksFilters} from '@/shared/lib/hooks/useTasksFilters'
import type { SortAction, SortType } from '@/features/task/controls/sorts/lib/sort.types'




export const TitleSort = (props: SortType) => {
  const { field, selected, onSelect } = props
  const { toggleView } = useTasksFilters()

  const handleSelect = (order: SortAction) => {
    if (order === 'hide') {
      toggleView(field)
      return
    }

    onSelect(field, order)
  }


  return (
    <Popover
      trigger={
        <Button variant={'sort'} size={'sm'}>
          Title
          <ChevronsUpDown className={icon.icon16} />
        </Button>
      }
    >
      <SortContent options={sort} selected={selected} onSelect={handleSelect} />
    </Popover>
  )
}
