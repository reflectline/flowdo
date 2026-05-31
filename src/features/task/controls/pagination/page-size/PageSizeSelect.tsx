import {Popover} from '@/shared/ui/popover/Popover'
import {PageSizeContent} from '@/features/task/controls/pagination/page-size/page-size-content/PageSizeContent'
import {SelectBadge} from '@/shared/ui/badges/SelectBadge'

type PageSizeSelectType = {
  pageSize: number
  setPageSize: (pageSize: number) => void
}

export const PageSizeSelect = (props: PageSizeSelectType) => {
  const { pageSize, setPageSize } = props;

  return (
    <Popover
      trigger={
        <SelectBadge variant={'pageSize'}>
          {pageSize}
        </SelectBadge>
      }
    >
      {(close) => (
        <PageSizeContent
          pageSize={pageSize}
          setPageSize={(value) => {
            setPageSize(value)
            close()
          }}
        />
      )}
    </Popover>
  )
}