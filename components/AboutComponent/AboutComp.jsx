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
    <div ref={aboutRef} className="  bg-sky-600 py-20   rounded-t-3xl ">
      <div className="flex flex-col overflow-hidden gap-4 w-10/12 mx-auto">
        {/* <section className=" flex w-full text-center justify-start flex-wrap">
          <h3 className=" text-sky-50 font-semibold text-4xl">
            Behind The Code
          </h3>
        </section> */}

        <section className="">
          <ul className="  min-h-screen flex flex-col w-full gap-8 ">
            {data.map((content, index) => {
              return (
                <li
                  key={index}
                  className=" drop-shadow-md     py-16 rounded-xl"
                >
                  <figure>
                    <figcaption className=" flex flex-col">
                      {
                        <content.Icon
                          className={`w-20 h-20 text-blue-500 drop-shadow-sm`}
                        />
                      }
                      <h3 className=" text-xl font-semibold  text-gray-700 drop-shadow-sm">
                        {content.title}
                      </h3>
                      <hr className=" drop-shadow-md max-w-8 border-t-sky-500 my-2 " />
                      <p className=" text-gray-100  text-lg font-normal drop-shadow-sm">
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
    </div>
  );
}
