import s from '@/features/task/controls/pagination/page-size/page-size-content/PageSizeContent.module.scss'
import { PAGE_SIZE_OPTIONS } from '@/features/task/controls/pagination/lib/pagination.constants'
import {Check} from 'lucide-react'


type PageSizeContentType = {
  pageSize: number
  setPageSize: (pageSize: number) => void
}

export const PageSizeContent = (props: PageSizeContentType)=>{
  const {pageSize,setPageSize} = props

  return (
    <div className={s.pageSizeContentWrapper}>
      {PAGE_SIZE_OPTIONS.map(option => (
        <div className={s.pageSizeContent} key={option}>
          <button
            type="button"
            className={s.btnPageSize}
            onClick={() => setPageSize(option)}
            data-active={pageSize === option}
            aria-selected={pageSize === option}
          >
            <span>{option}</span>

            {pageSize === option && <Check />}
          </button>
        </div>

      ))}

    </div>
  )
}

