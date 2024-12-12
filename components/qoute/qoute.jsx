import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Qoute() {
  return (
    <div className=" w-full bg-sky-600">
      <section className="   w-10/12 mx-auto  h-full items-center justify-center flex     ">
        <FaQuoteLeft className={"text-indigo-50 h-48 w-28"} />
        <p className=" max-w-xl font-medium text-center text-xl text-gray-100">
          The Best Way To Predict The Future Is To Code It
        </p>
        <FaQuoteRight className={"text-indigo-50 h-48 w-28"} />
      </section>
    </div>
  );
}
