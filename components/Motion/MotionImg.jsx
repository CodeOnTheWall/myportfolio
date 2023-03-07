"use client";

import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";

export default function MotionImg({ x, url, duration, className }) {
  return (
    <motion.img
      src={urlFor(url).url()}
      initial={{
        x: x,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: duration,
      }}
      // viewport={{ once: true }}
      className={className}
    />
  );
}
