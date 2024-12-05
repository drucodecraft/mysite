
'use client'
import dynamic from "next/dynamic";
const HeroSection = dynamic(()=>import("@/comp/hero/hero"),{ssr:true})
const About = dynamic(() =>import("@/comp/about/about"),{ssr:true}
)
const Skills = dynamic(()=>import("@/comp/skills/skills"),{ssr:true});
const Qoute = dynamic(()=>import('@/comp/qoute/qoute'),{ssr:true})
const Projects = dynamic(()=>import("@/comp/projects/projects"),{ssr:true});
const Footer = dynamic(()=>import('@/comp/footer/footer'),{ssr:true})
const ScrollTop = dynamic(()=>import("@/comp/scrollTop/scrolltop"),{ssr:true})
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
    <div className={ ` relative  flex flex-col font-[family-name:var(--font-geist-sans)]`}>
      <HeroSection/>
      <About/>
      <Skills/>
      <Qoute/>
      <Projects/>
     
      <Footer/>
      <ScrollTop/>
      
    </div>
  );
}
