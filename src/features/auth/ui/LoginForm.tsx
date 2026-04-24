import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { loginSchema } from '@/features/auth/lib/login.schema'
import type { LoginInputsType } from '@/features/auth/lib/login.schema'
import s from '@/features/auth/ui/LoginForm.module.scss';
import { LoginIntro } from '@/features/auth/ui/LoginIntro'
import { LoginInputs } from '@/features/auth/ui/LoginInputs'
import { LoginSubmit } from '@/features/auth/ui/LoginSubmit'
import {useLogin} from '@/features/auth/api/auth.queries';

export const LoginForm = () => {
    const { mutate: login } = useLogin()

    const form = useForm<LoginInputsType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: 'hunzah9@mail.ru',
            password: '92Q33yC!79pEVPH',
            rememberMe: false,
        },
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<LoginInputsType> = (data) => {
        login(data, {onSuccess: () => form.reset(),})
        console.log(data)
        form.reset()
    }

    return (
        <form className={s.form} onSubmit={form.handleSubmit(onSubmit)}>
            <LoginIntro />
            <LoginInputs form={form} />
            <LoginSubmit />
        </form>
    )
}


// defaultValues: {
//     email: 'free@samuraijs.com',
//         password: 'free',
//         rememberMe: false,
// },