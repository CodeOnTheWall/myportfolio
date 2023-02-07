"use client";

import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";

export default function Skill({ skill }) {
  return (
    <div className=" group relative flex cursor-pointer">
      <motion.img
        src={urlFor(skill.image).url()}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
        }}
        className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  );
}
