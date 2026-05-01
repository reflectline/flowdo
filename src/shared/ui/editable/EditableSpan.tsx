import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import { PencilLine } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Input } from '@/shared/ui/Input/Input'
import s from '@/shared/ui/editable/EditableSpan.module.scss'


type EditableSpanType = {
  title?: string
  size?: 'sm' | 'md'
  onSubmit: (newTitle: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {
  const { title, size = 'md', onSubmit } = props
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(title ?? '')


  const startEditing = () => {
    setValue(title ?? '')
    setIsEditing(true)
  }

  const handleSubmit = () => {
    const newTitle = value.trim()
    if (!newTitle) {
      setValue(title ?? '')
      setIsEditing(false)
      return
    }
    if (newTitle === title) {
      setIsEditing(false)
      return
    }
    onSubmit(newTitle)
    setIsEditing(false)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
    if (e.key === 'Escape') {
      setValue(title ?? '');
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <Input

        className={s.input}
        textSize={'md'}
        border={false}
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    )
  }

  return (
    <div className={s.spanWrapper}>
      <span className={cn(s.span, s[size])} onClick={startEditing}>
        {value}
      </span>
      <PencilLine className={s.pencilIcon} />
    </div>
  )
}
