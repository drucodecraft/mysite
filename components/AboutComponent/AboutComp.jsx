"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
  let { selected, setSelected } = useStore();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin)},[])
  useEffect(() => {
    const animationList = [];
    if (aboutRef.current) {
      if (selected == 1) {
        const animation = gsap.to(window, {
          scrollTo: {
            y: aboutRef.current,
            offsetY: 50,
          },
          ease: "power2.inOut",
        });
        animationList.push(animation);
      }
    }
    return () => {
      setSelected(0);
      // animationList.forEach((animation) => {
      //   animation.kill();
      // });
    };
  }, [selected]);
  return (
    <div
      ref={aboutRef}
      className={` relative mt-24  bg-zinc-500  flex w-full h-full flex-col pb-10   rounded-t-3xl`}
    >
      <div ref={containerRef} className=" w-11/12 pt-36 pb-24 mx-auto">
        <figure>
          <figcaption className=" flex flex-col gap-2">
            <h3
              ref={titleRef}
              className="  w-8/12 text-center mx-auto text-teal-400 text-3xl font-black"
            >
              A little About Me
            </h3>
            {/* <hr className=" mt-2   shadow-sm border-zinc-50 mx-auto w-4/12" /> */}
            <p
              ref={contentRef}
              className=" mt-5 text-zinc-400 text-center pl-1  mx-auto  text-lg"
            >
              I&apos;m Andrew, a self-taught developer who&apos;s passionate
              about turning ideas into interactive, beautiful web experiences.
              When i&apos;m not coding, you can catch me experimenting with new
              tech.
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="flex  flex-col overflow-hidden  w-11/12  mx-auto rounded-2xl shadow-sm shadow-teal-400 bg-zinc-600 bg-opacity-30  py-4 ">
        <section className=" w-11/12  mx-auto ">
          <ul className=" flex flex-col py-14 gap-20 px-2  ">
            {data.map((content, index) => {
              return (
                <li key={index} className=" ">
                  <figure className="">
                    <figcaption className=" flex  flex-col gap-2 ">
                      {<content.Icon className={` h-10 w-10 text-teal-500`} />}
                      <h3 className=" font-semibold text-white text-xl ">
                        {content.title}
                      </h3>
                      <hr className=" border-t-zinc-400 w-full  my-2 shadow " />
                      <p className=" w-11/12 text-zinc-400 text-lg text-end ml-auto  ">
                        {content.content}
                      </p>
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
