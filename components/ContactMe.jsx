"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function ContactMe() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:bralencsundquist@hotmail.com?subject=${formData.subject}
    &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className=" h-screen relative flex flex-col overflow-hidden text-center md:text-left 
      mx-auto items-center md:flex-row px-10 max-w-7xl justify-evenly"
    >
      <div className="absolute top-[150px] flex">
        <motion.h3
          initial={{
            y: -25,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="uppercase tracking-[20px] text-gray-500 text-2xl"
        >
          Contact
        </motion.h3>
        <motion.h3
          initial={{
            y: 25,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" ml-3 uppercase tracking-[20px] text-gray-500 text-2xl"
          //
        >
          Me
        </motion.h3>
        <motion.div
          initial={{
            opacity: 0,
            x: 25,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" absolute right-[343px] w-[2px] h-[32px] bg-white"
        />
        <motion.div
          initial={{
            opacity: 0,
            x: -25,
            y: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" absolute right-0 w-[2px] h-[32px] bg-white"
        />
      </div>

      <div className=" flex flex-col space-y-10">
        <h4 className=" text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className=" decoration-[#023e8a] underline">Let's Talk</span>
        </h4>

        <div className=" space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#a3b18a] h-7 w-7 animate-pulse" />
            <p>52 55 6487 7362</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#a3b18a] h-7 w-7 animate-pulse" />
            <p>bralencsundquist@hotmail.com</p>
          </div>
          {/* <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#a3b18a] h-7 w-7 animate-pulse" />
            <p>52 55 6487 7362</p>
          </div> */}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className=" flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#a3b18a]/80 py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
