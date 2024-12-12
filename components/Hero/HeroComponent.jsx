import React, { useRef } from "react";
import { FaRegCommentDots } from "react-icons/fa";
export default function HeroComponent() {
  const hero = useRef(null);

  return (
    <div
      ref={hero}
      className=" relative bg-gradient-to-b w-full bg-black min-h-screen justify-center  flex flex-col "
    >
      <div className=" mx-auto overflow-hidden flex gap-6 w-10/12  flex-col ">
        <section className="  flex flex-col gap-2">
          <h4 className="font-light flex flex-wrap  text-sky-600    text-5xl">
            <span className=" text-gray-600 font-bold  "> Frontend</span>
            <span className="font-semibold text-5xl ">Developer</span>
            <span className="text-white">.</span>
          </h4>
          <h1 className="  text-base font-medium text-gray-400 ">
            CRAFTING CLEAN, INTUITIVE, AND RESPONSIVE WEB EXPERIENCES
          </h1>
        </section>
        <section className=" ">
          <button className=" bg-sky-600 py-2 px-6 rounded-xl  flex items-center gap-2">
            <span className=" text-white text-lg font-medium">
              {" "}
              Let&apos;s Talk
            </span>
            <FaRegCommentDots className=" text-gray-100 h-8 w-8" />
          </button>
        </section>
        <section
          id="animated-section "
          className=" font-light text-gray-400  flex-col flex  py-8 "
        >
          <div className=" w-full block">
            <h3 className=" font-semibold text-lg text-sky-600">
              Little About Me
            </h3>
            <p className=" text-lg font-normal">
              I&apos;m Andrew, passionate about creating beautiful,
              user-friendly interfaces. When I&apos;m not coding, you&apos;ll
              find me exploring new tech or enjoying outdoor.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
