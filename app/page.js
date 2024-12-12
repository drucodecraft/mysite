"use client";

import NavBar from "@/components/navBar/NavBar";
import HeroComponent from "@/components/Hero/HeroComponent";
import Top from "@/components/ScrollTopComponent/Top";
import AboutComp from "@/components/AboutComponent/AboutComp";
import Skills from "@/components/skills/skills";
import Qoute from "@/components/qoute/qoute";
import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import Footer from "@/components/footer/footer";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smooth: true,
      smoothTouch: true,

      touchMultiplier: 0.0561,
      infinite: false,

      lerp: 0.0551,
    });
    const animate = (time) => {
      lenis.raf(time);
    };
    requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animate);
      lenis.destroy();
    };
  }, []);
  return (
    <div
      id="parent"
      className="relative overflow-x-hidden bg-gray-900 min-h-full w-full  sm:opacity-0 text-lg flex flex-col"
    >
      <NavBar />
      <HeroComponent />
      <AboutComp />
      <div className="w-10/12 mx-auto bg">
        <hr className=" w-full  border-t-sky-100 border-t-2" />
      </div>
      <Skills />
      <Qoute />
      <ProjectsComponent />
      <Top />
      <Footer />
    </div>
  );
}
