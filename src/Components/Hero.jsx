import author from "../assets/images/author.png";
import hand from "../assets/icons/hand.svg";
import Skill from "./Skill";
import { MdDownloadForOffline, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

import { NavLink } from "react-router-dom";
const Hero = () => {
  const [show, setShow] = useState(false);

  const handleCvDownload = () => {
    const cvLink = document.createElement("a");
    cvLink.href = "/ChristianEdwin_FullStack_Resume.pdf";
    cvLink.download = "Resume";
    document.body.appendChild(cvLink);
    cvLink.click();
    document.body.removeChild(cvLink);
  };

  return (
    <div className=" w-full relative mt-8">
      <div className="max-w-5xl h-screen mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="max-w-md flex flex-col gap-4 items-start mb-4 md:mb-0">
          <article className=" ">
            <div className="flex gap-4 items-center">
              <h1 className=" text-4xl flex gap-4 ">
                Hello
                <figure className="w-10 h-10 overflow-hidden">
                  <img
                    src={hand}
                    alt="waving"
                    className="object-cover w-full h-full"
                  />
                </figure>
              </h1>
              <h3 className="text-4xl text-amber-800 font-mono font-bold">
                I&apos;m Christian
              </h3>
            </div>

            <p className="text-2xl mt-2">Full-Stack Developer (MERN STACK)</p>
          </article>
          <article className=" text-lg text-neutral-600 font-sans font-medium ">
            <h3>A Full-Stack Based In NIgeria</h3>
            <span className="text-sm">
              Looking for a{" "}
              <strong className="text-amber-800 font-bold text-lg">
                Full-Stack Engineer
              </strong>{" "}
              to bring your fantasies to life,{" "}
              <strong className="text-teal-800 text-lg font-sans font-semibold">
                Optimize your web pages
              </strong>{" "}
              and increase coversion rates?. Well not to tooth my own horns, you
              just found him.
            </span>
            <div className="flex gap-4 items-center mt-4 mx-auto">
              <button
                className="flex gap-1 items-center px-8 py-2 rounded text-sm text-neutral-800 font-medium shadow-md shadow-amber-800/60 hover:shadow-lg hover:shadow-amber-500/50 transition-shadow duration-300 ease-in-out"
                onClick={handleCvDownload}
              >
                <MdDownloadForOffline size={12} />
                Download CV
              </button>
              <button
                className="relative overflow-hidden bg-amber-800 rounded text-white text-sm font-medium px-8 py-2 shadow-md shadow-gray-400 hover:bg-transparent hover:border hover:border-amber-800 hover:-text-white hover:shadow-lg hover:text-amber-700 transition-all duration-300 ease-in-out "
                onClick={() => setShow((prev) => !prev)}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-full flex ga-4 items-center justify-around bg-black/50 transition-all duration-500 ease-in-out ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "-translate-y-4 opacity-0 pointer-events-none"
                  }`}
                >
                  <NavLink to="/contact">
                    <MdEmail
                      size={20}
                      className="hover:text-black-500 transition-colors duration-150 ease-in-out"
                    />
                  </NavLink>

                  <a
                    href="https://wa.link/9mcnyj"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <FaWhatsapp
                      size={20}
                      className="hover:text-green-600 transition-colors duration-150 ease-in-out"
                    />
                  </a>
                </div>
                Hire Me
              </button>
            </div>
          </article>
        </div>
        <div>
          <figure className="flex-1 aspect-square rounded-full overflow-hidden border-2 border-neutral-800 animate-wave shadow-lg drop-shadow-lg shadow-amber-800/50 hover:scale-105 transition-transform duration-200 ease-in-out mb-4">
            <img
              src={author}
              alt="author"
              className="object-cover w-full h-full"
            />
          </figure>
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default Hero;
