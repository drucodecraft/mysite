"use client";

import React, { useRef } from "react";

export default function Bar({ percentage, skill }) {
  const barRef = useRef(null);
  return (
    <div className=" flex flex-col gap-1">
      <section className=" flex w-full justify-between items-center">
        <p className=" text-gray-600  text-xl drop-shadow-sm font-semibold">
          {skill}
        </p>
        <p className=" text-gray-100">{percentage}%</p>
      </section>
      <section>
        <svg width={"100%"} height={"20"}>
          <rect
            x={0}
            y={0}
            width={"100%"}
            height={20}
            fill="#e0e0e0"
            rx={10}
            ry={10}
          />
          <rect
            ref={barRef}
            x={0}
            y={0}
            height={20}
            rx={10}
            ry={10}
            fill="#00aaff"
            width={`${percentage ? percentage : 0}%`}
          />
        </svg>
      </section>
    </div>
  );
}
