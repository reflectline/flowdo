import { type Variants } from "framer-motion";

export const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3 ,
            delayChildren: 0.6,
        },
    },
};


export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration:  0.7,
            ease: "easeOut",
        },
    },
};


export const fadeDown: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export const fadeDownHeader: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export const showIn: Variants = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeIn",
        },
    },
};






