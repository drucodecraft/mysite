"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import useStore from "@/store/useStore";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bar from "@/components/skills/bar/bar";
export default function Skills() {
  let { selected } = useStore();

  const skillsRef = useRef(null);

  useEffect(() => {
    if (skillsRef.current) {
      if (selected === 2) {
        gsap.to(window, {
          scrollTo: skillsRef.current,
          duration: 2,
          ease: "power3.inOut",
        });
      }
    }
  }, [selected]);

  return (
    <div
      ref={skillsRef}
      className="  w-full px-4   min-h-screen justify-center flex flex-col   "
    >
      <section className=" flex flex-col gap-5  ">
        <div className=" ">
          <h2 className={`  text-3xl text-white font-black `}>My Expertise</h2>
        </div>
        <div className=" col-span-6 ">
          <p className=" text-gray-600 font-light text-xl drop-shadow-sm">
            From Crafting Clean Code To Designing Intuitive User Interfaces, My
            Skillset Is Built For Creating Web Experiences. Here&apos;s A
            Breakdown Of My Expertise.
          </p>
        </div>
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
      <hr className="  border-t-gray-900 drop-shadow-lg my-2  flex w-full " />
      <div className="  flex justify-center">
        <ul className=" flex lg:w-fit w-full overflow-hidden gap-2 lg:gap-4 lg:items-center flex-wrap">
          <li
            className=" p-2 rounded-lg bg-blue-500
          text-blue-950
          drop-shadow-md"
          >
            React.js
          </li>
          <li
            className=" p-2 rounded-lg bg-green-500
          text-green-950
          drop-shadow-md"
          >
            Next.js
          </li>

          <li
            className=" p-2 rounded-lg bg-yellow-500
          drop-shadow-md
          text-yellow-950"
          >
            HTML
          </li>
          <li
            className=" p-2 rounded-lg bg-purple-500
          text-purple-950
          drop-shadow-md"
          >
            CSS
          </li>

          <li
            className=" p-2 rounded-lg bg-teal-500 text-teal-950
          drop-shadow-md"
          >
            Node.js
          </li>
          <li
            className=" p-2 rounded-lg bg-red-500
          text-red-950
          drop-shadow-md"
          >
            Vanilla JavaScript
          </li>
          <li
            className=" p-2 rounded-lg bg-indigo-500 text-indigo-950
          drop-shadow-md"
          >
            Tailwind
          </li>
          <li className=" p-2 rounded-lg bg-pink-500 text-pink-950 drop-shadow-md">
            Express.js
          </li>
        </ul>
      </div>
    </div>
  );
}
