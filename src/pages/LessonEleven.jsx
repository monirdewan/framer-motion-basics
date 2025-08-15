import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from 'motion/react';

const LessonEleven = () => {
    const x= useMotionValue(0)
    const opacity = useTransform(x,[0,100], [1,0])
    return (
        <div className='size-[500px] border border-red-500 flex justify-center items-center flex-col mx-auto'  >
            <motion.dev className="size-44 bg-indigo-500 rounded flex justify-center items-center"
            style={{x, opacity}}
            drag="x"
            >

            </motion.dev>
        </div>
    );
};

export default LessonEleven;