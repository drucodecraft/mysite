import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Qoute() {
  return (
    <div>
      <section className="  w-full px-10 lg:px-24 lg:gap-4 min-h-screen items-center justify-center flex     ">
        <FaQuoteLeft className={"text-indigo-500 h-16 w-16"} />
        <p className=" max-w-xl font-semibold text-center text-5xl lg:text-7xl text-gray-600">
          The Best Way To Predict The Future Is To Code It
        </p>
        <FaQuoteRight className={"text-indigo-500 h-16 w-16"} />
      </section>
    </div>
  );
}
