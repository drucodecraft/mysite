import React from "react";

export default function NavBar() {
  return (
    <nav className=" absolute flex w-full pt-4">
      <div className=" w-11/12  mx-auto flex items-center justify-between">
        <div id="navBrand" className="  flex items-center text-4xl">
          <p className=" text-zinc-600">Simply</p>
          <p className=" font-semibold text-zinc-300">
            Drew<span className=" text-zinc-100 text-5xl">.</span>
          </p>
        </div>
        <div
          id="toggler"
          className=" py-3 px-2 bg-zinc-600 bg-opacity-30 rounded-md flex flex-col gap-1"
        >
          <span className=" h-0.5 w-5 bg-zinc-200"></span>
          <span className=" h-0.5 w-5 bg-zinc-200"></span>
          <span className=" h-0.5 w-5 bg-zinc-200"></span>
        </div>
      </div>
    </nav>
  );
}
