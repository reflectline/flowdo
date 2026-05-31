import type {ReactNode} from 'react'
import {cn} from '@/shared/lib/utils'
import s from '@/shared/ui/icon-button/IconButton.module.scss'

type IconButtonType ={
  icon?: ReactNode
  size?: 'sm'| 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export const IconButton = (props: IconButtonType) => {
  const { icon, size = 'md', onClick, className, ...rest} = props;

  return (

    <button 
      type="button"
      className={cn(s.iconButton, s[size], className)}
      onClick={onClick}
      {...rest}
    >
      {icon}
    </button>
  )
}