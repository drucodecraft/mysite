import React from "react";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-gray-950  w-full px-10 lg:px-24  pt-24 pb-12 justify-center flex flex-col   ">
      <div className=" gap-4 flex flex-col">
        <section className=" flex   flex-col lg:flex-row gap-5 ">
          <article className=" flex-1">
            <p className=" text-center lg:text-start text-slate-300 text-4xl">
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
                {
                  link: "Let's Connect",
                },
                { link: "What I Do" },
                { link: "Showcase" },
              ].map((link, index) => {
                return (
                  <li
                    className=" drop-shadow-sm text-lg text-blue-500 underline underline-offset-2 decoration-blue-300  lg:hover:underline-offset-4 lg:cursor-pointer"
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
