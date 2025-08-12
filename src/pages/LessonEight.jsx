import React, {  useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import {motion, inView, useInView} from 'motion/react'

const LessonEight = () => {
    const ref = useRef(null);
    const inView = useInView(ref)
    // useEffect(()=>{
    //     inView(ref.current , (info)=>{
    //         console.log("In view" , info)
    //     } )
    // },[])
    return (
       <div>
        <div  className='bg-red-800 h-[200vh]'></div>
         <div className='size-[500px] border border-red-500  flex justify-center items-center  flex-col mx-auto mt-8'>
            <motion.div className='size-40 bg-indigo-500 rounded flex flex-wrap justify-center items-center '
            ref={ref}
            animate={inView?{opacity:1, x:0, transition:{delay:1}}:{opacity:0, x:-500,}}

            ></motion.div>
        </div>
       </div>
    );
};

export default LessonEight;