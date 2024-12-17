"use client";

import NavBar from "@/components/navBar/NavBar";
import HeroComponent from "@/components/Hero/HeroComponent";
import Top from "@/components/ScrollTopComponent/Top";
import AboutComp from "@/components/AboutComponent/AboutComp";
import Skills from "@/components/skills/skills";
import LinksComponent from "@/components/navBar/Links/LinksComponent";
import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import Footer from "@/components/footer/footer";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
      className={`relative overflow-x-hidden  min-h-full w-full   text-lg flex flex-col `}
    >
      <div className="absolute xs:z-50 xs:flex opacity-0 xs:bg-black xs:w-full xs:opacity-100 xs:h-full xs:fixed xs:justify-center xs:items-center">
        <section>
          <h2 className=" text-4xl text-center text-slate-300">
            This website is currently optimized for mobile devices only
          </h2>
        </section>
      </div>
      <NavBar />
      <LinksComponent />
      <HeroComponent />
      <AboutComp />
      <Skills />
      <ProjectsComponent />
      {/* <Top /> */}
      <Footer />
    </div>
  );
}
