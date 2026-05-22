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
    <div className={s.popover} onKeyDown={onKeyDownHandler} ref={ref} tabIndex={0}>
      <ul className={s.list}>
        {options?.map((option) => {
          const last = option?.value === 'delete'
          return (
            <div key={option.label}>
              {last && <div className={s.driver}/>}
              <li  className={s.li}>

                <button type="button" className={last? s.itemDelete : s.itemDef} onClick={() => onClick?.(option.value)}>
                  {option.label}
                  {last && <span className={s.itemDeleteHint}>⌘⌫</span>}
                </button>
              </li>
            </div>

          )
        })}
      </ul>
    </div>
  )
}
