import React from "react";

export default function HeroComponent() {
  return (
    <div
      style={{ height: "100dvh" }}
      className=" flex flex-col bg-black w-full items-center relative"
    >
      <figure className="absolute w-11/12  bottom-24">
        <figcaption className=" flex flex-col gap-2">
          <h3 className=" text-5xl font-medium  text-center text-zinc-600">
            <span className=" text-8xl bg-gradient-to-tl via-teal-500 to-teal-600 from-teal-800 bg-clip-text font-light text-transparent ">
              CODE
            </span>
            , <span className=" font-semibold text-zinc-300">Design</span>
            <span className="text-zinc-500">,</span> and Everything in Between
          </h3>
          <p className=" w-10/12 text-center mx-auto text-xl text-zinc-400 ">
            Hi, I Build Things for the Web
          </p>
          <button className=" px-5 py-3 mx-auto w-10/12 rounded-md bg-teal-400 text-zinc-50 text-lg">
            Get To Know Me
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
