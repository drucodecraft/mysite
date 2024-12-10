import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Qoute() {
  return (
    <div>
      <section className="  w-full px-10 lg:px-24 lg:gap-4 h-full items-center justify-center flex     ">
        <FaQuoteLeft className={"text-indigo-500 h-48 w-28"} />
        <p className=" max-w-xl font-semibold text-center text-2xl text-gray-600">
          The Best Way To Predict The Future Is To Code It
        </p>
        <FaQuoteRight className={"text-indigo-500 h-48 w-28"} />
      </section>
    </div>
  );
}
