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
    <footer className="  w-full    pt-24 pb-12 justify-center flex flex-col bg-black   ">
      <div className=" gap-4 flex flex-col mx-auto w-10/12">
        <section className=" flex   flex-col gap-6 ">
          <article className=" flex-1">
            <p className=" text-center  text-gray-400 text-xl font-light">
              Building Modern Web Experiences With Clean Code And Innovative
              Design.
            </p>
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
          <p className=" text-gray-500 text-center text-base drop-shadow-sm font-normal">
            {" "}
            @2024 Simply Drew. All rights reserved
          </p>
        </section>
      </div>
    </footer>
  );
}
