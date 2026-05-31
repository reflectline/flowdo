import s from '@/features/task/actions/priority-task/priority-content/PriorityContent.module.scss'
import { Checkbox } from '@/shared/ui/checkbox/Checkbox'
import type { priorityOptions } from '@/features/task/actions/priority-task/ChangeTaskPriority'
import type { TaskPriority } from '@/shared/api/enums'

type ActionContentType = {
  options?: readonly priorityOptions[]
  selected?: number
  onToggle?: (value: TaskPriority) => void
}

export const PriorityContent = (props: ActionContentType) => {
  const { options, selected, onToggle } = props

  return (
    <div className={s.popover}>
      <ul className={s.list}>
        {options?.map((option) => (
            <li key={option.label} className={s.li}>
              <button type="button"
                      className={s.item}
                      onClick={() => onToggle?.(option.value)}
              >
                <div className={s.left}>
                  <Checkbox
                    variant={'view'}
                    checked={selected === option.value}
                    onChange={() => onToggle?.(option.value)}
                  />
                  <span>{option.label}</span>
                </div>
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
