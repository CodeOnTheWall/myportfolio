"use client";

import { motion } from "framer-motion";

export default function MotionButton({ href, y, title }) {
  return (
    <a href={href}>
      <motion.button
        initial={{
          y: y,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          // going to normal position
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
          delay: 1.75,
        }}
        className="mainPageButton text-black hover:mainPageHoverButton"
      >
        {title}
      </motion.button>
    </a>
  );
}
