import { Popover } from '@/shared/ui/popover/Popover'
import { Button } from '@/shared/ui/button/Button'
import { CirclePlus } from 'lucide-react'
import icon from '@/shared/styles/icons.module.scss'
import { useTasksFilters } from '@/shared/lib/hooks/useTasksFilters'
import { FilterContent } from '@/features/task/controls/filters/filter-content/FilterContent'
import type { Option, StatusFilterValue } from '@/features/task/controls/lib/controls.types'

export const StatusFilter = () => {
  const { selectedStatuses, toggleStatus } = useTasksFilters()

  const statusFilterOptions: Option<StatusFilterValue>[] = [
    { value: 'in-process', label: 'In Process' },
    { value: 'done', label: 'Done' },
  ]

  return (
    <Popover
      trigger={
        <Button variant={'dashed'} size={'sm'}>
          <CirclePlus className={icon.icon16} />
          Status
        </Button>
      }
    >
      {(close) => (
        <FilterContent
          options={statusFilterOptions}
          selected={selectedStatuses}
          onToggle={(value) => {
            toggleStatus(value)
            close()
          }}
        />
      )}
    </Popover>
  )
}
