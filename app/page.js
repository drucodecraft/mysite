"use client";

import NavBar from "@/components/navBar/NavBar";
import HeroComponent from "@/components/Hero/HeroComponent";
import Top from "@/components/ScrollTopComponent/Top";
import AboutComp from "@/components/AboutComponent/AboutComp";
import Skills from "@/components/skills/skills";
import Qoute from "@/components/qoute/qoute";
import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import Footer from "@/components/footer/footer";
export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-gray-800 min-h-full w-full text-lg flex flex-col">
      <NavBar />
      <HeroComponent />
      <AboutComp />

      <Skills />
      <Qoute />
      <ProjectsComponent />
      <Top />
      <Footer />
    </div>
  );
}
