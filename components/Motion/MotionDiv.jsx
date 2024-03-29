"use client";

import { motion } from "framer-motion";

export default function MotionDiv({
  y,
  x = -25,
  useAnimate = false,
  duration = 1.2,
  delay = 1.15,
  className,
  children,
}) {
  const defaultClasses = "uppercase text-[#1d3557] text-2xl";
  const animationProps = useAnimate
    ? { animate: { x: 0, y: 0, opacity: 1 } }
    : { whileInView: { x: 0, y: 0, opacity: 1 } };

  return (
    <motion.div
      initial={{
        y: y,
        x: x,
        opacity: 0,
      }}
      transition={{
        duration: duration,
        delay: delay,
      }}
      {...animationProps}
      className={`${defaultClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
}
