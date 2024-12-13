"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useStore from "@/store/useStore";
import { MdPerson, MdCode, MdDesignServices } from "react-icons/md";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--poppins-",
});
const data = [
  {
    title: "Personal Background",
    content:
      " I'm a self-taught developer driven by a love for learning and problem-solving. I blend my technical skills and creative vision to craft solutions that resonate. Outside of development, I enjoy exploring how design and functionality intersect in the digital space, always pushing the boundaries of what's possible ",
    Icon: MdPerson,
  },
  {
    title: "My Coding Journey",
    content:
      "Starting with the basics of HTML and CSS, my coding journey has evolved into building complex applications using React and Next.js. Self-driven and resourceful, I've embraced challenges as opportunities to grow and each step has deepened my passion for turning ideas into dynamic web experiences.",
    Icon: MdCode,
  },
  {
    title: "Design Philosophy",
    content:
      "  I believe design should be simple yet impactful, emphasizing usability and clarity. Every decision, from layout to typography, is guided by the goal of delivering an intuitive user experience. For me, great design is where creativity and functionality meet, creating harmony between aesthetics and performance.",
    Icon: MdDesignServices,
  },
];

export default function AboutComp() {
  let { setDisplayTop, selected, select } = useStore();

  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (aboutRef.current && gsap) {
      const AboutElement = aboutRef.current;
      gsap.to(AboutElement, {
        scrollTrigger: {
          trigger: AboutElement,
          start: "top 50%",
          end: "bottom 50%",

          onEnter: () => {
            setDisplayTop(true);
          },
          onLeaveBack: () => {
            setDisplayTop(false);
          },
        },
      });
    }
  }, []);
  useEffect(() => {
    if (aboutRef.current) {
      if (selected === 1) {
        gsap.to(window, {
          scrollTo: aboutRef.current,

          ease: "power3.inOut",
        });
      }
    }
    return () => {
      select(0);
    };
  }, [selected]);

  return (
    <div
      ref={aboutRef}
      className={`  bg-indigo-500 flex w-full h-full py-16 rounded-t-3xl ${poppins.className}`}
    >
      <div className="flex flex-col overflow-hidden gap-4 w-11/12 px-2 mx-auto rounded-2xl bg-indigo-400 bg-opacity-65  py-8 ">
        {/* <section className=" flex w-full text-center justify-center flex-wrap">
          <h3 className=" text-zinc-100 font-semibold text-xl">
            Behind The Code
          </h3>
        </section> */}

        <section className="">
          <ul className="  min-h-screen flex flex-col w-full gap-8 ">
            {data.map((content, index) => {
              return (
                <li
                  key={index}
                  className=" w-11/12 pt-4 pb-2 bg-indigo-500 drop-shadow-md mx-auto   rounded-xl"
                >
                  <figure className=" w-11/12 mx-auto">
                    <figcaption className=" flex flex-col">
                      {<content.Icon className={`w-16 h-16 text-blue-500 `} />}
                      <h3 className=" text-xl font-semibold  text-indigo-950 ">
                        {content.title}
                      </h3>
                      <hr className=" drop-shadow-md max-w-8 border-t-sky-500 my-2 " />
                      <p className=" text-indigo-300    ">{content.content}</p>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
