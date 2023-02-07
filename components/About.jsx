"use client";

import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";

export default function About({ pageInfoo }) {
  return (
    <div className=" h-screen flex flex-col relative mx-auto text-center items-center md:text-left md:flex-row max-w-7xl px-10 justify-center">
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
          About
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
          Me
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
          className=" absolute right-[275px] w-[2px] h-[32px] bg-white"
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

      <motion.img
        src={urlFor(pageInfoo.profilePic).url()}
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        // viewport={{ once: true }}
        className=" mb-7 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[250px] md:h-[350px] xl:w-[500px] xl:h-[600px]"
      />

      <motion.div
        initial={{
          x: 200,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className=" space-y-10 px-0 md:px-10"
      >
        <h4 className=" text-3xl font-semibold">
          Here is a{" "}
          <span className=" underline decoration-[#023e8a]">little</span>{" "}
          background
        </h4>
        <p>{pageInfoo.backgroundInformation}</p>
      </motion.div>
    </div>
  );
}
