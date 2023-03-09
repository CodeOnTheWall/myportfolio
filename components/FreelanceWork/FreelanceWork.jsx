import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDiv";

import FreelanceWorkCard from "./FreelanceWorkCard";

// sm: Small screens (min-width: 640px)
// md: Medium screens (min-width: 768px)
// lg: Large screens (min-width: 1024px)
// xl: Extra-large screens (min-width: 1280px)
// 2xl: 2X extra-large screens (min-width: 1536px)

export default function FreelanceWork({ freelances }) {
  return (
    <div className=" h-screen flex relative mx-auto items-center max-w-[350px] md:max-w-[800px] lg:max-w-[924px] xl:max-w-[1500px] md:px-8 justify-center">
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
        className="relative -top-[100px] w-full flex overflow-x-scroll snap-x snap-mandatory
        scrollbar scrollbar-track-[#e5e5e5] scrollbar-thumb-[#588157]/50"
      >
        {freelances.map((freelance) => (
          <FreelanceWorkCard key={freelance._id} freelance={freelance} />
        ))}
      </div>
    </div>
  );
}
