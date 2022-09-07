import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const AnimatedDiv = (props) => {
    const {
        animProgress,
        opacityProgress,
        // xPosProgress,
        yPosProgress,
        myStyle,
    } = props;
    const { scrollYProgress } = useScroll();

    const opacityAnim = useTransform(
        scrollYProgress,
        animProgress,
        opacityProgress
    );
    // const xPosAnim = useTransform(scrollYProgress, animProgress, xPosProgress);
    const yPosAnim = useTransform(scrollYProgress, animProgress, yPosProgress);

    return (
        <motion.div
            style={{
                ...myStyle,
                // x: xPosAnim,
                y: yPosAnim,
                opacity: opacityAnim,
            }}
        >
            {props.children}
        </motion.div>
    );
};

export default AnimatedDiv;
