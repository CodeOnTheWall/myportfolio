"use client";

// NextJS 13.2 note:
// `<Link>` always renders `<a>` under the hood
/* <Link href="/about">
  About
</Link> */

import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";

export default function FreelanceWorkCard({ freelance }) {
  return (
    <article
      className="relative rounded-lg w-[400px] h-[550px] md:w-[700px] md:h-[500px] flex-shrink-0
      snap-center bg-[#8ecae6]/40 md:hover:opacity-100 md:opacity-40 md:transition-opacity md:duration-200 overflow-hidden
       px-6 md:p-10  "
    >
      <div className="flex flex-col md:flex-row items-center md:justify-evenly mt-3 md:mt-0">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full md:rounded-full object-cover object-center"
          src={urlFor(freelance.companyImage).url()}
          alt="MERN stack application"
        />
        {/* DETAILS */}
        <div className="flex flex-col justify-center text-center space-y-2 md:space-y-3 mt-2 md:mt-0">
          <h4 className=" text-[16px] uppercase md:text-3xl font-light tracking-[5px]">
            {freelance.jobTitle}
          </h4>
          <p className=" font-bold text-2xl mt-1">
            <a href={freelance.url}>{freelance.website}</a>
          </p>
          <p className=" uppercase text-gray-300">
            {new Date(freelance.dateStarted).toDateString()} -{" "}
            {freelance.isCurrentlyWorkingHere
              ? "Present"
              : new Date(freelance.dateEnded).toDateString()}
          </p>
          <div className=" flex md:space-x-2 justify-center">
            {freelance.technologies.map((technology) => (
              <img
                key={technology._id}
                className=" h-[50px] w-[65px] w-120 rounded-full"
                src={urlFor(technology.image).url()}
              />
            ))}
          </div>
        </div>
      </div>
      {/* using index here as sanity didnt give point an id */}
      <ul className="md:list-disc md:space-y-4 ml-5 md:text-lg mt-4 md:mt-8">
        {freelance.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
