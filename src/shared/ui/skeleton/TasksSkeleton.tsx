import s from '@/shared/ui/skeleton/Skeleton.module.scss';
import {Spinner} from '@/shared/ui/spinner/Spinner'

export const TasksSkeleton = () => {
  return (
    <div className={s.contentWrapper}>
      <div className={s.tableWrapper}>
        <div className={s.toolbarInput}></div>
        <div className={s.toolbarAdd}></div>
      </div>
      <div className={s.tableTasks}>
        <Spinner />
      </div>
    </div>
  )
}