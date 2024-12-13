import React, { useRef } from "react";
import { FaRegCommentDots } from "react-icons/fa";
export default function HeroComponent() {
  const hero = useRef(null);

  return (
    <div
      ref={hero}
      className=" relative bg-gradient-to-b w-full bg-black min-h-screen justify-center items-center  flex flex-col "
    >
      <div className=" py-2 mx-auto overflow-hidden absolute bottom-10 flex gap-6 w-11/12  flex-col ">
        <figure>
          <figcaption className="flex flex-col gap-1 ">
            <h3 className="w-11/12 mx-auto  font-semibold text-center text-3xl text-zinc-200">
              <span className=" text-5xl font-black text-indigo-600">
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
              <button className=" outline-indigo-600 outline rounded-md bg-transparent text-gray-200 px-4 py-2">
                Get in Touch
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
