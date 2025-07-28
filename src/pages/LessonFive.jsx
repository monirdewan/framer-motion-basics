import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import {motion} from 'motion/react';

const LessonFive = () => {
    const parentRef = useRef(null)
    const parent = {
        start:{
            rotate:0, x:0, y:0, opacity:0,
        },
        end:{
            rotate:360,
            opacity:1,
             x:[0,200,-200, 0],
              y:[0,200,-200, 0],
            transition:{
                duration:2, ease:"linear", repeat:Infinity,
                opacity:{
                    duration:.2,
                    ease:"linear", repeat:Infinity
                }
            }
        }
    }
    return (
        <div className='border border-red-500 size-[400px] flex justify-center items-center mx-auto' ref={parentRef}>
            <motion.div
             className="size-44 bg-indigo-500 rounded-lg mx-auto"
             variants={parent}
             initial="start"
             animate="end"
             drag
             dragConstraints={parentRef}
             dragElastic={0.7}
             >

            </motion.div>
        </div>
    );
};

export default LessonFive;