import React from "react";

export default function Skills() {
  return (
    <div className=" relative -top-12 rounded-t-3xl h-full flex flex-col gap-8 bg-black pt-36 pb-18">
      <section className="  w-10/12 mx-auto">
        <h3 className=" text-3xl bg-clip-text text-transparent font-semibold bg-gradient-to-tl from-teal-500 via-teal-600 to-teal-700">
          The Magic Behind The Scenes
        </h3>
        <hr
          className=" w-10/12 mt-2
         border-t-zinc-800 shadow"
        />
        <p className=" mt-4 w-10/12 text-lg text-zinc-400 ">
          Crafting a seamless web experience requires attetion to both the
          visible and invisible elements. Here&apos;s how i make it all come
          together.
        </p>
      </section>
      <section className="flex rounded-xl overflow-hidden bg-gradient-to-tr  from-teal-800  shadow-sm shadow-teal-100 via-teal-700 to-teal-800 mt-14 py-8 mx-auto h-fit w-11/12 ">
        <ul className=" flex flex-col gap-8    h-fit ">
          <li className=" flex  h-fit">
            <figure className=" ">
              <figcaption className=" pt-14 pb-14   ml-auto px-4 ">
                <h3 className=" text-xl font-black text-white ">
                  <span className=" text-slate-900 ">Frontend</span>
                  <span className=" text-white">:</span>
                  The Face of the Web
                </h3>
                <p className=" text-lg mt-4 text-slate-300">
                  I specialize in building responsive, engaging interfaces that
                  users love. Using tools like React for functionality and
                  Tailwind CSS for sharp, modern designs, i bring creativity to
                  life. Whether it&apos;s adding smooth animations with GSAP or
                  ensuring every element looks perfect with clean HTML and CSS,
                  the frontend is where ideas take shape.
                </p>
              </figcaption>
            </figure>
          </li>
          {/* second  */}
          <hr className=" border-t-teal-700 shadow" />
          <li className=" flex  h-fit ">
            <figure className=" ">
              <figcaption className=" pt-14 pb-14    ml-auto px-4 ">
                <h3 className=" text-xl font-black text-white ">
                  <span className=" text-slate-900 ">Backend</span>
                  <span className=" text-white">:</span>
                  The Brains of the Operation
                </h3>
                <p className=" text-lg mt-4 text-slate-300">
                  Behind every great interfaces lies a powerful backend. I use
                  Node.js and Express.js to create efficient, scalable
                  server-side solutions. Databases like MongoDb and MySQL ensure
                  data is handled securely and reliably, while seamless API
                  intergrations connect evrything together, making the
                  experience feel effortless.
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </div>
  );
}
