"use client";
import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  w-full px-10 lg:px-24  pt-24 pb-12 justify-center flex flex-col bg-gray-900   ">
      <div className=" gap-4 flex flex-col">
        <section className=" flex   flex-col gap-6 ">
          <article className=" flex-1">
            <p className=" text-center  text-gray-400 text-3xl font-semibold">
              Building Modern Web Experiences With Clean Code And Innovative
              Design.
            </p>
          </article>
          <article className="flex-1 flex w-full justify-center ">
            <button className=" py-2 px-6 rounded-xl bg-gray-950 text-gray-600 flex items-center gap-2 text-xl font-semibold">
              <span>Email Me</span>
              <FaRegEnvelope className="  text-cyan-700 h-8 w-8" />
            </button>
          </article>
          <article className=" flex-1   ">
            <div className=" flex flex-row justify-center gap-2 h-full items-center ">
              <FaFacebook
                className={
                  "min-w-10 min-h-10 drop-shadow-md text-white cursor-pointer"
                }
              />
              <FaWhatsapp
                className={"min-w-10 min-h-10 drop-shadow-md text-white  "}
              />
              <FaLinkedin
                className={"min-w-10 min-h-10 drop-shadow-md text-white  "}
              />
            </div>
          </article>
        </section>
        <section className=" flex w-full justify-center">
          <p className=" text-gray-700 text-center text-lg drop-shadow-sm font-medium">
            {" "}
            @2024 Simply Drew. All rights reserved
          </p>
        </section>
      </div>
    </footer>
  );
}
