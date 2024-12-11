"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useStore from "@/store/useStore";
import { MdPerson, MdCode, MdDesignServices } from "react-icons/md";
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
  let { setDisplayTop, selected } = useStore();

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
  }, [selected]);

  return (
    <div
      ref={aboutRef}
      className=" bg-gradient-to-b bg-gray-900 py-20  flex flex-col gap-4 rounded-t-3xl rounded-b-3xl"
    >
      <section className="px-10 flex w-full text-center justify-start">
        <h3 className=" text-cyan-500 font-semibold text-2xl">
          Behind The Code
        </h3>
      </section>
      <section className="px-8">
        <ul className="  min-h-screen flex flex-col w-full gap-8 ">
          {data.map((content, index) => {
            return (
              <li
                key={index}
                className=" drop-shadow-md px-5 bg-gray-300   py-16 rounded-xl"
              >
                <figure>
                  <figcaption>
                    {
                      <content.Icon
                        className={`w-10 h-10 text-sky-500 drop-shadow-md`}
                      />
                    }
                    <h3 className=" text-lg font-medium  text-gray-900 drop-shadow-sm">
                      {content.title}
                    </h3>
                    <hr className=" drop-shadow-md max-w-8 border-t-sky-500 my-2 " />
                    <p className=" text-gray-600  text-base font-normal drop-shadow-sm">
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
  );
}
