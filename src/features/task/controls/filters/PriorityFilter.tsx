import { Popover } from '@/shared/ui/popover/Popover'
import { Button } from '@/shared/ui/button/Button'
import { CirclePlus } from 'lucide-react'
import icon from '@/shared/styles/icons.module.scss'
import { useTasksFilters } from '@/shared/lib/hooks/useTasksFilters'
import {FilterContent} from '@/features/task/controls/filters/filter-content/FilterContent'

export const PriorityFilter = () => {
  const { selectedPriorities, togglePriority } = useTasksFilters()

   const priorityFilterOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ]

  return (
    <Popover
      trigger={
        <Button variant={'dashed'} size={'sm'}>
          <CirclePlus className={icon.icon16} />
          Priority
        </Button>
      }
    >
      <FilterContent options={priorityFilterOptions} selected={selectedPriorities} onToggle={togglePriority} />
    </Popover>
  )
}
