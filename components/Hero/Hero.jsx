// NextJS 13.2 note about images:
// <Image/> Component
// import Image from "next/image";

"use client";

import Background from "./Background";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import urlFor from "@/lib/urlFor";
import Image from "next/image";

// lets make my image merge in from the left, and the squares (instead of circles merge in from right side of screen)
// then my typewriter will write from the right side of the screen

export default function Hero({ pageInfoo }) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Names's ${pageInfoo.name}`,
      "I love thinking in systems and steps",
      "To make processes smooth and efficient",
      "To build and scale businesses",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <>
      <Background />
      <div className=" h-screen flex flex-col md:justify-center text-center overflow-hidden">
        <div className="relative -bottom-14 md:bottom-[60px] ">
          <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center">
            <motion.div
              initial={{
                x: -25,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                delay: 2,
              }}
            >
              <Image
                width={500}
                height={500}
                className=" h-[200px] w-[200px] rounded-full md:h-[300px] md:w-[250px] md:rounded-lg object-cover"
                // import me1 from "../public/me1.jpg";
                // src={me1}
                src={urlFor(pageInfoo.heroImage).url()}
                alt="Handsome shot of Bralen"
              />
            </motion.div>

            <div className="flex flex-col space-y-4 mt-8 md:mt-0">
              <a href="#about">
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
                  transition={{
                    duration: 2,
                    delay: 2,
                  }}
                  className="heroButton text-black hover:headerButton"
                >
                  About
                </motion.button>
              </a>

              <a href="#freelance">
                <motion.button
                  initial={{
                    y: 50,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    // going to its normal position
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 2,
                    delay: 2,
                  }}
                  className="heroButton text-black hover:headerButton"
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
                  transition={{
                    duration: 2,
                    delay: 2,
                  }}
                  className="heroButton text-black hover:headerButton"
                >
                  Practice Projects
                </motion.button>
              </a>

              <a href="#skills">
                <motion.button
                  initial={{
                    y: -50,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    // going to its normal position
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 2,
                    delay: 2,
                  }}
                  className="heroButton text-black hover:headerButton"
                >
                  Skills
                </motion.button>
              </a>

              <a href="#contact">
                <motion.button
                  initial={{
                    y: -100,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    // going to its normal position
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 2,
                    delay: 2,
                  }}
                  className="heroButton text-black hover:headerButton"
                >
                  Contact Me
                </motion.button>
              </a>
            </div>
          </div>

          <motion.div
            initial={{
              x: -25,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 2,
            }}
            className="relative space-y-2 mt-8 md:mt-5"
          >
            <h2 className="uppercase text-[#8ecae6] md:tracking-[12px]">
              {pageInfoo.role}
            </h2>

            <h2 className=" text-[#8ecae6] text-[18px]">
              <span>{text}</span>
              <Cursor cursorColor="#023e8a" />
            </h2>
          </motion.div>
        </div>
      </div>
    </>
  );
}
