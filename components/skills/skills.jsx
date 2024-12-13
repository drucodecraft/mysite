"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import useStore from "@/store/useStore";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bar from "@/components/skills/bar/bar";
export default function Skills() {
  return (
    <div className="   w-full  bg-indigo-300   min-h-screen justify-center relative flex flex-col   ">
      <div className={" w-10/12 mx-auto"}>
        <section className=" flex flex-col gap-5  ">
          <div className=" col-span-6  ">
            <p className=" text-zinc-600  text-lg font-normal drop-shadow-sm">
              From Crafting Clean Code To Designing Intuitive User Interfaces,
              My Skillset Is Built For Creating Web Experiences. Here&apos;s A
              Breakdown Of My Expertise.
            </p>
          </div>
          <hr className=" w-full border-t-indigo-200 border-t-2" />
          <div className=" col-span-6  ">
            <ul className=" flex flex-col gap-4 lg:gap-2">
              {[
                { skill: "Frontend", level: 89 },

                { skill: "Backend", level: 47 },
              ].map((skill) => {
                return (
                  <li key={skill.skill}>
                    <Bar percentage={skill.level} skill={skill.skill} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="  flex justify-center">
          <ul className=" flex py-2 px-2  w-full text-base overflow-hidden gap-2 flex-wrap">
            <li
              className=" p-2 rounded-lg border-none bg-indigo-500
          text-red-50
          drop-shadow-md"
            >
              Vanilla JavaScript
            </li>
            <li
              className=" p-2 rounded-lg bg-blue-500
          text-blue-50
          drop-shadow-md"
            >
              React.js
            </li>
            <li
              className=" p-2 rounded-lg bg-green-500
          text-green-50
          drop-shadow-md"
            >
              Next.js
            </li>

            <li
              className=" p-2 rounded-lg bg-yellow-500
          drop-shadow-md
          text-yellow-50"
            >
              HTML
            </li>
            <li
              className=" p-2 rounded-lg bg-purple-500
          text-purple-50
          drop-shadow-md"
            >
              CSS
            </li>

            <li
              className=" p-2 rounded-lg bg-teal-500 text-teal-50
          drop-shadow-md"
            >
              Node.js
            </li>

            <li
              className=" p-2 rounded-lg bg-indigo-500 text-indigo-50
          drop-shadow-md"
            >
              Tailwind
            </li>
            <li className=" p-2 rounded-lg bg-pink-500 text-pink-50 drop-shadow-md">
              Express.js
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
