import React from "react";
import Image from "next/image";
import { BsFillChatDotsFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div className=" w-full px-10 lg:px-24 lg:gap-4 min-h-screen justify-center flex flex-col gap-2">
      <section className="flex flex-col gap-2 ">
        <span className=" text-2xl lg:text-3xl">
          Hi there, I&apos;m Andrew!
        </span>
        <h1 className=" text-5xl lg:text-7xl font-semibold text-gray-950">
          I Build functional and{" "}
          <span className=" text-slate-600"> visually </span> appealing web
          applications
        </h1>
      </section>
      <section className=" flex flex-col lg:flex-row lg:items-center gap-2">
        <p className=" lg:flex-grow  flex flex-wrap text-gray-500 text-xl lg:text-2xl">
          <span className=" border-slate-500  pr-2 border-r ">
            UI/UX Designer
          </span>
          <span className=" px-2 ">Developer</span>
        </p>
        <span className=" lg:-order-1 lg:flex-grow">
          <button className=" lg:cursor-pointer  lg:justify-center lg:text-2xl border-none rounded-xl w-fit bg-gray-900 py-2 px-4 text-lg text-gray-200 flex items-center gap-1">
            <span>Let&apos;s talk</span> <BsFillChatDotsFill />
          </button>
        </span>
      </section>
    </div>
  );
}
