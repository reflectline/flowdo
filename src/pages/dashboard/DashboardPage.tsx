import { useBreadcrumbs } from '@/widgets/header/lib/useBreadcrumbs'
import { ErrorPage } from '@/pages/error/ErrorPage'
import { CreateTodolistForm } from '@/features/create-todolist/CreateTodolistForm'
import { Todolists } from '@/widgets/todolists/ui/Todolists'




export const DashboardPage = () => {
  const { parsedFilter } = useBreadcrumbs()

  if (!parsedFilter.success) {
    return <ErrorPage />
  }

  return (
    <section>
      <CreateTodolistForm />
      <Todolists />
    </section>
  )
}
