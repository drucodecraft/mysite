import React from "react";

export default function Projects() {
  return (
    <div className=" pb-24 lg:pb-0 w-full px-10 lg:px-24 lg:gap-4 min-h-screen justify-center flex flex-col   ">
      <div className=" ">
        <section className=" flex flex-col  w-full lg:grid lg:grid-cols-12 gap-4 ">
          <div className=" col-span-5 flex flex-col gap-8">
            <h2 className=" text-5xl drop-shadow-md text-gray-900 font-bold">
              Projects In Progress
            </h2>
            <p className=" text-gray-800 font-light text-lg drop-shadow-md">
              Here Are Some Exciting Projects I&apos;m Currently Working On,
              Showcasing My Skills In React, Next.js, And Real-World Application
              Development.
            </p>
          </div>
          <div className=" col-span-7">
            <ul className=" flex lg:flex-row flex-col  gap-2">
              {[
                {
                  title: "E-Commerce App",
                  status: "In Progress",
                  description:
                    "A responsive e-commerce platform with features like product browsing, cart functionality, and user authentication.",
                  techStack: "Next.js, React Redux, Tailwind CSS, TypeScript",
                },
                {
                  title: "Management System",
                  status: "In Progress",
                  description:
                    "A management system for task assignment and real-time updates using Websocket-based communication.",
                  techStack: "Next.js, React,Websocket,Tailwind CSS",
                },
              ].map((project, index) => {
                return (
                  <li
                    key={index}
                    className=" shadow-md rounded-xl bg-gray-300 px-2 py-8"
                  >
                    <figure>
                      <figcaption className=" flex flex-col">
                        <h3 className="font-bold text-lg text-gray-50 drop-shadow-md">
                          {project.title}
                        </h3>
                        <p className=" drop-shadow-md text-sm italic text-gray-500">
                          {project.status}
                        </p>
                        <hr className=" drop-shadow-md border-t-gray-200 w-full my-2" />
                        <p className=" drop-shadow-md text-base text-gray-700 mt-2">
                          {project.description}
                        </p>
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
