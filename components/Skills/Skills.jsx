"use client";

import Skill from "./Skill";
import { motion } from "framer-motion";

export default function Skills({ skills }) {
  return (
    <div
      className=" h-screen flex flex-col relative mx-auto text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center"
    >
      <div className="absolute flex top-[10px] md:top-[25px] ">
        <motion.h3
          initial={{
            opacity: 0,
            y: -35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" ml-3 uppercase ] text-[#8ecae6] text-2xl"
          //
        >
          S
        </motion.h3>
        <motion.h3
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.25,
          }}
          className=" ml-3 uppercase  text-[#8ecae6] text-2xl"
          //
        >
          K
        </motion.h3>
        <motion.h3
          initial={{
            opacity: 0,
            y: -25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
          }}
          className=" ml-3 uppercase  text-[#8ecae6] text-2xl"
          //
        >
          I
        </motion.h3>
        <motion.h3
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.75,
          }}
          className=" ml-3 uppercase  text-[#8ecae6] text-2xl"
          //
        >
          L
        </motion.h3>
        <motion.h3
          initial={{
            opacity: 0,
            y: -15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 1,
          }}
          className=" ml-3 uppercase  text-[#8ecae6] text-2xl"
          //
        >
          L
        </motion.h3>
        <motion.h3
          initial={{
            opacity: 0,
            y: -10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 1.25,
          }}
          className=" ml-3 uppercase  text-[#8ecae6] text-2xl"
          //
        >
          S
        </motion.h3>

        {/* coding effect /> */}
        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 1.35,
          }}
          className=" right-[145px] uppercase absolute  text-[#1d3557] text-2xl"
          //
        >
          &lt;
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 1.35,
          }}
          className=" left-[155px] uppercase absolute  text-[#1d3557] text-2xl"
          //
        >
          /&gt;
        </motion.div>
      </div>

      <h3 className=" absolute top-[130px] uppercase tracking-[3px] text-[#8ecae6] text-sm">
        Current Tech Stack Proficiencies
      </h3>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="grid grid-cols-4 gap-5"
      >
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}
