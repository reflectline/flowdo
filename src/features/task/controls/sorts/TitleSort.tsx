import { Button } from '@/shared/ui/button/Button'
import { ChevronsUpDown } from 'lucide-react'
import icon from '@/shared/styles/icons.module.scss'
import { Popover } from '@/shared/ui/popover/Popover'
import { SortContent } from '@/features/task/controls/sorts/sort-content/SortContent'
import { sort } from '@/features/task/controls/sorts/lib/sort-options'
import { useTaskSorts } from '@/features/task/controls/sorts/lib/ useTaskSorts'

export const TitleSort = () => {
  const {selectedTitleSort, setTitleSort,} = useTaskSorts()

  return (
    <Popover
      trigger={
        <Button variant={'sort'} size={'sm'}>
          Title
          <ChevronsUpDown className={icon.icon16} />
        </Button>
      }
    >
      <SortContent options={sort} selected={selectedTitleSort} onSelect={setTitleSort} />
    </Popover>
  )
}
