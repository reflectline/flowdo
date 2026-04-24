import * as React from 'react'
import { motion } from 'framer-motion'
import { container } from '@/shared/animation/variants'

export const Motion = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div variants={container} initial="hidden" animate="visible">
            {children}
        </motion.div>
    )
}
