import s from '@/features/auth/ui/LoginForm.module.scss'
import { EyeFollow } from '@/shared/ui/effects/eye/EyeFollow'
import { EyeClosed } from 'lucide-react'
import type { UseFormReturn } from 'react-hook-form'
import type { LoginInputsType } from '@/features/auth/lib/login.schema'
import { useState } from 'react'

type LoginInputsProps = {
    form: UseFormReturn<LoginInputsType>
}

export const LoginInputs = (props: LoginInputsProps) => {
    const {
        register,
        formState: { errors },
    } = props.form

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className={s.wrapperInputs}>
            <div className={s.field}>
                <span className={errors.email ? s.errorMessage : s.label}>{errors.email?.message || 'Email'}</span>

                <input className={s.input} placeholder="m@example.com" {...register('email')} />
            </div>

            <div className={s.field}>
                <div className={s.hintPasswordText}>
                    <span className={errors.password ? s.errorMessage : s.label}>
                        {errors.password?.message || 'Password'}
                    </span>
                    <a className={s.link} href={'https://social-network.samuraijs.com/login'}>
                        Forgot your password?
                    </a>
                </div>

                <div className={s.inputWrapper}>
                    <input className={s.input} type={showPassword ? 'text' : 'password'} {...register('password')} />

                    <button className={s.showPassword} type="button" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <EyeFollow size={20} /> : <EyeClosed size={20} />}
                    </button>
                </div>
            </div>
        </div>
    )
}
