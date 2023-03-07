"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  const handleClick = () => {
    window.location.hash = "contact";
  };
  return (
    <header className="sticky p-5 flex items-start justify-between max-w-7xl mx-auto">
      <div className="flex space-x-5">
        <motion.div
          initial={{
            x: -500,
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
          className="hover:mainPageHoverButton border-2 border-[#1d3557] rounded-full"
        >
          <SocialIcon
            url="https://www.linkedin.com/in/bralen-sundquist-3a3a53246/"
            fgColor="gray"
            bgColor="#8ecae6"
          />
        </motion.div>
        <motion.div
          initial={{
            x: -500,
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
          className="hover:mainPageHoverButton border-2 border-[#1d3557] rounded-full"
        >
          <SocialIcon
            url="https://github.com/CodeOnTheWall/"
            fgColor="gray"
            bgColor="#8ecae6"
          />
        </motion.div>
      </div>

      {/* other side of header */}
      <div className="flex md:space-x-5">
        <motion.div
          initial={{
            x: 500,
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
          className=" text-gray-300 cursor-pointer hover:mainPageHoverButton border-2 border-[#1d3557] rounded-full"
        >
          <SocialIcon
            className=" cursor-pointer"
            network="email"
            fgColor="grey"
            bgColor="#8ecae6"
            onClick={handleClick}
          />
        </motion.div>

        <div className="flex items-center">
          <motion.div
            initial={{
              x: 500,
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
            className=" text-gray-300 cursor-pointer "
          >
            {/* hidden on mobile, until md then its inline-flex */}
            <a
              href="#contact"
              className=" uppercase hidden md:inline-flex text-sm text-[#8ecae6] animate-bounce"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 0,
              y: 5,
            }}
            animate={{
              // going to its normal position
              x: 0,
              y: 5,
              opacity: 1,
              scale: 1,
              // rotate: -25,
            }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute top-[50px] hidden md:flex w-[68px] h-[2px] bg-[#1d3557]"
          />
        </div>
      </div>
    </header>
  );
}
