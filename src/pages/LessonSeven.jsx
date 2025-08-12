import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useCycle } from 'motion/react';

const LessonSeven = () => {
    //const [x, cycle] = useCycle(0,100, -100,200, -200)

    const boxAnimation = [
        {x:0 , y:0},
        {x:100 , y:100},
        {x:-100 , y:100},
        {x:-100 , y:-200},
    ]
    const [animation, cycle] = useCycle(...boxAnimation)
    return (
        <div className='border border-red-500 size-[500px] flex justify-center items-center  flex-col mx-auto'>
            <motion.div 
            className='size-44 bg-indigo-500 rounded flex flex-wrap justify-center items-center'
            animate={animation}
            onTap={()=> cycle()}
            >
                
            </motion.div>
        </div>
    );
};

export default LessonSeven;