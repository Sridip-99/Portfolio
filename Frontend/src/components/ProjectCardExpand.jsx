import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const ProjectCardExpand = (props) => {
  return (
      <motion.div
        key={props.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-[85%] overflow-hidden p-2 bg-[#d3dfeb1f] backdrop-blur-[60px] backdrop-grayscale-[0.5] shadow-[inset_2px_2px_4px_#ffffff2a] max-w-[1300px] text-center flex flex-col-reverse items-center justify-center gap-5 border mx-auto my-0 rounded-[10px] border-solid border-[#ffffff52] md:flex-row md:p-8"
      >
        {/* Close button */}
        <button
          onClick={props.onClose}
          className="cursor-pointer w-[50px] h-[50px] z-[1000] p-4 absolute top-0 right-0 group rounded-bl-xl flex items-center justify-center border-l-2 border-b-2 border-transparent bg-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-700 hover:border-gray-500"
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="text-xl text-slate-300 font-bold group-hover:text-white"
          />
        </button>

        {/* Text Content */}
        <div className="w-[100%] text-zinc-300 lg:w-[40%]">
          <h2 className="text-xl lg:text-4xl text-left font-semibold text-blue-400 mb-4 md:text-3xl" style={{background: props.bgColor, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            {props.name}
          </h2>
          <p className="text-sm text-left mb-4 md:text-md">{props.about}</p>

          <ul className="text-sm text-start mb-4 md:text-md">
            Tech Stack:
            <li className="overflow-y-auto h-[5vh] text-sm mt-2 flex flex-wrap items-center justify-start gap-2 md:text-md md:overflow-x-auto md:h-[15vh] lg:overflow-none lg:h-[auto]">
              {props.techStack.map((elem, idx) => (
                <span
                  key={idx}
                  className="text-sm font-normal px-2 rounded-2xl bg-slate-800 text-slate-400 md:py-1 md:text-md md:font-semibold"
                >
                  {elem}
                </span>
              ))}
            </li>
          </ul>

          <p className="overflow-y-auto h-[5vh] text-sm text-left mb-4 md:text-md md:overflow-none md:h-[auto]">{props.conclusion}</p>

          <div className="flex justify-start items-center gap-[10px] mt-4">
            <a
              href={props.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-300 bg-slate-800 font-semibold px-3 py-2 rounded-sm border-2 border-gray-500 transition-all duration-300 ease-in-out hover:bg-slate-700 hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="text-slate-400" /> Github
            </a>
            {props.liveLink && (
              <a
                href={props.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-gray-300 rounded-sm border-2 border-gray-500 font-semibold transition-all duration-300 ease-in-out hover:text-white hover:backdrop-blur-2xl"
              >
                Live{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-slate-400"
                />
              </a>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="w-[100%] max-h-[64vh] h-[30vh] overflow-hidden rounded-ss-3xl rounded-ee-3xl rounded-es-md rounded-se-md md:h-[auto] lg:w-[60%]">
          <img
            className="w-[100%] h-auto brightness-95"
            src={props.image}
            alt={props.imgAltText}
          />
        </div>
      </motion.div>
  );
};

export default ProjectCardExpand;
