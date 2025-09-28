import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import ScrollFloat from '../components/ScrollFloat'
import GlareHover from '../components/GlareHover'
import ContactForm from "../components/ContactForm";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

const ContactSection = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="contact"
      className="py-12 px-4 md:px-12 text-white min-h-[100vh]"
    >
        <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
        >
            Contact.
        </ScrollFloat>

        <div className="max-w-3xl mt-[7vh] mx-auto grid md:grid-cols-2 gap-8 items-center border-1 border-gray-500 shadow-[inset_2px_2px_18px_rgba(204,204,204,.3)] rounded-xl p-3 md:p-6 backdrop-blur-2xl backdrop-grayscale-3xl">
        {/* Left side - Profile & Info */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: 40 } : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6 , ease: "easeOut" }}
          className="h-full bg-[linear-gradient(120deg,#334155,#0f172a)] rounded-xl p-6 flex flex-col items-center justify-center space-y-6"
        >
          

          {/* Profile Image */}
          <div className="rounded-full overflow-hidden w-44 h-44 border-2 border-white shadow-lg">
          <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <img
                src="./profile.webp"
                alt="PROFILE IMAGE"
                className="w-full h-full object-cover"
              />
          </GlareHover>
            </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4 w-full">
            <a href="tel:+919883391286">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <div className="w-full h-full flex items-center justify-between bg-slate-800 rounded-lg px-4 py-3 rounded-lg border-1 border-gray-500 transition-all duration-300 ease-in-out hover:bg-slate-900">
                  <span className="font-light text-zinc-400">Phone:</span>
                  <span className="font-semibold text-slate-300">+91 9883391286</span>
                </div>
              </GlareHover>
            </a>
            <a href="mailto:sridip2003@gmail.com">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <div className="w-full h-full flex items-center justify-between bg-slate-800 rounded-lg px-4 py-3 rounded-lg border-1 border-gray-500 transition-all duration-300 ease-in-out hover:bg-slate-900">
                  <span className="font-thin text-zinc-400">Email:</span>
                  <span className="font-semibold text-slate-300">sridip2003@gmail.com</span>
                </div>
              </GlareHover>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row space-x-5 text-slate-300">
            <a href="https://github.com/sridip-99" target="_blank" rel="noreferrer">
              <FaGithub className="w-7 h-7 hover:text-purple-700 transition" />
            </a>
            <a href="https://www.linkedin.com/in/sridip-tah99/" target="_blank" rel="noreferrer">
              <FaLinkedin className="w-7 h-7 hover:text-blue-600 transition" />
            </a>
            <a href="https://x.com/tah_sridip" target="_blank" rel="noreferrer">
              <FaTwitter className="w-7 h-7 hover:text-blue-400 transition" />
            </a>
            <a href="https://www.facebook.com/sridip.tah.7" target="_blank" rel="noreferrer">
              <FaFacebook className="w-7 h-7 hover:text-blue-500 transition" />
            </a>
            <a href="https://wa.me/+919883391286" target="_blank" rel="noreferrer">
              <FaWhatsapp className="w-7 h-7 hover:text-green-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right side - Contact Form */}
        <ContactForm/>
      </div>

      {/* Toast container */}
      <Toaster
        toastOptions={{
          success: {
            className: "relative",
            duration: 3000,
          },
        }}
      />
    </section>
  );
};

export default ContactSection;




