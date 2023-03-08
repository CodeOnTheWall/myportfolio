"use client";

import { motion } from "framer-motion";

export default function MotionTitle({
  y,
  duration,
  delay,
  className,
  children,
}) {
  const defaultStyles = "uppercase tracking-[20px] text-[#8ecae6] text-2xl";
  const classes = `${defaultStyles} ${className}`;

  return (
    <motion.h3
      initial={{
        y: y,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: duration,
        delay: delay,
      }}
      className={classes}
    >
      {children}
    </motion.h3>
  );
}
