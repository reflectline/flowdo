import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header/Header'
import s from '@/app/layouts/PublicLayout/PublicLayout.module.scss'

export const PublicLayout = () => {
    return (
        <div data-theme="dark">
            <Header variant="welcome" />
            <main className={s.page}>
                <Outlet />
            </main>
        </div>
    )
}
