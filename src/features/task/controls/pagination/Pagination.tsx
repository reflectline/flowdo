import s from '@/features/task/controls/pagination/Pagination.module.scss'
import { PageSizeSelect } from '@/features/task/controls/pagination/page-size/PageSizeSelect'
import { IconButton } from '@/shared/ui/icon-button/IconButton'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

type TasksPaginationType = {
  page: number
  setPage: (page: number) => void
  total: number
  totalPages: number
  pageSize: number
  setPageSize: (pageSize: number) => void
}

export const Pagination = (props: TasksPaginationType) => {
  const { page, setPage, pageSize, setPageSize, total, totalPages } = props

  const isFirstPage  = page <= 1
  const isLastPage  = page >= totalPages
  const currentRows = Math.max(0, Math.min(pageSize, total - (page - 1) * pageSize))


  return (
    <div className={s.paginationWrapper}>
      <div className={s.paginationTotal}>{`${currentRows} of ${total} row(s).`}</div>

      <div className={s.paginationContent}>
        <div className={s.pageSize}>
          <span>Rows per page</span>
          <PageSizeSelect pageSize={pageSize} setPageSize={setPageSize} />
        </div>

        <div className={s.totalPages}>{`Page ${page} of ${totalPages}`}</div>

        <div className={s.navigations}>
          <IconButton icon={<ChevronsLeft />} size={'md'} className={s.buttonNavigation} onClick={()=> setPage(1)}  disabled={isFirstPage}/>
          <IconButton icon={<ChevronLeft/>} size={'md'} className={s.buttonNavigation} onClick={()=> setPage(page - 1)}  disabled={isFirstPage}/>
          <IconButton icon={<ChevronRight/>} size={'md'} className={s.buttonNavigation} onClick={()=> setPage(page + 1)} disabled={isLastPage}/>
          <IconButton icon={<ChevronsRight />} size={'md'} className={s.buttonNavigation} onClick={()=> setPage(totalPages)}  disabled={isLastPage}/>

        </div>
      </div>
    </div>
  )
}
