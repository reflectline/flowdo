import s from '@/features/task/controls/sorts/sort-content/SortContent.module.scss'
import type { SortContentType } from '@/features/task/controls/sorts/lib/sort.types'
import { iconsSort } from '@/features/task/controls/sorts/lib/sort-options'
import {Fragment} from 'react'

export const SortContent = (props: SortContentType) => {
  const { options, selected, onSelect } = props

  return (
    <div className={s.popover}>

      <ul className={s.list}>
        {options.map((option) => {
          const Icon = iconsSort[option.value]
          const isHide = option.value === 'hide'

          return (
            <Fragment key={option.value}>
              {isHide && (
                <li className={s.li}>
                  <div className={s.divider} />
                </li>
              )}

              <li className={s.li}>
                <button
                  type="button"
                  className={s.item}
                  data-active={selected === option.value}
                  onClick={() => onSelect(option.value)}
                >
                  <Icon className={s.ico} />
                  {option.label}
                </button>
              </li>
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}
