"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

export default function WorkExperience({ experiences }) {
  return (
    <div
      className=" h-screen relative flex flex-col overflow-hidden text-left mx-auto 
    items-center md:flex-row max-w-full z-0 justify-evenly"
    >
      <div className="absolute top-[80px] flex">
        <motion.h3
          initial={{
            y: -25,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="uppercase tracking-[20px] text-gray-500 text-2xl"
        >
          Freelance
        </motion.h3>
        <motion.h3
          initial={{
            y: 25,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" ml-3 uppercase tracking-[20px] text-gray-500 text-2xl"
          //
        >
          Work
        </motion.h3>
        <motion.div
          initial={{
            opacity: 0,
            x: 25,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" absolute right-[480px] w-[2px] h-[32px] bg-white"
        />
        <motion.div
          initial={{
            opacity: 0,
            x: -25,
            y: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" absolute right-0 w-[2px] h-[32px] bg-white"
        />
      </div>

      <div
        className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
       scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#023e8a]/50"
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
