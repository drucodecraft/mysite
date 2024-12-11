import React, { useRef } from "react";
import { FaRegCommentDots } from "react-icons/fa";
export default function HeroComponent() {
  const hero = useRef(null);

  return (
    <div
      ref={hero}
      className=" relative bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 min-h-screen  flex flex-col "
    >
      <div className=" absolute bottom-0  flex gap-6 flex-col ">
        <section className=" px-10 flex flex-col gap-2">
          <h4 className="  font-bold  text-white text-5xl">
            Frontend Developer.
            <span className="  "></span>
          </h4>
          <h1 className="  text-lg text-gray-400 ">
            CRAFTING CLEAN, INTUITIVE, AND RESPONSIVE WEB EXPERIENCES
          </h1>
        </section>
        <section className=" px-10">
          <button className=" bg-gray-950 py-2 px-6 rounded-xl  flex items-center gap-2">
            <span className=" text-white text-lg font-medium">
              {" "}
              Let&apos;s Talk
            </span>
            <FaRegCommentDots className=" text-gray-100 h-8 w-8" />
          </button>
        </section>
        <section
          id="animated-section "
          className=" font-light text-gray-400  flex-col flex  py-8 px-10"
        >
          <div className=" w-full block">
            <h3 className=" font-semibold text-lg text-cyan-500">
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
