import s from '@/features/task/controls/filters/filter-content/FilterContent.module.scss'
import { CircleCheck, Search, Timer, ArrowDown, ArrowRight, ArrowUp } from 'lucide-react'
import { Checkbox } from '@/shared/ui/checkbox/Checkbox'
import { useState } from 'react'
import type {FilterContentType} from '@/features/task/controls/lib/types'



const icons = {
  'in-process': Timer,
  'done': CircleCheck,
  'medium': ArrowDown,
  'low': ArrowRight,
  'high': ArrowUp,
}

export const FilterContent = (props: FilterContentType) => {
  const { options, selected, onToggle } = props
  const [value, setValue] = useState('')

  const filteredOptions = options.filter((item) => item.label.toLowerCase().includes(value.toLowerCase()))

  return (
    <div className={s.popover}>
      <label className={s.search}>
        <Search className={s.ico} />
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Search status..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>

      <ul className={s.list}>
        {filteredOptions.map((option) => {
          const Icon = icons[option.value as keyof typeof icons]

          return (
            <li key={option.value} className={s.li}>
              <label className={s.item}>
                <div className={s.left}>
                  <Checkbox checked={selected.includes(option.value)} onChange={() => onToggle?.(option.value)} />
                  {Icon && <Icon className={s.ico} />}
                  <span>{option.label}</span>
                </div>
              </label>
            </li>
          )
        })}
        {filteredOptions.length === 0 && <div className={s.noResults}>No results found.</div>}
      </ul>
    </div>
  )
}
