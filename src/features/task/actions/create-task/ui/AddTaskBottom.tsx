import { Button } from '@/shared/ui/button/Button'

export const AddTaskBottom = () => {
  return (

    <Button variant={'addTask'}
            size={'sm'}
            textSize={'md'}
            type="submit"
            form="create-task-form">
      Add Task
    </Button>
  )
}
