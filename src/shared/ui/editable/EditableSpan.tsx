import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { PencilLine } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Input } from '@/shared/ui/Input/Input'
import s from '@/shared/ui/editable/EditableSpan.module.scss'
import { validateTitleSchema } from '@/shared/lib/validation/todolist-title.schema'
import { useErrorAnimation } from '@/shared/lib/hooks/useErrorAnimation'
import { IconButton } from '@/shared/ui/icon-button/IconButton'

type EditableSpanType = {
  variant?: 'todolist' | 'task'
  title?: string
  size?: 'sm' | 'md'
  onSubmit: (newTitle: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {
  const { variant = 'todolist', title, size = 'md', onSubmit } = props
  const { error, startShowError, stopShowError } = useErrorAnimation()
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(title ?? '')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!isEditing || !textareaRef.current) return
    const textarea = textareaRef.current
    requestAnimationFrame(() => {
      textarea.style.height = '0px'
      textarea.style.height = `${textarea.scrollHeight}px`
    })
  }, [value, isEditing])
  useEffect(() => {
    if (!isEditing || !textareaRef.current) return
    const textarea = textareaRef.current
    const length = textarea.value.length
    requestAnimationFrame(() => {
      textarea.setSelectionRange(length, length)
    })
  }, [isEditing])


  const startEditing = () => {
    setValue(title ?? '')
    setIsEditing(true)
  }

  const handleSubmit = () => {
    const validateTitle = validateTitleSchema.safeParse(value)

    if (!validateTitle.success) {
      startShowError()
      setValue(title ?? '')
      setIsEditing(false)
      return
    }

    const newTitle = validateTitle.data
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
      setValue(title ?? '')
      setIsEditing(false)
    }
  }

  const handleTextareaKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
    if (e.key === 'Escape') {
      setValue(title ?? '')
      setIsEditing(false)
    }
  }

  if (isEditing && variant === 'todolist') {
    return (
      <Input
        className={s.input}
        textSize={size}
        border={false}
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    )
  }

  if (isEditing && variant === 'task') {
    return (
      <textarea
        ref={textareaRef}
        className={s.textareaTask}
        autoFocus
        value={value}
        rows={1}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSubmit}
        onKeyDown={handleTextareaKeyDown}
      />
    )
  }

  return (
    <div className={s.spanWrapper}>
      <span className={cn(s.span, s[size], error && s.error)} onClick={startEditing} onAnimationEnd={stopShowError}>
        {value}
      </span>
      <IconButton icon={<PencilLine />} className={s.iconButton} onClick={startEditing} data-name/>
    </div>
  )
}
