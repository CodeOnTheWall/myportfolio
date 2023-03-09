"use client";

import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";

export default function PracticeCard({ project }) {
  return (
    <article
      className="relative rounded-lg w-[400px] h-[550px] md:w-[700px] md:h-[600px] flex-shrink-0
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
          viewport={{ once: true }}
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full md:rounded-full object-cover object-center"
          src={urlFor(project.image).url()}
          alt="MERN stack application"
        />
        {/* DETAILS */}
        <div className="flex flex-col justify-center text-center space-y-2 md:space-y-3 mt-2 md:mt-0">
          <h4 className=" text-[16px] uppercase md:text-3xl font-light tracking-[5px]">
            {project.title}
          </h4>
          <div className=" flex md:space-x-2 justify-center">
            {project.technologies.map((technology) => (
              <img
                key={technology._id}
                className=" h-[50px] w-120 rounded-full"
                src={urlFor(technology.image).url()}
              />
            ))}
          </div>
        </div>
      </div>
      <p
        className="h-[250px] md:h-[300px] px-5 text-lg text-center md:text-left mt-3 md:mt-8
       overflow-y-auto md:scrollbar scrollbar-track-[#e5e5e5] scrollbar-thumb-[#588157]/50"
      >
        {project.summary}
      </p>
    </article>
  );
}
