"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  w-full    h-full flex-col  flex  bg-gray-200 py-8 text-center justify-center   ">
      <p className=" flex flex-col text-xl">
        <span className=" text-zinc-400 w-10/12 mx-auto">
          Let&apos;s build something amazing together{" "}
        </span>
        <Link
          className=" bg-zinc-800 text-lg px-5 py-3 mt-8 mx-auto w-10/12 rounded-md text-zinc-50 font-medium "
          href={"mailto:codecraftdru@gmail.com"}
        >
          Get in touch!
        </Link>
      </p>
      <p className=" mt-2 text-lg text-zinc-800">
        &copy;{new Date().getUTCFullYear()} SimplyDrew.
      </p>
    </footer>
  );
}
