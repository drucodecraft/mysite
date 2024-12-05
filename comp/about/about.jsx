import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useStore from "@/globalState/store";
gsap.registerPlugin(ScrollToPlugin);

const Timeline = dynamic(() => import("@/comp/timeline/timeline"), {
  ssr: true,
});

export default function About() {
  let { selected } = useStore();
  const aboutRef = useRef(null);
  useEffect(() => {
    if (aboutRef.current) {
      const aboutElement = aboutRef.current;
      if (selected === 1) {
        gsap.to(window, {
          scrollTo: aboutElement,
          duration: 2,
          ease: "power2.out",
        });
      }
    }
  }, [selected]);
  return (
    <div
      ref={aboutRef}
      className="  w-full py-20 px-10 lg:px-24 lg:gap-4 min-h-screen justify-center flex flex-col   "
    >
      <div className=" flex flex-col gap-8 ">
        <div>
          <h3 className={` text-slate-700 text-3xl font-semibold  `}>
            Get To Know Me.
          </h3>
        </div>

        <Timeline />
      </div>
    </div>
  );
}
