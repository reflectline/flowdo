import { ErrorPage } from '@/pages/error/ErrorPage'
import { CreateTodolistForm } from '@/features/todolist/create-todolist/ui/CreateTodolistForm'
import { Todolists } from '@/widgets/todolists/ui/Todolists'
import s from '@/pages/dashboard/DashboardPage.module.scss'
import {useRouteState} from '@/shared/lib/route/useRouteState'

export const DashboardPage = () => {
  const { activeFilter } = useRouteState()

  if (!activeFilter) {
    return <ErrorPage />
  }

  return (
    <section className={s.page}>
      <CreateTodolistForm />
      <Todolists />
    </section>
  )
}
