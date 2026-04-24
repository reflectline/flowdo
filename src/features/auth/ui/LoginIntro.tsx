import s from '@/features/auth/ui/LoginForm.module.scss'
import logoLight from '@/shared/assets/icons/logoLight.svg'

export const LoginIntro = () => {
    return (
        <div className={s.wrapperIntro}>
            <div className={s.intro}>
                <img className={s.logo} src={logoLight} alt="logo" />
                <p>Welcome to Flowdo.</p>
            </div>
            <div className={s.hintIntro}>
                <p>You can test the app using a demo account.</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
        </div>
    )
}
