import MotionDiv from "../Motion/MotionDiv";
import MotionImg from "../Motion/MotionImg";
import MotionTitle from "../Motion/MotionTitle";
import MotionDivParagraph from "../Motion/MotionDivParagraph";

import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const pageInfoQuery = groq`
*[_type == "pageInfo"]{
 ...,
  socials[]->
} | order(_updatedAt desc)`;

export default async function AboutMe() {
  const pageInfo = await client.fetch(pageInfoQuery);
  const pageInfoo = pageInfo[0];

  return (
    <div className=" h-screen relative max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center items-center text-center md:text-left">
      {/* TITLE */}
      <div className="absolute flex top-[10px] md:top-[25px] ">
        <MotionDiv className="mr-[15px]">&#123;/*</MotionDiv>
        <MotionTitle className="tracking-[20px]">About</MotionTitle>
        <MotionTitle y={25} className="ml-3 tracking-[20px]">
          Me
        </MotionTitle>
        <MotionDiv x={25}>*/&#125;</MotionDiv>
      </div>
      {/* END TITLE */}

      <div className="flex flex-col md:flex-row relative -bottom-[55px] md:bottom-[50px] items-center ">
        <MotionImg
          x={-200}
          duration={1.2}
          className=" w-1/3 rounded-full md:rounded-lg object-cover"
          url={pageInfoo.profilePic}
        />
        <MotionDivParagraph
          x={200}
          className=" space-y-5 md:space-y-10 px-10 md:px-10 mt-3 md:mt-0"
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
        </MotionDivParagraph>
      </div>
    </div>
  );
}
