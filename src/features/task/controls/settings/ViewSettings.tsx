import { Button } from '@/shared/ui/button/Button'
import { Settings2 } from 'lucide-react'
import icon from '@/shared/styles/icons.module.scss'
import { Popover } from '@/shared/ui/popover/Popover'
import { useTasksFilters } from '@/shared/lib/hooks/useTasksFilters'
import { ViewContent } from '@/features/task/controls/settings/view-content/ViewContent'
import type { Option, ViewFilterValue } from '@/features/task/controls/lib/controls.types'

export const ViewSettings = () => {
  const { selectedViews, toggleView } = useTasksFilters()

  const viewSettingsOptions: Option<ViewFilterValue>[]  = [
    { value: 'title', label: 'Title' },
    { value: 'date', label: 'Date' },
    { value: 'status', label: 'Status' },
    { value: 'priority', label: 'Priority' },
  ]

  return (
    <Popover
      trigger={
        <Button variant={'view'} size={'sm'}>
          <Settings2 className={icon.icon16} />
          View
        </Button>
      }
    >
      {(close) => (
        <ViewContent
          options={viewSettingsOptions}
          selected={selectedViews}
          onToggle={(value) => {
            toggleView(value)
            close()
          }}
        />
      )}
    </Popover>
  )
}
