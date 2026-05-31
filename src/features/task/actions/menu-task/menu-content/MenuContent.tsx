import type { menuOptionsType } from '@/features/task/actions/menu-task/MenuTask'
import s from '@/features/task/actions/menu-task/menu-content/MenuContent.module.scss'
import { type KeyboardEvent, useEffect, useRef } from 'react'




type MenuContentType = {
  options?: readonly menuOptionsType[]
  onClick?: (value: string) => void
  onKeyDownHandler?: (key: KeyboardEvent<HTMLDivElement>) => void
}

export const MenuContent = (props: MenuContentType) => {
  const { options, onClick, onKeyDownHandler } = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])




  return (
    <div
      ref={ref}
      tabIndex={0}
      className={s.popover}
      onKeyDown={onKeyDownHandler}
    >
      <ul className={s.list}>
        {options?.map((option) => {
          const isDelete = option.value === 'delete'

          return (
            <li
              key={option.value}
              className={s.item}
              data-divider={isDelete}
            >
              <button
                type="button"
                className={s.button}
                data-delete={isDelete}
                onClick={() => onClick?.(option.value)}
              >
                <span>{option.label}</span>
                {isDelete && <span className={s.shortcut}>⌘⌫</span>}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
