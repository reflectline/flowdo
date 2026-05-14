import s from '@/shared/ui/statistics/progress-bar/ProgressBar.module.scss'

type ProgressBarType = {
  variant?: 'primary' | 'secondary'
  percent?: number
}

export const ProgressBar = (props: ProgressBarType ) => {
  const { percent , variant = 'primary'} = props

  return (
    <div className={s.progressBarWrapper}>
      <div className={s.progressBar}>
        {variant === 'secondary' && <p className={s.percent}>{`${percent}%`}</p>}
        <div className={s.progressFill} style={{ width: `${percent}%` }}></div>
      </div>
    </div>

  )
}