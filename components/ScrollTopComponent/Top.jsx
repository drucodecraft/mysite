import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useStore from "@/store/useStore";
import { FiChevronUp } from "react-icons/fi";

export default function Top() {
  const ScrollTopRef = useRef(null);
  let { selected, select, top, setTop, setMoveTo, setClicked } = useStore();
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);
  useEffect(() => {
    if (ScrollTopRef.current) {
      const IconContainer = ScrollTopRef.current;
      gsap.set(IconContainer, { opacity: 0, y: IconContainer.offsetHeight });
      if (top) {
        gsap.to(IconContainer, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.in",
        });
      } else {
        gsap.to(IconContainer, {
          y: IconContainer.offsetHeight,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        });
      }
    }
  }, [top]);
  useEffect(() => {
    if (selected === 0 && top) {
      gsap.to(window, { scrollTo: 0, duration: 1, ease: "sine.in" });
    }
  }, [selected, top]);
  return (
    <div
      ref={ScrollTopRef}
      onClick={() => {
        select(0);
        setMoveTo(0);
        setClicked(false);
      }}
      className=" opacity-0 bg-slate-50 p-2 z-50 fixed bottom-0 right-0"
    >
      <FiChevronUp className=" w-8 h-8" />
    </div>
  );
}
