"use client";

import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";

export default function ExperienceCard({ experience }) {
  return (
    <article
      className=" flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
     snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden\ "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        className="w-[200px] h-32 rounded-full md:rounded-full object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt="MERN stack application"
      />
      {/* DETAILS */}
      <div className="px-0 md:px-10">
        <h4 className=" text-4xl font-light">{experience.jobTitle}</h4>
        <p className=" font-bold text-2xl mt-1">Bralen Sundquist</p>

        <div className=" flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className=" h-[50px] w-120 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>

        <p className=" uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        {/* using index here as sanity didnt give point an id */}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
