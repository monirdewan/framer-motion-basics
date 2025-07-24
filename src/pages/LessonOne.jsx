

// eslint-disable-next-line no-unused-vars
import { motion, spring } from "motion/react"


    const parrent= {
    initial : {rotate:0},
    animate : {
        rotate:360,
        transition : {ease:'linear',duration:3, repeat:Infinity}

    },
    
    }
   

const LessonOne = () => {
   
    return (
        <div>
            <motion.div className='size-44 bg-indigo-500 rounded-lg mx-auto'
            variants={parrent}
            initial="initial"
            animate="animate"
            transition="transition"
           

            ></motion.div>
        </div>
    );
};

export default LessonOne;