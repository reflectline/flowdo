import { motion } from 'framer-motion'
import { fadeDownHeader } from '@/shared/animation/variants'
import s from '@/widgets/header/Header.module.scss'
import logoLight from '@/shared/assets/icons/logoLight.svg'
import { NavLink } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import { Motion } from '@/shared/ui/motion/Motion'

export const HeaderWelcome = () => {
    return (
        <Motion>
            <motion.header variants={fadeDownHeader} className={s.headerWelcome}>
                <div className={s.wrapperContentWelcome}>
                    <div className={s.logoWrapper}>
                        <img className={s.logo} src={logoLight} alt="logo" />
                        <span>Flowdo</span>
                    </div>

                    <div className={s.btnWrapper}>
                        <NavLink className={s.login} to={path.login}>
                            Log in
                        </NavLink>
                        <NavLink className={s.signUp} to={path.login}>
                            Sign up
                        </NavLink>
                    </div>
                </div>
            </motion.header>
        </Motion>
    )
}
