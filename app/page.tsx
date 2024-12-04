
'use client'
import dynamic from "next/dynamic";
const HeroSection = dynamic(()=>import("@/comp/hero/hero"),{ssr:true})
const About = dynamic(() =>import("@/comp/about/about"),{ssr:true}
)
const Skills = dynamic(()=>import("@/comp/skills/skills"));
const Qoute = dynamic(()=>import('@/comp/qoute/qoute'))
const Projects = dynamic(()=>import("@/comp/projects/projects"));
const Footer = dynamic(()=>import('@/comp/footer/footer'))
import useStore from '@/globalState/store'
import { useEffect } from "react";
export default function Home() {
  const {toggle} = useStore();
  useEffect(()=>{
    if(toggle){
      document.body.classList.add("overflow-hidden")
    }
    else{
      document.body.classList.remove("overflow-hidden")
    }
  },[toggle])
  
  return (
    <div className={ `   flex flex-col font-[family-name:var(--font-geist-sans)]`}>
      <HeroSection/>
      <About/>
      <Skills/>
      <Qoute/>
      <Projects/>
     
      <Footer/>
      
    </div>
  );
}
