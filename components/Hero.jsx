"use client";

import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import urlFor from "@/lib/urlFor";

// lets make my image merge in from the left, and the squares (instead of circles merge in from right side of screen)
// then my typewriter will write from the right side of the screen

function Hero({ pageInfoo }) {
  // console.log(pageInfoo);
  // console.log(pageInfoo.heroImage);
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Names's ${pageInfoo.name}`,
      "I love thinking in systems and steps",
      "To make processes smooth and efficient",
      "To build and scale businesses",
    ],
    loop: true,
    delaySpeed: 500,
  });

  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        // import me1 from "../public/me1.jpg";
        // src={me1}
        src={urlFor(pageInfoo.heroImage).url()}
        alt="Handsome shot of Bralen"
      />
      <div className="z-20">
        <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          {pageInfoo.role}
        </h2>

        <h1 className=" text-3xl lg:text-4xl font-semibold px-10">
          <span className=" mr-3">{text}</span>
          <Cursor cursorColor="#023e8a" />
        </h1>

        <div className=" pt-5 ">
          <a href="#about">
            <motion.button
              initial={{
                x: -100,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                // going to its normal position
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1.5 }}
              className="heroButton"
            >
              About
            </motion.button>
          </a>

          <a href="#freelance">
            <motion.button
              initial={{
                y: 100,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                // going to its normal position
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1.5 }}
              className="heroButton"
            >
              Freelance Work
            </motion.button>
          </a>

          <a href="#projects">
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1.5 }}
              className="heroButton"
            >
              Practice Projects
            </motion.button>
          </a>

          <a href="#skills">
            <motion.button
              initial={{
                y: 100,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                // going to its normal position
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1.5 }}
              className="heroButton"
            >
              Skills
            </motion.button>{" "}
          </a>

          <a href="#contact">
            <motion.button
              initial={{
                x: 100,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                // going to its normal position
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1.5 }}
              className="heroButton"
            >
              Contact Me
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
