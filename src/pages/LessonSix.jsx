import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimationControls } from "motion/react";

const LessonSix = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)
    if (toggle) {
      controls.start({ x: 200 });
    }else{
         controls.start({ x: -200 });
    }
  };

  return (
    <div className="border border-red-500 size-[400px] flex flex-col justify-center items-center mx-auto">
      <button
        onClick={handleToggle}
        className="bg-green-500 mb-10 px-3 py-2 text-white"
      >
        Toggle
      </button>
     
      <motion.div
        animate={controls}
        className="size-40 bg-indigo-500 rounded-lg flex flex-wrap gap-500"
      ></motion.div>
    </div>
  );
};

export default LessonSix;
