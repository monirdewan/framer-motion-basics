import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
// const parrent = {
//   initial: { rotate: 0, opacity: 0, scale: 0 },
//   animate: {
//     rotate: 360,
//     transition: {
//       ease: "linear",
//       duration: 3,
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//     opacity: 1,
//     scale: 1.5,
//   },
// };

const parrent = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    transition: {
      ease: "linear",
      duration: 3,
      delayChildren:3,
      staggerChildren:1,
    },
    opacity: 1,
    scale: 1.1,
  },
};
const child = {
  initial: { opacity: 0, scale: 0.4 },
  animate: {
    tranisition: {
      ease: "linear",
      duration: 3,
    },
    opacity: 1,
    scale: 1.1,
  },
};
const LessonTwo = () => {
  return (
    <div>
      <motion.div
        className="size-44 bg-indigo-500 rounded-lg mx-auto flex justify-center items-center flex-wrap gap-4"
        variants={parrent}
        initial="initial"
        animate="animate"
        transition="transition"
      >
        <motion.div
          variants={child}
          className="size-14 bg-pink-500 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          className="size-14 bg-pink-500 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          className="size-14 bg-pink-500 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          className="size-14 bg-pink-500 rounded-sm"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default LessonTwo;
