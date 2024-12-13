import React, { useRef, useEffect } from "react";
import useStore from "@/store/useStore";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
export default function ProjectsComponent() {
  return (
    <div className=" bg-sky-600 text-gray-500  py-20">
      <div className=" flex flex-col w-10/12 mx-auto">
        <h2 className=" bg-sky-50 py-2 rounded-t-xl text-2xl mb-4 font-semibold text-center text-sky-600 drop-shadow-md">
          Projects
        </h2>
        <p className=" text-gray-200 text-center text-lg font-normal drop-shadow-sm">
          I&apos;m currently working on projects that will demonstrate my
          expertise. Stay tuned!
        </p>
      </div>
    </div>
  );
}
