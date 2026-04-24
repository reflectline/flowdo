import * as React from 'react'
import s from '@/pages/welcome/WelcomePage.module.scss'
import { Link } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import arrow from '@/shared/assets/icons/arrow.svg'
// import previewApp from '@/shared/assets/picture/previewApp.png'
import test from '@/shared/assets/picture/test.png'
import { StarsBackground } from '@/shared/ui/effects/stars/StarsBackground'
import { motion, useMotionValue } from 'framer-motion'
import { fadeDown, fadeUp } from '@/shared/animation/variants'
import { Motion } from '@/shared/ui/motion/Motion'

export const WelcomePage = () => {
    const offsetX = useMotionValue(0)
    const offsetY = useMotionValue(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        offsetX.set((e.clientX - centerX) / centerX)
        offsetY.set((e.clientY - centerY) / centerY)
    }

    return (
        <section className={s.wrapper} onMouseMove={handleMouseMove}>
            <div className={s.content}>
                <Motion>
                    <div className={s.textWrapper}>
                        <motion.h1 variants={fadeDown} className={s.hero}>
                            Focus on what matters
                            <br /> to organize your time
                        </motion.h1>

                        <motion.p variants={fadeDown} className={s.intro}>
                            Stay on top of all your tasks, deadlines, and daily priorities
                            <br /> and focus on the work that really matters.
                        </motion.p>

                        <motion.div variants={fadeDown}>
                            <Link className={s.getStartedBtn} to={path.login}>
                                <span>Get Started for free</span>
                                <img className={s.arrow} src={arrow} alt="arrow" />
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div variants={fadeUp} className={s.preview}>
                        <div className={s.previewGlow} />
                        <div className={s.borderEffect}>
                            <div className={s.mask}>
                                <div className={s.beam} />
                                <img src={test} alt="previewApp" className={s.previewApp} />
                            </div>
                        </div>
                    </motion.div>
                </Motion>
            </div>

            <div className={s.blackGradient} />
            <StarsBackground offsetX={offsetX} offsetY={offsetY} />
        </section>
    )
}
