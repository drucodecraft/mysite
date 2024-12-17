"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import useStore from "@/store/useStore";
import gsap from "gsap";

export default function LinksComponent() {
  let { toggle, setSelected, setToggle } = useStore();
  const linksRef = useRef(null);
  const handClick = (value) => {
    setToggle(false);
  };
  useEffect(() => {
    if (linksRef.current) {
      if (toggle) {
        const animation = gsap.to(linksRef.current, {
          display: "flex",
          opacity: 1,
        });
        return () => {
          animation.kill();
        };
      } else {
        const animation = gsap.to(linksRef.current, {
          opacity: 0,
          display: "none",
        });
        return () => {
          animation.kill();
        };
      }
    }
  }, [toggle]);

  return (
    <div
      ref={linksRef}
      style={{ display: "none" }}
      className=" z-20 fixed min-h-screen   left-0 right-0 bg-gray-300 justify-center items-center"
    >
      <section>
        <div className=" flex flex-col gap-8 font-medium text-3xl text-zinc-700">
          <button
            onClick={() => {
              setToggle(false);
              setSelected(1);
            }}
          >
            About Me
          </button>
          <button
            onClick={() => {
              setSelected(2), setToggle(false);
            }}
          >
            Skills
          </button>
        </div>
        <div className=" mt-8 flex flex-col items-center  rounded-t-lg">
          <h3 className=" text-3xl  rounded-b-lg text-center text-zinc-50 font-bold w-8/12 mx-auto">
            Connect with Me
          </h3>
          <hr className=" w-4/12 mt-2 text-center mx-auto border-t-teal-400" />
          <div
            id="icons-links"
            className=" flex items-center mt-4 justify-center gap-2"
          >
            <Link href={"#"}>
              <BsWhatsapp className=" text-zinc-800 w-10 h-10" />
            </Link>
            <Link href={"#"}>
              <BsFacebook className=" text-zinc-800  w-10 h-10" />
            </Link>
            <Link href={"#"}>
              <BsLinkedin className=" text-zinc-800  w-10 h-10" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
