import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    from?: number;
    to: number;
    duration?: number;
    delay?: number;
    className?: string; // Allow passing className for styling if needed (though wrapper usually handles it)
}

export const AnimatedCounter = ({ from = 0, to, duration = 2, delay = 0 }: AnimatedCounterProps) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, to, { duration, delay, ease: "easeOut" });
            return controls.stop;
        }
    }, [count, to, duration, delay, inView]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};
