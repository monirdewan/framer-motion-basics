import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import {motion} from "motion/react"

const parent = {
    start:{rotate:0, scale:0.5},
    end:{
        rotate:360, scale:1.1,
         transition:{ease:'easeInOut', duration:2}
    },
   
}

const LessonFour = () => {
    const parentRef = useRef(null);
    return (
        <div className='border border-red-500  size-[500px] mx-auto flex justify-center items-center ' ref={parentRef}>
            <motion.div 
            className="size-44 bg-indigo-500 rounded-lg mx-auto"
            variants={parent}
            initial="start"
            animate="end"
            drag
            dragConstraints={parentRef}
            dragElastic={0.7}

            ></motion.div>
        </div>
    );
};

export default LessonFour;