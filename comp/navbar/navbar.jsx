"use client";

import React, { useEffect, useRef } from "react";
import useStore from "@/globalState/store";
import gsap from "gsap";

export default function NavBar() {
  const linksRef = useRef(null);
  const navBarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const { toggle, toggleNav, select, selected } = useStore();
  console.log(selected);

  useEffect(() => {
    if (linksRef.current && toggleButtonRef.current) {
      const buttonElement = toggleButtonRef.current;
      let link_section = linksRef.current;
      if (toggle) {
        gsap.to(link_section, {
          height: "auto",
          duration: 0.5,
          opacity: 1,
          ease: "power2.out",
        });
        gsap.to(buttonElement.children[0], {
          y: 6,
          transformOrigin: "center",
          rotate: -45,
        });
        gsap.to(buttonElement.children[1], {
          opacity: 0,
        });
        gsap.to(buttonElement.children[2], {
          y: -6,
          transformOrigin: "center",
          rotate: 45,
        });
      } else {
        gsap.to(link_section, {
          height: 0,
          duration: 0.5,
          opacity: 0,
          ease: "power2.out",
        });
        gsap.to(buttonElement.children[0], {
          y: 0,
          transformOrigin: "center",
          rotate: 0,
        });
        gsap.to(buttonElement.children[1], {
          opacity: 1,
        });
        gsap.to(buttonElement.children[2], {
          y: 0,
          transformOrigin: "center",
          rotate: 0,
        });
      }
    }
  }, [toggle]);
  useEffect(() => {
    if (navBarRef.current) {
      let navBarSection = navBarRef.current;
      window.addEventListener("scroll", () => {
        if (window.scrollY > navBarSection.offsetHeight) {
          gsap.to(navBarSection, {
            y: -navBarSection.offsetHeight,
            opacity: 0,
            duration: 0.3,
            ease: "power2.Out",
          });
        } else {
          gsap.to(navBarSection, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      });
    }
  }, []);
  useEffect(() => {
    if (linksRef.current) {
      const linksList = linksRef.current.children[0].children;
      const linksArray = [...linksList];
      linksArray.map((linkElement, index) => {
        linkElement.addEventListener("click", () => {
          toggleNav(false);
          select(index + 1);
        });
      });
    }
  }, [selected]);

  return (
    <nav
      className={`   z-50  fixed left-0 flex flex-col right-0 h-fit`}
      ref={navBarRef}
    >
      <section className=" flex items-center justify-between px-10 lg:px-24 py-4">
        <div className=" flex  flex-row items-center text-2xl lg:text-4xl">
          <span>
            {" "}
            <span className=" text-gray-500">simply</span>
            <span className=" font-semibold">drew</span>.
          </span>
        </div>
        <div
          ref={toggleButtonRef}
          className={`${
            toggle ? "outline-2 outline-slate-600" : "outline-1"
          }  flex flex-col gap-1 px-3 outline  rounded-xl outline-gray-800 py-3`}
          onClick={() => {
            if (toggle) {
              toggleNav(false);
            } else {
              toggleNav(true);
            }
          }}
        >
          <span className=" w-5 h-0.5 bg-gray-800"></span>
          <span className=" w-5 h-0.5 bg-gray-800"></span>
          <span className=" w-5 h-0.5 bg-gray-800"></span>
        </div>
      </section>
      <section
        className="  overflow-hidden  bg-gray-900  text-center"
        style={{ height: 0, opacity: 0 }}
        ref={linksRef}
      >
        <ul className=" space-y-4 text-xl text-gray-300 py-20">
          <li>Who Am I</li>
          <li>What I Do</li>
          <li>My Work</li>
          <li>Reach Out</li>
        </ul>
      </section>
    </nav>
  );
}
