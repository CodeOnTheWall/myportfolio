"use client";

import { motion } from "framer-motion";

export default function MotionDiv({
  x,
  useAnimate,
  duration,
  delay,
  className,
  children,
}) {
  const animationProps = useAnimate
    ? { animate: { x: 0, opacity: 1 } }
    : { whileInView: { x: 0, opacity: 1 } };

  return (
    <motion.div
      initial={{
        x: x,
        opacity: 0,
      }}
      transition={{
        duration: duration,
        delay: delay,
      }}
      {...animationProps}
      className={className}
    >
      {children}
    </motion.div>
  );
}
