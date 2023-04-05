"use client";

import { motion } from "framer-motion";

export default function MotionDivParagraph({
  y,
  x,
  useAnimate = false,
  duration = 1.2,
  delay = 0,
  className,
  children,
}) {
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
      className={className}
    >
      {children}
    </motion.div>
  );
}
