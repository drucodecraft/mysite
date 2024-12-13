import React, { useEffect, useRef } from "react";
import { FaRegCommentDots } from "react-icons/fa";
export default function HeroComponent() {
  const heroRef = useRef(null);

  useEffect(() => {
    const setHeight = () => {
      if (heroRef.current) {
        heroRef.current.style.height = `${window.innerHeight}px`;
      }
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className=" relative bg-gradient-to-b w-full bg-black  justify-center  items-center  flex flex-col "
    >
      <div className=" py-2 mx-auto overflow-hidden absolute  bottom-20 flex gap-6 w-11/12  flex-col ">
        <figure>
          <figcaption className="flex flex-col gap-1 ">
            <h3 className=" mx-auto  font-semibold text-center text-4xl text-zinc-200">
              <span className=" text-5xl font-light text-zinc-900">
                CRAFTING
              </span>{" "}
              Digital Solutions with Precision and Creativity
            </h3>
            <p className=" w-10/12 text-center mx-auto text-zinc-700">
              Welcome! I&apos;m Andrew, a developer focused on crafting
              efficient and user-centric web solutions. Explore my portfolio to
              see my work and skills in action.
            </p>
            <div className=" mt-4 w-full justify-center flex h-fit">
              <button className=" outline-zinc-400 outline rounded-md bg-transparent text-gray-200 px-4 py-2">
                Get in Touch
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
