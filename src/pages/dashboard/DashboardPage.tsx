import { useBreadcrumbs } from '@/widgets/header/lib/useBreadcrumbs'
import { ErrorPage } from '@/pages/error/ErrorPage'
import { CreateTodolist } from '@/features/todolist/create-todolist/ui/CreateTodolist'
import { Todolists } from '@/widgets/todolists/ui/Todolists'
import s from '@/pages/dashboard/DashboardPage.module.scss'



export const DashboardPage = () => {
  const { parsedFilter } = useBreadcrumbs()

  if (!parsedFilter.success) {
    return <ErrorPage />
  }

  return (
    <section className={s.page}>
      <CreateTodolist />
      <Todolists />
    </section>
  )
}
