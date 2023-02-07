"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start xl:items-center justify-between max-w-7xl mx-auto z-20  ">
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
        className="flex flex-row items-center hover:headerButton"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/bralen-sundquist-3a3a53246/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/CodeOnTheWall/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      {/* Contact Me Section */}
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
        className=" flex flex-row items-center text-gray-300 cursor-pointer hover:headerButton"
      >
        <SocialIcon
          className=" cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        {/* hidden on mobile, until md then its inline-flex */}
        <a
          href="#contact"
          className=" uppercase hidden md:inline-flex text-sm text-gray-400 animate-bounce"
        >
          Let&apos;s Talk
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
