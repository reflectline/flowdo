import {useBreadcrumbs} from '@/widgets/header/lib/useBreadcrumbs'



import type { Todolist } from '@/entities/todolist/lib/types'
import {useGetAllTodolists} from '@/entities/todolist/api/todolist.queries'
import {Button} from '@/shared/ui/button/Button'





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

          <Button variant='none'>hello</Button>
          <Button variant='primary'>hello</Button>
          <Button variant='secondary'>hello</Button>
          <Button variant='solid'>hello</Button>
          <Button variant='dashed'>hello</Button>

        </>
    )
}
