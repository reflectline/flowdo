import { LoginForm } from '@/features/auth/ui/LoginForm'
import s from '@/pages/login/LoginPage.module.scss'


export const LoginPage = () => {

    return (
        <div data-theme="dark">
            <main className={s.page}>
                <section>
                    <LoginForm />
                </section>
            </main>
        </div>
    )
}
