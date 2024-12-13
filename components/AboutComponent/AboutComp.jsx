"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useStore from "@/store/useStore";
import { MdLightbulb, MdCode, MdDesignServices } from "react-icons/md";

const data = [
  {
    title: "My Coding Journey",
    content:
      "I started my coding adventure because i was curious about how websites worked-and quickly became obsessed. What began as simple HTML and CSS projects evolved into creating complex, interactive applications with React, Next.js, and more. It's been a thrilling ride of learning, debugging, and finally seeing my work come to life!",
    Icon: MdCode,
  },
  {
    title: "Design Philosophy",
    content:
      "  I think design should be as fun as it is functional. My goal is create websites that are not only visually appealing but also intuitive and user-friendly. Clean, simple, and user-focused bacause a great dsesign should never get in the way of a great experience.",
    Icon: MdDesignServices,
  },
  {
    title: "Why I Love What I Do",
    content:
      "For me, coding is a mix of creativity and problem-solving. Every project is a new puzzle to solve, and i love crafting digital solutions that are both practical and delightful to use. It's all about making the web a little bit better, one line of code at a time.",
    Icon: MdLightbulb,
  },
];

export default function AboutComp() {
  return (
    <div
      className={`  bg-zinc-700 bg-opacity-60 flex w-full h-full flex-col   rounded-t-3xl`}
    >
      <div className=" w-11/12 pt-8 pb-8 mx-auto">
        <figure>
          <figcaption className=" flex flex-col gap-2">
            <h3 className=" text-zinc-900 text-2xl font-bold">
              A little About Me
            </h3>
            <p className=" text-zinc-500 pl-1">
              I&apos;m Andrew-a self-taught developer who&apos;s passionate
              about turning ideas into interactive, beautiful web experiences.
              When i&apos;m not coding, you can catch me experimenting with new
              tech.
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="flex  flex-col overflow-hidden gap-4 w-11/12  mx-auto rounded-2xl bg-gradient-to-tl from-zinc-700 via-zinc-600 to-zinc-800 bg-opacity-65  py-8 ">
        <section className=" w-11/12  mx-auto ">
          <ul className=" flex flex-col pb-4 gap-8 px-2  ">
            {data.map((content, index) => {
              return (
                <li key={index} className=" ">
                  <figure className="">
                    <figcaption className=" ">
                      {<content.Icon className={` h-8 w-8 text-zinc-800`} />}
                      <h3 className=" text-xl ">{content.title}</h3>
                      <hr className=" border-t-zinc-700 w-full my-2  " />
                      <p className=" text-zinc-500  ">{content.content}</p>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div id="bottom space" className=" py-8"></div>
    </div>
  );
}
