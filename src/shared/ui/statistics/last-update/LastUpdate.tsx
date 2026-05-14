import { formatDistanceToNowStrict } from 'date-fns'
import { parseUtcDate } from '@/shared/lib/dates/parseUtcDate'
import s from '@/shared/ui/statistics/last-update/LastUpdate.module.scss'
import { cn } from '@/shared/lib/utils'

type LastUpdateType = {
  className?: string
  latestDate?: string | null
}

export const LastUpdate = (props: LastUpdateType) => {
  const { latestDate, className } = props
  if (!latestDate) return <p className={cn(s.textLastUpdate, className)}>No tasks yet</p>

  const text = formatDistanceToNowStrict(parseUtcDate(latestDate), { addSuffix: true })

  return <p className={cn(s.textLastUpdate, className)}>last update {text}</p>
}

