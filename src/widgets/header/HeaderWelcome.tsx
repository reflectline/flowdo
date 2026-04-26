import { motion } from 'framer-motion'
import { fadeDownHeader } from '@/shared/animation/variants'
import s from '@/widgets/header/Header.module.scss'
import logoLight from '@/shared/assets/icons/logoLight.svg'
import { Link } from 'react-router-dom'
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

                    <div className={s.linkWrapper}>
                        <Link className={s.login} to={path.login}>
                            Log in
                        </Link>
                        <Link className={s.signUp} to={path.login}>
                            Sign up
                        </Link>
                    </div>
                </div>
            </motion.header>
        </Motion>
    )
}
