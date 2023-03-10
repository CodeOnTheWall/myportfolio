import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDiv";

import Skill from "./Skill";
import { motion } from "framer-motion";

export default function Skills({ skills }) {
  return (
    <div className=" h-screen flex relative mx-auto items-center max-w-[350px] md:max-w-[800px] lg:max-w-[924px] xl:max-w-[1500px] md:px-8 justify-center">
      <div className="absolute flex top-[10px] md:top-[25px]">
        <MotionDiv
          x={-25}
          duration={1.2}
          delay={1.15}
          useAnimate={false}
          className=" text-[#1d3557] text-2xl mr-[15px]"
        >
          .map{"("}
        </MotionDiv>
        <MotionTitle
          y={-35}
          duration={1.2}
          className=" tracking-[20px]  md:text-2xl "
        >
          S
        </MotionTitle>
        <MotionTitle
          y={-30}
          duration={1.2}
          delay={0.25}
          className=" tracking-[20px]  md:text-2xl "
        >
          K
        </MotionTitle>
        <MotionTitle
          y={-25}
          duration={1.2}
          delay={0.5}
          className=" tracking-[20px]  md:text-2xl "
        >
          I
        </MotionTitle>
        <MotionTitle
          y={-20}
          duration={1.2}
          delay={0.75}
          className=" tracking-[20px]  md:text-2xl "
        >
          L
        </MotionTitle>
        <MotionTitle
          y={-15}
          duration={1.2}
          delay={1}
          className=" tracking-[20px]  md:text-2xl "
        >
          L
        </MotionTitle>
        <MotionTitle
          y={-10}
          duration={1.2}
          delay={1.25}
          className=" tracking-[20px]  md:text-2xl "
        >
          S
        </MotionTitle>
        <MotionDiv
          x={-25}
          duration={1.2}
          delay={1.15}
          useAnimate={false}
          className="  text-[#1d3557] text-2xl mr-[15px]"
        >
          {")"} =&gt; {"("}
        </MotionDiv>
      </div>

      <div className="relative flex flex-col items-center -top-[125px] md:-top-[75px] w-full ">
        <h3 className=" uppercase tracking-[3px] text-[#8ecae6] text-sm">
          Current Tech Stack Proficiencies
        </h3>
        <MotionDiv
          duration={1.2}
          useAnimate={false}
          className="grid grid-cols-4 md:gap-5 mt-8 md:mt-4"
        >
          {skills.map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </MotionDiv>
      </div>
    </div>
  );
}
