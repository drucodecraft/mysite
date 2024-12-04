import React from "react";
import { MdPerson, MdCode, MdDesignServices } from "react-icons/md";
const timelineData = [
  {
    title: "Personal Background",
    content:
      "I'm a self-taught developer driven by a love for learning and problem-solving. I blend my technical skills and creative vision to craft solutions that resonate. Outside of development, I enjoy exploring how design and functionality intersect in the digital space, always pushing the boundaries of what's possible.",
    Icon: MdPerson,
  },
  {
    title: "My Coding Journey",
    content:
      "Starting with the basics of HTML and CSS, my coding journey has evolved into building complex applications using React and Next.js. Self-driven and resourceful, I've embraced challenges as opportunities to grow and each step has deepened my passion for turning ideas into dynamic web experiences.",
    Icon: MdCode,
  },
  {
    title: "Design Philosophy",
    content:
      "I believe design should be simple yet impactful, emphasizing usability and clarity. Every decision, from layout to typography, is guided by the goal of delivering an intuitive user experience. For me, great design is where creativity and functionality meet, creating harmony between aesthetics and performance.",
    Icon: MdDesignServices,
  },
];
export default function Timeline() {
  return (
    <div className=" relative lg:flex-row flex-col flex gap-4  h-full  items-start ">
      {timelineData.map((data, index) => {
        return (
          <div
            key={index}
            className={`min-h-full relative    w-full lg:w-3/4 `}
          >
            {/* CARDS  */}
            <div
              className={` pr-2 pl-2
               bg-gray-300 shadow-md rounded-lg p-8 lg:border-l-4 drop-shadow-md border-gray-200 lg:border-r-4  relative`}
            >
              {data.Icon ? (
                <data.Icon
                  className={`w-8 h-8 text-indigo-500 drop-shadow-md`}
                />
              ) : (
                ""
              )}
              <h3 className=" text-xl font-semibold text-gray-900 drop-shadow-md">
                {data.title}
              </h3>
              <hr className=" drop-shadow-md max-w-8 border-t-slate-700 my-2 " />
              <p className=" text-gray-600 font-light text-lg drop-shadow-md">
                {data.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
