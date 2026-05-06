import {differenceInDays} from 'date-fns'
import {parseUtcDate} from '@/shared/lib/dates/parseUtcDate';

export const formatDaysAgoShort = (date: string) => {
  const diff = differenceInDays(new Date(), parseUtcDate(date))

  return diff >= 0 ? `${diff} d.` : `${Math.abs(diff)} d.`
}