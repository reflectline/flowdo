


import * as React from 'react';
import {motion, type MotionValue, useMotionValueEvent, useSpring} from 'framer-motion';
import { showIn} from "@/shared/animation/variants.ts";
import s from './StarsBackground.module.scss';
import { cn } from '@/shared/lib/utils';
import {Motion} from "@/shared/ui/motion/Motion.tsx";


type Star = {
    x: number;
    y: number;
    dx: number;
    dy: number;
};

type StarLayerProps = {
    count: number;
    size: number;
    factor: number;
    offsetX: number;
    offsetY: number;
    starColor: string;
};

function StarLayer({ count, size, factor, offsetX, offsetY, starColor }: StarLayerProps) {
    const [stars, setStars] = React.useState<Star[]>([]);

    React.useEffect(() => {
        const newStars: Star[] = [];
        for (let i = 0; i < count; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const angle = Math.random() * 2 * Math.PI;
            const speed = 0.01 + Math.random() * 0.04; // медленное движение
            newStars.push({x, y, dx: Math.cos(angle) * speed, dy: Math.sin(angle) * speed,});
        }
        setStars(newStars);
    }, [count]);

    React.useEffect(() => {
        let frame: number;

        const moveStars = () => {
            setStars((prev) =>
                prev.map((star) => {
                    let nx = star.x + star.dx;
                    let ny = star.y + star.dy;

                    if (nx > window.innerWidth + 50) nx = -50;
                    if (nx < -50) nx = window.innerWidth + 50;
                    if (ny > window.innerHeight + 50) ny = -50;
                    if (ny < -50) ny = window.innerHeight + 50;

                    return { ...star, x: nx, y: ny };
                })
            );
            frame = requestAnimationFrame(moveStars);
        };

        moveStars();
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <>
            {stars.map((star, idx) => (
                <motion.div
                    key={idx}
                    className={s.star}
                    style={{
                        width: size,
                        height: size,
                        x: star.x + offsetX * factor * 100,
                        y: star.y + offsetY * factor * 100,
                        backgroundColor: starColor,
                    }}
                />
            ))}
        </>
    );
}

type StarsBackgroundProps = React.ComponentProps<'div'> & {
    offsetX: MotionValue<number>;
    offsetY: MotionValue<number>;
    starColor?: string;
};

export function StarsBackground({ offsetX,offsetY, className, starColor = '#fff', ...props }: StarsBackgroundProps) {


    const springX = useSpring(offsetX, { stiffness: 50, damping: 20 });
    const springY = useSpring(offsetY, { stiffness: 50, damping: 20 });

    const [ox, setOx] = React.useState(0);
    const [oy, setOy] = React.useState(0);

    useMotionValueEvent(springX, "change", setOx);
    useMotionValueEvent(springY, "change", setOy);

    return (
        <Motion>
            <motion.div variants={showIn}>
                <div className={cn(s.starsBackground, className)}{...props}>
                    <StarLayer count={15} size={1} factor={0.1} offsetX={ox} offsetY={oy} starColor={starColor} />
                    <StarLayer count={10} size={1.5} factor={0.3} offsetX={ox} offsetY={oy} starColor={starColor} />
                    <StarLayer count={5} size={2} factor={0.6} offsetX={ox} offsetY={oy} starColor={starColor} />
                </div>
            </motion.div>
        </Motion>


    );
}
