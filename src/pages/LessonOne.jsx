

// eslint-disable-next-line no-unused-vars
import { motion, spring } from "motion/react"

const LessonOne = () => {
    const initial = {rotate:0};
    const animate = {rotate:360}
    const transition = {type:spring,duration:3}
    return (
        <div>
            <motion.div className='size-44 bg-indigo-500 rounded-lg mx-auto'
            initial={initial}
            animate={animate}
            transition={transition}
           

            ></motion.div>
        </div>
    );
};

export default LessonOne;