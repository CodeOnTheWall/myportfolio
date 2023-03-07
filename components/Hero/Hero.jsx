// NextJS 13.2 note about images:
// <Image/> Component
// import Image from "next/image";

import MotionButton from "../Motion/MotionButton";
import MotionDiv from "../Motion/MotionDiv";
import Background from "./Background";
import TypeWriter from "./TypeWriter";

import urlFor from "@/lib/urlFor";
import Image from "next/image";

export default function Hero({ pageInfoo }) {
  return (
    <>
      <Background />
      <div className=" h-screen flex flex-col md:justify-center text-center">
        <div className="relative -bottom-14 md:bottom-[60px] ">
          <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center">
            <MotionDiv x={-25} duration={2} delay={1.75} useAnimate={true}>
              <Image
                width={500}
                height={500}
                className=" h-[200px] w-[200px] rounded-full md:h-[300px] md:w-[250px] md:rounded-lg object-cover"
                // import me1 from "../public/me1.jpg";
                // src={me1}
                src={urlFor(pageInfoo.heroImage).url()}
                alt="Handsome shot of Bralen"
              />
            </MotionDiv>

            <div className="flex flex-col space-y-4 mt-8 md:mt-0">
              <MotionButton href="#about" y={100} title="About" />
              <MotionButton href="#freelance" y={50} title="Freelance Work" />
              <MotionButton href="#projects" y={0} title="Practice Projects" />
              <MotionButton href="#skills" y={-50} title="Skills" />
              <MotionButton href="#contact" y={-100} title="Contact Me" />
            </div>
          </div>

          <MotionDiv
            x={-25}
            duration={2}
            delay={1.75}
            useAnimate={true}
            className="relative space-y-2 mt-8 md:mt-5"
          >
            <h2
              className="uppercase underline decoration-[#1d3557] decoration-2 underline-offset-8 d text-[#8ecae6] md:tracking-[12px]
             first-letter:text-[#1d3557] first-letter:text-[30px]"
            >
              {pageInfoo.role}
            </h2>

            <h2 className=" text-[#8ecae6] text-[18px]">
              <TypeWriter pageInfoo={pageInfoo} />
            </h2>
          </MotionDiv>
        </div>
      </div>
    </>
  );
}
