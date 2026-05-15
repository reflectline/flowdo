import { EditableSpan } from '@/shared/ui/editable/EditableSpan'

type TaskTitleType = {
  title: string
}
export const TaskTitle = (props: TaskTitleType) => {
  const { title } = props
  const handleSubmit = (newTitle: string) => {
    console.log(newTitle)
  }

  return <EditableSpan size={'sm'} title={title} onSubmit={handleSubmit} />
}
