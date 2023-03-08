import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDiv";

import FreelanceWorkCard from "./FreelanceWorkCard";

export default function FreelanceWork({ freelances }) {
  return (
    <div
      // the issue is here
      className=" h-screen relative mx-auto flex justify-center overflow-hidden text-left 
     max-w-7xl"
    >
      {/* TITLE */}
      <div className="absolute flex top-[10px] md:top-[25px]">
        <MotionDiv
          x={-25}
          duration={1.2}
          delay={1.15}
          useAnimate={false}
          className="hidden md:block uppercase text-[#1d3557] text-2xl mr-[15px]"
        >
          &lt;
        </MotionDiv>
        <MotionTitle
          y={-25}
          duration={1.2}
          className=" text-[23px] tracking-[3px] md:text-2xl md:tracking-[20px]"
        >
          Freelance
        </MotionTitle>
        <MotionTitle
          y={25}
          duration={1.2}
          className="ml-3 text-[23px] tracking-[3px] md:text-2xl md:tracking-[20px]"
        >
          Work
        </MotionTitle>
        <MotionDiv
          x={25}
          duration={1.2}
          delay={1.15}
          useAnimate={false}
          className="hidden md:block uppercase text-[#1d3557] text-2xl"
        >
          /&gt;
        </MotionDiv>
      </div>
      {/* END TITLE */}

      <div
        className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
       scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#023e8a]/50
      relative top-[100px] "
      >
        {freelances?.map((freelance) => (
          <FreelanceWorkCard key={freelance._id} freelance={freelance} />
        ))}
      </div>
    </div>
  );
}
