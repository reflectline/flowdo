import {useBreadcrumbs} from '@/widgets/header/lib/useBreadcrumbs'
import {useGetAllTodolists} from '@/entities/todolist/api/todolists.queries'
import type {Todolist} from '@/entities/todolist/lib/types'



export const Todolists = () => {

    const {currentBreadcrumb} = useBreadcrumbs()
    const {data: todolists, refetch} = useGetAllTodolists()



    return (
        <>
            <div>
                {todolists?.map((item: Todolist) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </div>
          <button style={{
            padding: '10px 16px',
            marginBottom: '12px',
          }} onClick={()=>refetch()}></button>
            <h1>Dashboard: {currentBreadcrumb.label}</h1>
        </>
    )
}
