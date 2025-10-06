import React, { useState, useEffect } from 'react'
// import Aurora from '../components/Aurora'
// import SplashCursor from '../components/SplashCursor'
const Aurora = React.lazy(() => import("../components/Aurora"));
const SplashCursor = React.lazy(() => import("../components/SplashCursor"));

function useIsTablet(breakpoint = 768) {
  const [isTablet, setIsTablet] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isTablet;
}

const Hero = () => {
  const isTablet = useIsTablet();
  const isHighPerf = window.navigator.hardwareConcurrency > 6;
  return (
    <>
      <section id='hero' className='flex justify-center items-center h-screen w-full overflow-hidden relative bg-[rgb(6,0,16)]'>
      {!isTablet && isHighPerf && <SplashCursor />}
      {!isTablet && (
        <Aurora
          colorStops={["#3a506b", "#5bc0be", "#1c2541"]}
          blend={0.25}
          amplitude={1.0}
          speed={0.25}
        />
      )}

      <div className='z-50 h-[80vh] md:h-fit mb-30 md:mb-0 relative md:absolute top-[15vh] md:top-[25vh] max-w-[1100px] w-full mx-auto flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-[20px] px-2 md:px-0'>
        <div className='w-full md:w-[55%] h-fit md:h-[60vh] flex flex-col justify-center items-start gap-2 md:gap-4 text-gray-100'>
          <h2 className="text-4xl md:text-5xl text-left text-slate-100 font-bold mx-10">Sridip Tah</h2>
          <div className="role-container">
              <h3 className="role-text text-lg md:text-2xl text-left text-verdigris mx-10 min-h-[2.5em] transition-opacity duration-500">
                <span>Full-Stack Developer</span>
                <span>CyberSecurity Analyst</span>
                <span>Designer</span>
              </h3>
          </div>
          <p className="text-sm md:text-lg text-left mx-10">
            An individual with good foundation knowledge in IT, wants to be a part of your company to take it to the next level
          </p>
          <a href="#about" className='hidden md:flex flex-row justify-start items-center gap-4 mx-10 mt-0 md:mt-4 py-1 cursor-pointer'>
            <p className='px-2 md:px-6 py-2 text-slate-300 font-semibold backdrop-blur-xl bg-transparent border-2 border-slate-400 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300'>
              SCROLL DOWN
            </p>
            <div className='w-10 h-10 p-1 border-2 backdrop-blur-xl border-slate-400 rounded-full flex flex-col justify-center items-center animate-bounce'>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g data-name="Layer 2" id="Layer_2">
                  <path fill="#9C9CDC" d="M16.47,16.88,26.34,7a1,1,0,0,0-1.41-1.41l-9.06,9.06-8.8-8.8a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.42l9.61,9.61A.85.85,0,0,0,16.47,16.88Z"/>
                  <path fill="#9C9CDC" d="M16.47,26.46l9.87-9.88a1,1,0,0,0-1.41-1.41l-9.06,9.06-8.8-8.8a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l9.61,9.62A.85.85,0,0,0,16.47,26.46Z"/>
                </g>
              </svg>
            </div>
          </a>
        </div>

        <div className='w-[90vw] md:w-[45%] h-[50vh] md:h-[60vh] flex flex-col justify-center items-center gap-2 '>
          <div className='w-full h-[50%] flex justify-center items-center gap-2 text-gray-100'>
            <div className='w-[40%] h-full flex flex-col justify-center items-center bg-space-cadet text-gray-100 rounded-3xl'>
              <a href="https://github.com/sridip-99" target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-center text-center pointer'>
                <div className='w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-slate-700 flex items-center justify-center rounded-full mb-2'>
                  <h2 className='text-2xl md:text-3xl font-extrabold'>10+</h2>
                </div>
                <div className='text-center px-1 md:px-4'>
                  <h2 className='text-xl lg:text-2xl font-bold text-verdigris'>Projects</h2>
                  <p className='text-sm font-thin'>Check out my projects and repositories on GitHub.</p>
                </div>
              </a>
            </div>
            <div className="w-[60%] h-full flex justify-center items-center brightness-85
              bg-[url('https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/hero/code.webp')]
              bg-cover bg-center bg-no-repeat border-4 border-yinmn-blue rounded-ss-3xl rounded-ee-3xl rounded-es-md rounded-se-md">
            </div>
          </div>

          <div className='w-full h-[50%] flex justify-center items-center gap-2 text-gray-100'>
            <div className="w-[60%] h-full flex justify-center items-center brightness-85
              bg-[url('https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/hero/design.webp')]
              bg-cover bg-center bg-no-repeat border-4 border-yinmn-blue rounded-ss-3xl rounded-ee-3xl rounded-es-md rounded-se-md">
            </div>
            <div className='w-[40%] h-full flex justify-center items-center bg-space-cadet text-gray-100 rounded-3xl'>
              <a href="https://www.linkedin.com/in/sridip-tah99" target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-center text-center pointer'>
                <div className='w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-slate-700 flex items-center justify-center rounded-full mb-2'>
                  <h2 className='text-2xl md:text-3xl font-extrabold'>4+</h2>
                </div>
                <div className='text-center px-1 lg:px-4'>
                  <h2 className='text-xl lg:text-2xl font-bold text-verdigris'>Certifications</h2>
                  <p className='text-sm font-thin'>Check out my certifications on LinkedIn.</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <a href="#about" className='w-[90vw] md:hidden flex flex-row justify-start items-center gap-2 mt-0 py-1 cursor-pointer'>
            <p className='w-full px-2 py-2 text-center text-slate-300 font-semibold backdrop-blur-xl bg-transparent border-2 border-slate-400 rounded-2xl hover:bg-slate-700 hover:text-white transition-all duration-300'>
              SCROLL DOWN
            </p>
            <div className='w-10 h-10 p-1 border-2 backdrop-blur-xl border-slate-400 rounded-full flex flex-col justify-center items-center animate-bounce'>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g data-name="Layer 2" id="Layer_2">
                  <path fill="#9C9CDC" d="M16.47,16.88,26.34,7a1,1,0,0,0-1.41-1.41l-9.06,9.06-8.8-8.8a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.42l9.61,9.61A.85.85,0,0,0,16.47,16.88Z"/>
                  <path fill="#9C9CDC" d="M16.47,26.46l9.87-9.88a1,1,0,0,0-1.41-1.41l-9.06,9.06-8.8-8.8a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l9.61,9.62A.85.85,0,0,0,16.47,26.46Z"/>
                </g>
              </svg>
            </div>
          </a>

      </div>
        </section>
    </>
  )
}

export default Hero

















