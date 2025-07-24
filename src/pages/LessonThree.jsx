import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const parent ={
    start:{opacity:0, scale:0.5},
    end:{
        opacity:1,
        scale:1.2,
        transition:{
            ease:'easeInOut',
            duration:2
        }
    }
}

const LessonThree = () => {
    return (
        <div>
            <motion.div
            className="size-44 bg-indigo-500 rounded-lg mx-auto mt-12"
            variants={parent}
            initial="start"
            animate="end"
            whileHover={{scale:1.3}}
            whileTap={{scale:1}}
            onHoverStart={()=>console.log("hover start")}
            onHoverEnd={()=> console.log("hover end")}
            ></motion.div>
        </div>
    );
};

export default LessonThree;