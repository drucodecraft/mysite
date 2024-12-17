"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useStore from "@/store/useStore";
import React, { useEffect, useRef } from "react";

export default function Skills() {
  const { selected, setSelected } = useStore();

  const skillsRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);
  useEffect(() => {
    const animationList = [];
    if (skillsRef.current) {
      if (selected == 2) {
        const animation = gsap.to(window, {
          scrollTo: {
            y: skillsRef.current,
            offsetY: 50,
          },
          ease: "power2.inOut",
        });
        animationList.push(animation);
      }
    }
    return () => {
      setSelected(0);
      // animationList.forEach((animation) => {
      //   animation.kill();
      // });
    };
  }, [selected]);

  return (
    <div
      ref={skillsRef}
      className=" relative -top-12 rounded-t-3xl h-full flex flex-col gap-8 bg-gray-300 pt-36 pb-18"
    >
      <section className="  w-10/12  flex flex-col gap-2 mx-auto">
        <h3 className=" text-3xl text-center  font-black  text-zinc-600">
          The Magic Behind The Scenes
        </h3>
        <hr className=" shadow-sm border-t-teal-200  mt-2 w-6/12 mx-auto " />
        <p className=" mt-5  text-xl text-center text-zinc-100 ">
          Crafting a seamless web experience requires attetion to both the
          visible and invisible elements. Here&apos;s how i make it all come
          together.
        </p>
      </section>
      <section className="flex rounded-xl overflow-hidden bg-transparent bg-opacity-50 mt-14 py-8 mx-auto h-fit w-11/12 ">
        <ul className=" flex flex-col gap-8    h-fit ">
          <li className=" flex w-full rounded-md bg-gray-100   h-full">
            <figure className="w-11/12 mx-auto ">
              <figcaption className=" pt-20 pb-14   ml-auto px-4 flex flex-col gap-1 ">
                <h3 className=" text-2xl font-semibold text-teal-400 ">
                  <span className=" text-zinc-600 ">Frontend</span>
                  <span className=" text-white">:</span>
                  The Face of the Web
                </h3>

                <p className=" text-lg mt-4 text-zinc-400">
                  I specialize in building responsive, engaging interfaces that
                  users love. Using tools like React for functionality and
                  Tailwind CSS for sharp, modern designs, i bring creativity to
                  life. Whether it&apos;s adding smooth animations with GSAP or
                  ensuring every element looks perfect with clean HTML and CSS,
                  the frontend is where ideas take shape.
                </p>
              </figcaption>
            </figure>
          </li>
          {/* second  */}

          <li className=" flex rounded-md bg-gray-100  h-fit ">
            <figure className=" mx-auto w-11/12 ">
              <figcaption className=" pt-20 pb-14  flex-col flex gap-1   ml-auto px-4 ">
                <h3 className=" text-2xl font-semibold text-teal-400 ">
                  <span className=" text-zinc-600 ">Backend</span>
                  <span className=" text-slate-50">:</span>
                  The Brains of the Operation
                </h3>
                <p className=" text-lg mt-4 text-zinc-400">
                  Behind every great interfaces lies a powerful backend. I use
                  Node.js and Express.js to create efficient, scalable
                  server-side solutions. Databases like MongoDb and MySQL ensure
                  data is handled securely and reliably, while seamless API
                  intergrations connect evrything together, making the
                  experience feel effortless.
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </div>
  );
}
