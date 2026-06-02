import s from '@/shared/ui/spinner/Spinner.module.scss'
import {cn} from '@/shared/lib/utils'

type SpinnerType = {
  className?: string
  size?: 'sm'| 'md' | 'lg'
  
}

export const Spinner = (props: SpinnerType) => {
  const {className, size='md', } = props;
  
  return (
    <div className={cn(s.spinner, s[size],className)}/>
      

  )
}