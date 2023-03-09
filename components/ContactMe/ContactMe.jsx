"use client";

import MotionTitle from "../Motion/MotionTitle";
import MotionDiv from "../Motion/MotionDiv";

import { useForm } from "react-hook-form";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function ContactMe() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:bralencsundquist@hotmail.com?subject=${formData.subject}
    &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className=" h-screen flex relative mx-auto items-center max-w-[350px] md:max-w-[800px] lg:max-w-[924px] xl:max-w-[1500px] md:px-8 justify-center">
      <div className="absolute flex top-[10px] md:top-[25px]">
        <MotionDiv
          x={25}
          y={25}
          duration={1.2}
          delay={1.15}
          useAnimate={false}
          className="hidden md:block lowercase text-[#1d3557] text-2xl mr-[15px]"
        >
          git commit -m "
        </MotionDiv>
        <MotionTitle
          y={-25}
          duration={1.2}
          className=" text-2xl md:tracking-[20px]"
        >
          Contact
        </MotionTitle>
        <MotionTitle
          y={25}
          duration={1.2}
          className=" text-2xl md:tracking-[20px] ml-3"
        >
          Me
        </MotionTitle>

        <MotionDiv
          x={-25}
          y={-25}
          duration={1.2}
          delay={1.15}
          useAnimate={false}
          className="hidden md:block lowercase text-[#1d3557] text-2xl"
        >
          "
        </MotionDiv>
      </div>

      <div className="relative -top-[100px] space-y-8 ">
        <div className="flex flex-col md:flex-row">
          <h4 className="text-2xl md:text-4xl font-semibold text-center">
            I have got just what you need.{" "}
          </h4>
          <h4 className="text-2xl md:text-4xl ml-3 decoration-[#023e8a] underline font-semibold text-center">
            Let&apos;s Talk
          </h4>
        </div>

        {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#a3b18a] h-7 w-7 animate-pulse" />
            <p>52 55 6487 7362</p>
          </div> */}
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#a3b18a] h-7 w-7 animate-pulse" />
          <p>bralencsundquist@hotmail.com</p>
        </div>
        {/* <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#a3b18a] h-7 w-7 animate-pulse" />
            <p>52 55 6487 7362</p>
          </div> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-[300px] md:w-fit mx-auto "
        >
          <div className=" flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
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
