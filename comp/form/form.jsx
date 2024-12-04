import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export default function Form() {
  return (
    <div className="  w-full px-10 lg:px-24 lg:gap-4 min-h-screen justify-center flex flex-col   ">
      <div className=" max-w-192 grid  grid-cols-12 gap-8">
        <section className=" col-span-6">
          <div className=" flex flex-col items-start gap-4">
            <div className=" flex items-start flex-wrap">
              <AiOutlineMail className={"mr-2  h-28 w-28 text-blue-400"} />
              <h3 className=" text-5xl font-semibold text-slate-600 max-w-full">
                Have A Project In Mind Or Just want To Chat?
              </h3>
            </div>
            <hr className=" self-start min-w-32 border-t-slate-800 drop-shadow-md " />
            <p className=" text-slate-400 text-lg font-light">
              Let&apos;s Bring Your Ideas To life Or Simply Connect!
            </p>
          </div>
        </section>
        <section className=" col-span-6">
          <form
            action=""
            className=" min-w-full mx-auto space-y-4 flex flex-col"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="  bg-transparent pl-2 w-full py-1 border text-slate-700 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className=" bg-transparent pl-2 w-full py-1 border text-slate-700 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject"
              className=" bg-transparent pl-2 w-full py-1 border text-slate-700 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name=""
              rows={5}
              placeholder="Your Message"
              className=" resize-none 
            text-slate-700  bg-transparent pl-2 w-full py-1 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className=" outline px-4 py-2 rounded-lg text-blue-500 outline-gray-500 outline-1"
              type="submit"
            >
              Reach Out
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
