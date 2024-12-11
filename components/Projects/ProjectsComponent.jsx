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

          ease: "power3.inOut",
        });
      }
    }
  }, [selected]);
  return (
    <div ref={projectRef} className=" bg-gray-800 text-gray-500 px-10 py-20">
      <h2 className=" bg-gray-700 py-2 rounded-t-xl text-2xl mb-4 font-semibold text-center text-white drop-shadow-md">
        Projects
      </h2>
      <p className=" text-gray-600  text-base font-normal drop-shadow-sm">
        I&apos;m currently working on projects that will demonstrate my
        expertise. Stay tuned!
      </p>
    </div>
  );
}
