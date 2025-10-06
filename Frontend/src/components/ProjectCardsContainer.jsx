import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedContent from "./AnimatedContent.jsx";
import DecryptedText from "./DecryptedText.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import ProjectCard from "./ProjectCard.jsx";
import ProjectCardExpand from "./ProjectCardExpand.jsx";

const ProjectCardsContainer = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const projects = [
    {
        "id": "container1",
        "name" : "Epidemic Prediction",
        "bgColor" : "linear-gradient(135deg, #00b8ff 0%, #7ed957 100%)",
        "image" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/projects/proj-1.webp",
        "imgAltText" : "Full-stack + ML Project image",
        "about" : "Epidemic Prediction Web App: A Django-based full-stack project using Machine Learning (Random Forest) to predict epidemic growth. Accepts inputs like location, population density, and traveler ratios. Features dynamic graphs, WHO-guided thresholds, and an interactive UI for public health analysis and prediction.",
        "type" : "Full-stack + ML Project",
        "techStack" : ["HTML","CSS","Js","Django","SQLite","Random Forest Regression","Random Forest Classification","Colab", "Numpy","Pandas","Scikit-Learn","Authentication","Authorization","System Design","Git","Github"],
        "conclusion" : "The Epidemic Prediction Web App successfully fuses full-stack development and advanced machine learning to create a vital tool for public health preparedness.",
        "liveLink": null,
        "repoLink": "https://github.com/Sridip-99/Epidemic-Prediction-Web-Application",
    },
    {
        "id": "container2",
        "name" : "Puja Beauty Studio",
        "bgColor" : "linear-gradient(135deg, #ff9ceb 0%, #5900a8 100%)",
        "image" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/projects/proj-2.webp",
        "imgAltText" : "Puja Beauty Studio Project image",
        "about" : "Responsive Front-End project for store recognition to attract customer.",
        "type" : "Front-End Project",
        "techStack" : ["HTML","CSS","JS","Git","Github","Netlify"],
        "conclusion" : "The Puja Beauty Studio project successfully delivers a highly professional and responsive digital storefront that significantly enhances brand recognition.",
        "liveLink": "https://pujabeautystudio.netlify.app/",
        "repoLink": "https://github.com/Sridip-99/Puja-Beauty-Studio",
    },
    {
        "id": "container3",
        "name" : "SecPDF",
        "bgColor" : "linear-gradient(135deg, #a6fdb8 0%, #00ff6e 100%)",
        "image" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/projects/proj-3.webp",
        "imgAltText" : "SecPDF Project image",
        "about" : "A Django Web Application to create password protected PDF files",
        "type" : "Full-Stack + Cybersecurity Project",
        "techStack" : ["HTML","CSS","Django","PyPDF2","Git","Github","Render"],
        "conclusion" : "The SecPDF project successfully delivers a secure and accessible web solution for protecting sensitive documents.",
        "liveLink": "https://securepdf-np2x.onrender.com/",
        "repoLink": "https://github.com/Sridip-99/Secpdf",
    },
    {
        "id": "container4",
        "name" : "HTTP Traffic Analysis",
        "bgColor" : "linear-gradient(135deg, #2b48caff 0%, #8df95f 100%)",
        "image" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/projects/proj-4.webp",
        "imgAltText" : "Wireshark HTTP Traffic Analysis Project image",
        "about" : "Computer Network Protocol Understanding and creating Markdown report",
        "type" : "Network Protocol Understanding",
        "techStack" : ["HTTP Protocol","Wireshark", "MaxMind GeoIP"],
        "conclusion" : "The HTTP Traffic Analysis using Wireshark & MaxMind GeoIP project successfully delivers a comprehensive methodology for network protocol understanding and traffic forensics.",
        "liveLink": null,
        "repoLink": "https://github.com/Sridip-99/Wireshark-Packet-Analysis-/tree/main/HTTP%20Analysis",
    },
    {
        "id": "container5",
        "name" : "Password-Cracker",
        "bgColor" : "linear-gradient(135deg, #ed1b34 0%, #f36878ff 100%)",
        "image" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/projects/proj-5.webp",
        "imgAltText" : "Password-Cracker Project image",
        "about" : "A simple Python-based password cracker for ZIP and PDF files using wordlist (Brute-force dictionary) attacks. Includes a multithreaded PDF cracker for faster performance. Built for ethical hacking and cybersecurity learning.",
        "type" : "CyberSecurity Project",
        "techStack" : ["Python","pikepdf","zipfile","Scripting","Dictionary attack","Github"],
        "conclusion" : "The Password Cracker project successfully serves as a powerful, yet simple, educational tool for understanding the mechanics of dictionary-based brute-force attacks.",
        "liveLink": null,
        "repoLink": "https://github.com/Sridip-99/Password-Cracker",
    },
    {
        "id": "container6",
        "name" : "Tic-Tac-Toe",
        "bgColor" : "linear-gradient(90deg, #f4b842 0%, #df3c81 25%, #63bce4 50%, #97c985 75%, #ffeb3bff 100%)",
        "image" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/projects/proj-6.webp",
        "imgAltText" : " Project image",
        "about" : "A simple tic-tac-toe game made using Javascript (learning purpose)",
        "type" : "Front-End (Game) Project",
        "techStack" : ["HTML","CSS","JS","Github","Netlify"],
        "conclusion" : "The Tic-Tac-Toe JS Game successfully serves as an effective hands-on learning exercise for mastering foundational front-end development concepts.",
        "liveLink": "https://circle-cross-circle.netlify.app/",
        "repoLink": "https://github.com/Sridip-99/TIC-TAC-TOE",
    }
  ];

  const handleExpand = (cardData) => {
    setExpandedCard(cardData);
    document.body.style.overflow = "hidden"; // disable scroll when expanded
  };

  const handleCloseExpand = () => {
    setExpandedCard(null);
    document.body.style.overflow = "auto"; // enable scroll back
  };

  return (
    <>
      {/* Grid of project cards */}
      <div className="container-grid z-10 pb-[2rem]">
        {projects.map((elem, idx) => (
          <AnimatedContent
            key={elem.id}
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0.5}
            animateOpacity
            scale={0.8}
            threshold={0.1}
            delay={0 + (idx >= 3 ? (idx - 3) * 0.15 : idx * 0.15)}
          >
            <ProjectCard {...elem} onExpand={handleExpand} isExpanded={false} />
          </AnimatedContent>
        ))}
      </div>

      {/* Overlay Expanded Card */}
      {expandedCard && (
        <AnimatePresence>
            <motion.div
            key="expanded-card"
            className="fixed inset-0 z-[999] py-4 flex items-end justify-end bg-black/70 backdrop-blur-sm md:p-4 md:items-center md:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            <ProjectCardExpand {...expandedCard} onClose={handleCloseExpand} />
            </motion.div>
        </AnimatePresence>
        )}
      
      <div className="max-w-[1100px] m-auto rounded-md bg-[#0000007f] text-center lg:text-left">
        <p className="py-1 px-2 m-0 rounded-md backdrop-blur-2xl text-xl md:text-3xl">
          <DecryptedText
            text="Checkout my "
            speed={60}
            animateOn="view"
            revealDirection="left"
            maxIterations={5}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
          <a
            href="https://github.com/Sridip-99"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-slate-400 transition-all ease-in-out duration-300 hover:text-slate-300"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="group-hover:text-slate-300"
            />
            <DecryptedText
              text="Github"
              speed={60}
              animateOn="view"
              revealDirection="left"
              maxIterations={5}
              characters="ABCD1234!?"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </a>
          <DecryptedText
            text=" for more Projects..."
            speed={60}
            animateOn="view"
            revealDirection="left"
            maxIterations={5}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </p>
      </div>
    </>
  );
};

export default ProjectCardsContainer;








