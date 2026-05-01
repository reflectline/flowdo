import { useBreadcrumbs } from '@/widgets/header/lib/useBreadcrumbs'
import { ErrorPage } from '@/pages/error/ErrorPage'
import { CreateTodolistForm } from '@/features/todolist/create-todolist/ui/CreateTodolistForm'
import { Todolists } from '@/widgets/todolists/ui/Todolists'
import s from '@/pages/dashboard/DashboardPage.module.scss'



export const DashboardPage = () => {
  const { parsedFilter } = useBreadcrumbs()

  if (!parsedFilter.success) {
    return <ErrorPage />
  }

  return (
    <section className={s.page}>
      <CreateTodolistForm />
      <Todolists />
    </section>
  )
}
