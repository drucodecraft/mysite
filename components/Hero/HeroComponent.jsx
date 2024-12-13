import React from "react";

export default function HeroComponent() {
  return (
    <div
      style={{ height: "100dvh" }}
      className=" flex flex-col w-full items-center relative"
    >
      <figure className="absolute w-11/12  bottom-24">
        <figcaption className=" flex flex-col gap-2">
          <h3 className=" text-7xl font-medium  text-center">
            <span className="text-9xl font-bold text-zinc-100">Code</span>{" "}
            <span className=" text-zinc-500 font-semibold">That Connects</span>
          </h3>
          <p className=" w-10/12 text-center mx-auto text-2xl ">
            Hi, I Build Things for the Web
          </p>
          <button className=" px-5 py-3 rounded-md bg-zinc-900 text-zinc-300 text-lg">
            Get To Know Me
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
