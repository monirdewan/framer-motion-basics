// eslint-disable-next-line no-unused-vars
import { useDragControls, motion } from 'motion/react';
import React from 'react';

const LessonTen = () => {
    const controls = useDragControls()
    return (
        <div className='size-[500px] border border-red-500 mx-auto flex justify-center items-center flex-col mt-10' >
            <div className='w-44 h-10 bg-green-500 rounded'
             onPointerDown={(e)=>controls.start(e)}
            ></div>
             <motion.div className='size-44  bg-indigo-500 rounded'
             drag="x"
             dragControls={controls}
             ></motion.div>
        </div>
    );
};

export default LessonTen;