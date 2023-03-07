import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDiv";
import MotionImg from "../Motion/MotionImg";

export default function AboutMe({ pageInfoo }) {
  return (
    <div className=" h-screen relative max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center items-center text-center md:text-left">
      <div className="absolute flex top-[10px] md:top-[25px] ">
        <MotionTitle y={-25} duration={1.2} title="About" />
        <MotionTitle y={25} duration={1.2} title="Me" className="ml-3" />

        {/* coding effect */}
        <MotionDiv
          x={-25}
          duration={1.2}
          delay={1.25}
          useAnimate={false}
          className="right-[285px] uppercase absolute text-[#1d3557] text-2xl"
          children="&#123;/*"
        />
        <MotionDiv
          x={25}
          duration={1.2}
          delay={1.25}
          useAnimate={false}
          className="left-[265px] uppercase absolute text-[#1d3557] text-2xl"
          children="*/&#125;"
        />
      </div>

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
