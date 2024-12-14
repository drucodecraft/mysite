import React from "react";

export default function NavBar() {
  return (
    <nav className="z-50 absolute flex w-full pt-4">
      <div className=" w-10/12  mx-auto flex items-center justify-between">
        <div id="navBrand" className="  flex items-center text-2xl font-black">
          <p className=" text-zinc-700 ">Simply</p>
          <p className="  text-zinc-300">Drew</p>
        </div>
        <div
          id="toggler"
          className=" py-3 px-2 bg-transparent outline-1 outline outline-zinc-500 bg-opacity-30 rounded-xl flex flex-col gap-1"
        >
          <span className=" h-0.5 w-5 bg-zinc-200"></span>
          <span className=" h-0.5 w-5 bg-zinc-200"></span>
          <span className=" h-0.5 w-5 bg-zinc-200"></span>
        </div>
      </div>
    </nav>
  );
}
