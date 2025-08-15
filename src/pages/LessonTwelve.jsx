// eslint-disable-next-line no-unused-vars
import { useMotionValueEvent, useScroll, motion } from 'motion/react';
const LessonTwelve = () => {
    const {scrollY, scrollYProgress} = useScroll();
    useMotionValueEvent(scrollY, "change", (e)=>{
        console.log("Scroll Y",e)
    })
    useMotionValueEvent(scrollYProgress, 'change', (e) =>{
        console.log("Progress",e)
    })
    return (
       <>
       <motion.div className='h-10 w-full fixed top-0 bg-green-500'
       style={{scaleX:scrollYProgress}}
       ></motion.div>
        <div className='bg-red-500 h-[300vh]'>
           
        </div>
       </>
    );
};

export default LessonTwelve;