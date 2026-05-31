import { Button } from '@/shared/ui/button/Button'
import { ChevronsUpDown } from 'lucide-react'
import icon from '@/shared/styles/icons.module.scss'
import { Popover } from '@/shared/ui/popover/Popover'
import { SortContent } from '@/features/task/controls/sorts/sort-content/SortContent'
import { sort } from '@/features/task/controls/sorts/lib/sort-options'
import type { SortAction, SortType } from '@/features/task/controls/sorts/lib/sort.types'
import {useTasksFilters} from '@/shared/lib/hooks/useTasksFilters'

export const DateSort = (props: SortType) => {
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
          Date
          <ChevronsUpDown className={icon.icon16} />
        </Button>
      }
    >
      {(close) => (
        <SortContent
          options={sort}
          selected={selected}
          onSelect={(value) => {
            handleSelect(value)
            close()
          }}
        />
      )}
    </Popover>
  )
}
