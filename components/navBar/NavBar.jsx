"use client";
import gsap from "gsap";
import useStore from "@/store/useStore";
import React, { useEffect, useRef, useState } from "react";

export default function NavBar() {
  let { toggle, setToggle } = useStore();

  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  const toggleRef = useRef(null);
  useEffect(() => {
    if (toggleRef.current) {
      const toggler = toggleRef.current;
      if (toggle) {
        document.body.style.overflowY = "hidden";
        let animation = gsap.timeline();
        animation.to(toggler.children[0], {
          y: 6,
          duration: 0.05,
          rotate: 45,
        });
        animation.to(
          toggler.children[1],
          {
            opacity: 0,
            duration: 0.05,
          },
          -0.05
        );
        animation.to(
          toggler.children[2],
          {
            y: -6,
            duration: 0.05,
            rotate: -45,
          },
          -0.1
        );
        return () => {
          animation.kill();
        };
      } else {
        document.body.style.overflowY = "scroll";
        let animation = gsap.timeline();
        animation.to(toggler.children[0], {
          y: 0,
          duration: 0.05,
          rotate: 0,
        });
        animation.to(
          toggler.children[1],
          {
            opacity: 1,
            duration: 0.05,
          },
          -0.05
        );
        animation.to(
          toggler.children[2],
          {
            y: 0,
            duration: 0.05,
            rotate: 0,
          },
          -0.1
        );
        return () => {
          animation.kill();
        };
      }
    }
  }, [toggle]);
  return (
    <nav className="z-40 absolute flex w-full pt-4">
      <div className=" w-10/12  mx-auto flex items-center justify-between">
        <div id="navBrand" className="  flex items-center text-2xl font-black">
          <p className=" text-zinc-600 ">Simply</p>
          <p className="  text-zinc-50">Drew</p>
        </div>
        <div
          id="toggler"
          ref={toggleRef}
          onClick={handleToggle}
          className=" py-3 px-2 bg-transparent outline-1 outline outline-zinc-600 bg-opacity-30 rounded-xl flex flex-col gap-1"
        >
          <span className=" h-0.5 w-5 bg-zinc-500"></span>
          <span className=" h-0.5 w-5 bg-zinc-500"></span>
          <span className=" h-0.5 w-5 bg-zinc-500"></span>
        </div>
      </div>
    </nav>
  );
}
