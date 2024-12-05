import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import useStore from "@/globalState/store";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function ScrollTop() {
  let { selected, select } = useStore();
  const scrollTopRef = useRef(null);

  useEffect(() => {
    if (selected === 0) {
      gsap.to(window, { scrollTo: { y: 0 }, duration: 2, ease: "power2.out" });
    }
  }, [selected]);
  useEffect(() => {}, []);
  return (
    <div
      ref={scrollTopRef}
      className=" fixed bottom-0 right-0 py-10 px-5 bg-slate-600 bg-opacity-40 z-50"
      onClick={() => {
        select(0);
      }}
    >
      <FaArrowUp className={"h-10 w-6"} />
    </div>
  );
}
