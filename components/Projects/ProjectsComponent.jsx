import React, { useRef, useEffect } from "react";
import useStore from "@/store/useStore";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
export default function ProjectsComponent() {
  const projectRef = useRef();
  let { selected } = useStore();
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);
  useEffect(() => {
    if (projectRef.current) {
      if (selected === 3) {
        gsap.to(window, {
          scrollTo: projectRef.current,
          duration: 2,
          ease: "power3.inOut",
        });
      }
    }
  }, [selected]);
  return (
    <div ref={projectRef} className=" text-gray-500 px-4 py-20">
      <h2 className=" bg-cyan-500 py-2 rounded-t-xl text-3xl mb-4 font-bold text-center text-white drop-shadow-md">
        Projects
      </h2>
      <p className=" text-gray-600 font-medium text-xl drop-shadow-md">
        I&apos;m currently working on projects that will demonstrate my
        expertise. Stay tuned!
      </p>
    </div>
  );
}
