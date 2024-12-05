import React, { useEffect, useRef } from "react";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import useStore from "@/globalState/store";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
export default function Footer() {
  let { selected } = useStore();
  const footerRef = useRef(null);
  useEffect(() => {
    if (footerRef.current) {
      const footerElement = footerRef.current;
      if (selected === 4) {
        gsap.to(window, {
          scrollTo: footerElement,
          duration: 2,
          ease: "power2.out",
        });
      }
    }
  }, [selected]);
  return (
    <footer
      ref={footerRef}
      className=" bg-gray-900  w-full px-10 lg:px-24  pt-24 pb-12 justify-center flex flex-col   "
    >
      <div className=" gap-4 flex flex-col">
        <section className=" flex   flex-col lg:flex-row gap-5 ">
          <article className=" flex-1">
            <p className=" text-center lg:text-start text-slate-300 text-3xl">
              Building modern web experiences with clean code and innovative
              design.
            </p>
          </article>
          <article className="flex-1 ">
            <ul className=" text-center">
              {[
                {
                  link: "Who I Am",
                },

                { link: "What I Do" },
                { link: "My Work" },
                { link: "Reach Out" },
              ].map((link, index) => {
                return (
                  <li
                    className=" drop-shadow-sm text-lg text-blue-500  lg:cursor-pointer"
                    key={index}
                  >
                    <p>{link.link}</p>
                  </li>
                );
              })}
            </ul>
          </article>
          <article className=" flex-1   ">
            <div className=" flex flex-row justify-center gap-2 h-full items-center ">
              <FaFacebook
                className={
                  "min-w-10 min-h-10 drop-shadow-md text-indigo-700 lg:hover:scale-105 lg:hover:drop-shadow-lg  cursor-pointer"
                }
              />
              <FaWhatsapp
                className={
                  "min-w-10 min-h-10 drop-shadow-md text-indigo-700  lg:hover:scale-105 cursor-pointer lg:hover:drop-shadow-lg "
                }
              />
              <FaLinkedin
                className={
                  "min-w-10 min-h-10 drop-shadow-md text-indigo-700 lg:hover:scale-105 cursor-pointer lg:hover:drop-shadow-lg "
                }
              />
            </div>
          </article>
        </section>
        <section className=" flex w-full justify-center">
          <p className=" text-gray-500 text-center text-lg drop-shadow-md">
            {" "}
            @2024 Simply Drew. All rights reserved
          </p>
        </section>
      </div>
    </footer>
  );
}
