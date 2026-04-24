import s from '@/features/auth/ui/LoginForm.module.scss'

export const LoginSubmit = () => {
    return (
        <div className={s.wrapperButton}>
            <button className={s.loginBtn} type="submit">
                Login
            </button>

            <div className={s.hintBtn}>
                <p>Want your own account?</p>
                <p>
                    Register at{' '}
                    <a className={s.linkAccount} href={'https://social-network.samuraijs.com/login'}>
                        here
                    </a>
                </p>
            </div>
        </div>
    )
}