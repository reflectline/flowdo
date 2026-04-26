import s from '@/features/auth/ui/LoginForm.module.scss'
import {Button} from '@/shared/ui/button/Button'

export const LoginSubmit = () => {
    return (
        <div className={s.wrapperButton}>
            <Button variant={'primary'}  className={s.loginBtn} type="submit">
                Login
            </Button>

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