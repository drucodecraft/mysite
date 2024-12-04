"use client";

import React, { useRef } from "react";

export default function Bar({ percentage, skill }) {
  const barRef = useRef(null);
  return (
    <div className=" flex flex-col gap-1">
      <section className=" flex w-full justify-between items-center">
        <p className=" font-light text-lg text-gray-600">{skill}</p>
        <p className=" text-gray-800">{percentage}%</p>
      </section>
      <section>
        <svg width={"100%"} height={"20"}>
          <rect
            x={0}
            y={0}
            width={"100%"}
            height={15}
            fill="#e0e0e0"
            rx={10}
            ry={10}
          />
          <rect
            ref={barRef}
            x={0}
            y={0}
            height={15}
            rx={10}
            ry={10}
            fill="#00aaff"
            width={`${percentage}%`}
          />
        </svg>
      </section>
    </div>
  );
}
