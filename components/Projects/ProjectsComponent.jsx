"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

export default function ProjectsComponent() {
  const firstContainer = useRef(null);
  const lastContainerRef = useRef(null);
  const wordLastRef = useRef(null);
  const projectGTextRef = useRef(null);
  const middleContainerRef = useRef(null);
  const middleContentRef = useRef(null);
  useEffect(() => {
    if (gsap) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);
  useEffect(() => {
    if (firstContainer.current && projectGTextRef.current) {
      const container = firstContainer.current;
      const text = projectGTextRef.current;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 100%",

          scrub: true,
        },
      });
      timeline.fromTo(
        text,
        { x: "-100%", duration: 1 },
        { x: "0%", duration: 1 }
      );
    }

    if (lastContainerRef.current && wordLastRef.current) {
      const container2 = lastContainerRef.current;
      const text = wordLastRef.current;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container2,
          start: "top 100%",

          scrub: true,
        },
      });
      timeline.fromTo(
        text,
        { x: "100%", duration: 1 },
        { x: "0%", duration: 1 }
      );
    }
  }, []);
  return (
    <div className=" min-h-96  flex flex-col relative bg-gray-200 justify-center">
      <section
        ref={firstContainer}
        className="  w-full relative overflow-hidden h-24 flex   items-end "
      >
        <div
          ref={projectGTextRef}
          className=" absolute text-5xl text-gray-100 whitespace-nowrap font-black left-0"
        >
          <p className=" flex items-center gap-24">
            <span>PROJECTS</span> <span>PROJECTS</span>
            <span>PROJECTS</span> <span>PROJECTS</span>
          </p>
        </div>
      </section>
      <section
        ref={middleContainerRef}
        className=" w-full  relative overflow-hidden h-24 flex  items-center justify-center "
      >
        <div
          ref={middleContentRef}
          className=" mx-auto absolute text-6xl text-gray-100  whitespace-nowrap font-black  "
        >
          <p className=" text-center text-zinc-600 ">COMING</p>
        </div>
      </section>
      <section
        ref={lastContainerRef}
        className="  w-full relative overflow-hidden h-24 flex  items-start justify-center"
      >
        <div
          ref={wordLastRef}
          className=" absolute text-7xl text-gray-100 text-center whitespace-nowrap font-black right-0 "
        >
          <p className=" flex items-center gap-24">
            <span>SOON</span>
            <span>SOON</span>
            <span>SOON</span>
            <span>SOON</span>
            <span>SOON</span>
            <span>SOON</span>
            <span>SOON</span>
            <span>SOON</span>
          </p>
        </div>
      </section>
    </div>
  );
}
