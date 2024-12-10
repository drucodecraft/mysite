import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useStore from "@/store/useStore";
import { FiChevronUp } from "react-icons/fi";

export default function Top() {
  const ScrollTopRef = useRef(null);

  let { select, displayScrollTop } = useStore();
  useEffect(() => {
    if (ScrollTopRef.current) {
      const scrollUpElement = ScrollTopRef.current;
      if (displayScrollTop) {
        gsap.to(scrollUpElement, {
          alpha: 1,
          y: 0,
          duration: 1,
          ease: "power4.in",
        });
      } else {
        gsap.to(scrollUpElement, {
          alpha: 0,
          y: scrollUpElement.offsetHeight,
        });
      }
    }
  }, [displayScrollTop]);

  return (
    <div
      onClick={() => {
        gsap.to(window, {
          scrollTo: 0,
          duration: 1.5,
          ease: "power3.in",
        });
      }}
      ref={ScrollTopRef}
      className=" opacity-0 bg-slate-50 p-2 z-50 fixed bottom-0 right-0"
    >
      <FiChevronUp className=" w-8 h-8" />
    </div>
  );
}
