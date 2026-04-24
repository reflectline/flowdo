import { useBreadcrumbs } from '@/widgets/header/lib/useBreadcrumbs'
import { ErrorPage } from '@/pages/error/ErrorPage'
import {Todolists} from '@/widgets/Todolists/ui/Todilists'


export const DashboardPage = () => {
  const { parsedFilter } = useBreadcrumbs()

  if (!parsedFilter.success) {
    return <ErrorPage />
  }

  return (
    <section style={{ backgroundColor: 'beige' }}>
      {/*<CreateTodoForm/>*/}
      <Todolists />
    </section>
  )
}
