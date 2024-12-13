import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useStore from "@/store/useStore";
import { FiChevronUp } from "react-icons/fi";

export default function Top() {
  return (
    <div className=" opacity-0 bg-zinc-800 p-2 z-50 fixed bottom-0 right-0">
      <FiChevronUp className=" w-8 text-indigo-600 h-8" />
    </div>
  );
}
