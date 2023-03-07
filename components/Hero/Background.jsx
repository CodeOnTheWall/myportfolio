"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
        opacity: 0,
      }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
      }}
      className=" relative top-[350px] md:top-[400px] flex justify-center items-center"
    >
      <div className=" absolute border border-[#8ecae6] h-[650px] w-[350px] md:h-[450px] md:w-[700px] opacity-20 animate-pulse " />
      <div className=" absolute border border-[#8ecae6] md:h-[550px] md:w-[850px] opacity-20 animate-pulse" />
      <div className=" absolute border border-[#8ecae6] md:h-[700px] md:w-[1000px] " />
    </motion.div>
  );
}
