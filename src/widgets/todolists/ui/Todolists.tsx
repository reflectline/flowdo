import { useBreadcrumbs } from '@/widgets/header/lib/useBreadcrumbs'
import type { Todolist } from '@/entities/todolist/lib/types'
import { useGetAllTodolists } from '@/entities/todolist/api/todolist.queries'
import s from '@/widgets/todolists/ui/Todolists.module.scss'
import { TodolistItem } from '@/entities/todolist/ui/TodolistItem'

export const Todolists = () => {
  const { currentBreadcrumb } = useBreadcrumbs()
  const { data: todolists } = useGetAllTodolists()
  // const { data: tasks } = useGetAllTasks()

  return (
    <div className={s.todolistsWrapper}>

      <h2 className={s.path}>{currentBreadcrumb.label}</h2>
      <div className={s.grid}>
        {todolists?.map((item: Todolist) => (
          <TodolistItem key={item.id} todolist={item}/>
        ))}
      </div>




      {/*<Button variant="none">hello</Button>*/}
      {/*<Button variant="primary">hello</Button>*/}
      {/*<Button variant="secondary">hello</Button>*/}
      {/*<Button variant="solid">hello</Button>*/}
      {/*<Button variant="dashed">hello</Button>*/}
    </div>
  )
}
