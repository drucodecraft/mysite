import React from "react";
import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("@/comp/timeline/timeline"), {
  ssr: true,
});

export default function About() {
  return (
    <div className="  w-full px-10 lg:px-24 lg:gap-4 min-h-screen justify-center flex flex-col   ">
      <div className=" flex flex-col gap-8 ">
        <div>
          <h3 className={` text-gray-900 text-4xl font-semibold  `}>
            Get To Know Me.
          </h3>
        </div>

        <Timeline />
      </div>
    </div>
  );
}
