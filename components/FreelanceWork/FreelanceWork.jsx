import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDiv";

import FreelanceWorkCard from "./FreelanceWorkCard";

export default function FreelanceWork({ freelances }) {
  return (
    <div
      className=" h-screen relative flex flex-col overflow-hidden text-left mx-auto 
    items-center md:flex-row max-w-full z-0 justify-evenly"
    >
      <div className="absolute flex top-[10px] md:top-[25px]">
        <MotionTitle y={-25} duration={1.2} title="Freelance" />
        <MotionTitle y={25} duration={1.2} title="Work" className="ml-3" />

        {/* coding effect /> */}
        <MotionDiv
          x={-25}
          duration={1.2}
          delay={1.25}
          useAnimate={false}
          className="-left-[30px] uppercase absolute  text-[#1d3557] text-2xl"
        >
          &lt;
        </MotionDiv>
        <MotionDiv
          x={25}
          duration={1.2}
          delay={1.25}
          useAnimate={false}
          className="-right-[25px] uppercase absolute  text-[#1d3557] text-2xl"
        >
          /&gt;
        </MotionDiv>
      </div>

      <div
        className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
       scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#023e8a]/50"
      >
        {freelances?.map((freelance) => (
          <FreelanceWorkCard key={freelance._id} freelance={freelance} />
        ))}
      </div>
    </div>
  );
}
