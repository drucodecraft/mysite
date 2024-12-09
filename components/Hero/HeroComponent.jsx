import React, { useEffect, useRef, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
export default function HeroComponent() {
  const hero = useRef(null);

  return (
    <div ref={hero} className=" min-h-screen justify-center flex flex-col px-4">
      <div className=" flex w-full gap-6 flex-col">
        <section className=" flex flex-col gap-2">
          <h4 className="  font-semibold text-gray-600 text-xl">
            Hello, I'm{" "}
            <span className="italic font-medium text-white  px-2 py-2 bg-cyan-500 rounded-xl">
              Andrew
            </span>
            <span className=" text-white text-2xl">!</span>
          </h4>
          <h1 className=" text-white text-5xl font-black">
            I Build Functional And{" "}
            <span className=" text-cyan-400">Visually</span> Appealing Web
            Applications
          </h1>
        </section>
        <section>
          <button className=" py-2 px-6 rounded-xl bg-cyan-500 text-gray-100 flex items-center gap-2">
            <span className=" text-xl font-semibold"> Let's Talk</span>
            <FaRegCommentDots className=" h-8 w-8" />
          </button>
        </section>
      </div>
    </div>
  );
}
