import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDiv";
import MotionImg from "../Motion/MotionImg";

export default function AboutMe({ pageInfoo }) {
  return (
    <div className=" h-screen relative max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center items-center text-center md:text-left">
      {/* TITLE */}
      <div className="absolute flex top-[10px] md:top-[25px] ">
        <MotionDiv
          x={-25}
          duration={1.2}
          delay={1.15}
          useAnimate={false}
          className=" uppercase text-[#1d3557] text-2xl mr-[15px]"
        >
          &#123;/*
        </MotionDiv>
        <MotionTitle y={-25} duration={1.2} className="tracking-[20px]">
          About
        </MotionTitle>
        <MotionTitle y={25} duration={1.2} className="ml-3 tracking-[20px]">
          Me
        </MotionTitle>
        <MotionDiv
          x={25}
          duration={1.2}
          delay={1.15}
          useAnimate={false}
          className="uppercase text-[#1d3557] text-2xl"
        >
          */&#125;
        </MotionDiv>
      </div>
      {/* END TITLE */}

      <div className="flex flex-col md:flex-row relative -bottom-[55px] md:bottom-[50px] items-center ">
        <MotionImg
          x={-200}
          duration={1.2}
          className=" w-[150px] h-[150px] md:w-[250px] md:h-[350px] xl:w-[350px] xl:h-[450px] rounded-full md:rounded-lg object-cover"
          url={pageInfoo.profilePic}
        />
        <MotionDiv
          x={200}
          duration={1.2}
          delay={0}
          className=" space-y-5 md:space-y-10 px-10 md:px-10 mt-3 md:mt-0"
          useAnimate={false}
        >
          <h4 className=" text-2xl md:text-3xl font-semibold">
            Here is a{" "}
            <span className=" underline decoration-[#023e8a]">little</span>{" "}
            background
          </h4>
          <p
            className=" text-left h-[350px] overflow-x-scroll 
        md:scrollbar scrollbar-track-[#8ecae6] scrollbar-thumb-[#023e8a]"
          >
            {pageInfoo.backgroundInformation}
          </p>
        </MotionDiv>
      </div>
    </div>
  );
}
