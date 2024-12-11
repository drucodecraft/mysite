import gsap from "gsap";
import { useEffect, useRef } from "react";
import useStore from "@/store/useStore";

export default function NavBar() {
  let {
    toggle,
    toggleActive,

    select,

    setMoveTo,
  } = useStore();
  const handleClick = (value) => {
    select(0);
    select(value);
  };
  const toggleButtonRef = useRef(null);
  const linksComponentRef = useRef(null);
  useEffect(() => {
    if (toggleButtonRef.current && linksComponentRef.current) {
      let LinksComp = linksComponentRef.current;
      let toggleElement = toggleButtonRef.current;
      if (toggle) {
        gsap.to(toggleElement.children[0], { y: 6, rotate: 45 });
        gsap.to(toggleElement.children[1], { opacity: 0 });
        gsap.to(LinksComp, { alpha: 1 });
        gsap.to(toggleElement.children[2], { y: -6, rotate: -45 });
      } else {
        gsap.to(LinksComp, { alpha: 0 });
        gsap.to(toggleElement.children[0], { y: 0, rotate: 0 });
        gsap.to(toggleElement.children[1], { opacity: 1 });
        gsap.to(toggleElement.children[2], { y: 0, rotate: 0 });
      }
    }
  }, [toggle]);

  return (
    <nav className="  fixed z-50 flex flex-col w-full h-fit">
      <section className="flex relative  z-10  px-8 py-6 items-center justify-between">
        <div className=" flex items-center font-bold text-3xl">
          <p className={` text-gray-950 `}>Simply</p>
          <p className=" text-white ">Drew</p>.
        </div>
        <div
          ref={toggleButtonRef}
          onClick={() => {
            if (toggle) {
              toggleActive(false);
            } else {
              toggleActive(true);
            }
          }}
          className={` flex flex-col gap-1 outline outline-gray-400  outline-1 rounded-lg py-2 px-3 `}
        >
          <span className=" bg-gray-300 w-5 h-0.5"></span>
          <span className=" bg-gray-300 w-5 h-0.5"></span>
          <span className=" bg-gray-300 w-5 h-0.5"></span>
        </div>
      </section>
      <section
        ref={linksComponentRef}
        className={` opacity-0  absolute min-h-screen w-full bg-slate-600 flex justify-end `}
      >
        <ul className=" mt-24 mr-8  gap-8 flex flex-col text-xl font-medium text-gray-500 text-end">
          <li
            onClick={() => {
              handleClick(1);
              toggleActive(false);
            }}
          >
            Who Am I
          </li>
          <li
            onClick={() => {
              handleClick(2);
              toggleActive(false);
            }}
          >
            What I Do
          </li>
          <li
            onClick={() => {
              handleClick(3);
              toggleActive(false);
            }}
          >
            ShowCase
          </li>
        </ul>
      </section>
    </nav>
  );
}
