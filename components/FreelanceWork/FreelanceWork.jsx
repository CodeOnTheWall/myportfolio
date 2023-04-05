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
    <div className=" h-screen flex relative mx-auto items-center max-w-4/5 px-8 justify-center">
      {/* TITLE */}
      <div className="absolute flex top-[10px] md:top-[25px]">
        <MotionDiv className="hidden md:block mr-[15px]">&lt;</MotionDiv>
        <MotionTitle className=" text-[23px] tracking-[3px] ">
          Freelance
        </MotionTitle>
        <MotionTitle y={25} className="ml-3 text-[23px] tracking-[3px] ">
          Work
        </MotionTitle>
        <MotionDiv x={25} duration={1.2} className="hidden md:block ">
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
