import React from "react";

export default function HeroComponent() {
  return (
    <div className=" flex flex-col min-h-screen  bg-black-950 w-full items-center relative bg-gray-200">
      <figure className="absolute w-11/12  bottom-32">
        <figcaption className=" flex flex-col gap-2">
          <h3 className=" text-5xl font-semibold  text-center text-zinc-700">
            <span className=" text-8xl text-teal-400 font-black  ">CODE</span>,{" "}
            <span className="  text-white">Design</span>
            <span className="text-zinc-500">,</span> and Everything in Between
          </h3>
          <p className=" w-10/12 text-center mx-auto text-xl text-zinc-500 ">
            Hi, I Build Things for the Web
          </p>
          <button className=" px-5 py-3 mt-8 mx-auto w-10/12 rounded-md bg-teal-400 text-zinc-50 text-lg font-medium">
            Get To Know Me
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
