//import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";

const LessonSix = () => {
  const controls = useAnimationControls();
  // const [toggle, setToggle] = useState(false);
  // const handleToggle = () => {
  //   setToggle(!toggle)
  //   if (toggle) {
  //     controls.start({ x: 200 });
  //   }else{
  //        controls.start({ x: -200 });
  //   }
  // };

  useEffect(()=>{
    controls.start((i)=>({x:200, transition:{delay: i * 2}}))
  },[])


  return (
    <div className="border border-red-500 size-[400px] flex flex-col justify-center items-center mx-auto">
     
     
      <motion.div
        animate={controls}
        custom={1}
        onMouseEnter={()=> controls.stop()}
        className="size-40 bg-indigo-500 rounded-lg flex flex-wrap gap-500"
      ></motion.div>
       <motion.div
        animate={controls}
        custom={2}
        className="size-40 bg-indigo-500 rounded-lg flex flex-wrap gap-500"
      ></motion.div>
       <motion.div
        animate={controls}
        custom={3}
        className="size-40 bg-indigo-500 rounded-lg flex flex-wrap gap-500"
      ></motion.div>
    </div>
  );
};

export default LessonSix;
