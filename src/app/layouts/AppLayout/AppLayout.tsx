import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header/Header'
import s from '@/app/layouts/AppLayout/AppLayout.module.scss'
import { Sidebar } from '@/widgets/sidebar/Sidebar'




export const AppLayout = () => {



    return (
        <div className={s.page}>
            <Sidebar />
            <div className={s.content}>
                <Header variant="app" />
                <main className={s.main}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

