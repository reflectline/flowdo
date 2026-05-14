import s from '@/features/task/controls/settings/view-content/ViewContent.module.scss'
import { Checkbox } from '@/shared/ui/checkbox/Checkbox'
import type { FilterContentType } from '@/features/task/controls/lib/types'

export const ViewContent = (props: FilterContentType) => {
  const { options, selected, onToggle } = props

  return (
    <div className={s.popover}>
      <div className={s.columns}>Toggle columns</div>

      <ul className={s.list}>
        {options.map((option) => {
          return (
            <li key={option.value} className={s.li}>
              <label className={s.item}>
                <div className={s.left}>
                  <Checkbox
                    variant={'view'}
                    checked={!selected.includes(option.value)}
                    onChange={() => onToggle?.(option.value)}
                  />
                  <span>{option.label}</span>
                </div>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
