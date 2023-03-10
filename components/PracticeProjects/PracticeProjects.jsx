import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDiv";

import PracticeCard from "./PracticeCard";

export default function PracticeProjects({ projects }) {
  return (
    <div className=" h-screen flex relative mx-auto items-center max-w-[350px] md:max-w-[800px] lg:max-w-[924px] xl:max-w-[1500px] md:px-8 justify-center">
      <div className="absolute flex top-[10px] md:top-[25px]">
        <MotionDiv
          x={-25}
          duration={1.2}
          delay={1.15}
          useAnimate={false}
          className="hidden md:block uppercase text-[#1d3557] text-2xl mr-[15px]"
        >
          return{"("}
        </MotionDiv>
        <MotionTitle y={-25} duration={1.2} className="  md:text-2xl ">
          Practice
        </MotionTitle>
        <MotionTitle y={25} duration={1.2} className="ml-3  md:text-2xl ">
          Projects
        </MotionTitle>
        <MotionDiv
          x={25}
          duration={1.2}
          delay={1.15}
          useAnimate={false}
          className="hidden md:block uppercase text-[#1d3557] text-2xl"
        >
          {")"}
        </MotionDiv>
      </div>

      <div
        className="relative -top-[100px] md:-top-[50px] w-full flex overflow-x-scroll snap-x snap-mandatory
        scrollbar scrollbar-track-[#e5e5e5] scrollbar-thumb-[#588157]/50"
      >
        {projects?.map((project) => (
          <PracticeCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
