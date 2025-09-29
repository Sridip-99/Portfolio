import React from 'react'
import ScrollFloat from '../components/ScrollFloat.jsx'

const About = () => {
  return (
    <>
    <section id='about'>
        <ScrollFloat
        animationDuration={.9}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
        >
        About.
        </ScrollFloat>  
        <div className='container'>
            <div className='w-[100%] text-zinc-300 lg:w-[70%]'>
                <p className="text-md text-left mb-4" >
                    Hi, I&apos;m <span className='text-slate-400 font-semibold'>Sridip</span>, a B.Tech IT graduate and passionate engineer. I&apos;ve chosen this path not just for a career, but because I genuinely enjoy solving problems and building things that make an impact.
                </p>
                <p className="text-md text-left mb-4" >
                    I have a strong foundation in <span className='text-slate-400 font-semibold'>Full-Stack Development</span> and <span className='text-slate-400 font-semibold'>Cybersecurity</span>, with skills in:
                </p>
                <ul className='text-start mb-4 list-disc pl-4'>
                    <li className='list-style-type'>Platform: <span className='text-slate-400 font-semibold'>Windows</span>, <span className='text-slate-400 font-semibold'>Linux</span>, <span className='text-slate-400 font-semibold'>Android</span></li>
                    <li className='list-style-type'>Programming: <span className='text-slate-400 font-semibold'>Python</span>, <span className='text-slate-400 font-semibold'>Java</span>, <span className='text-slate-400 font-semibold'>JavaScript</span></li>
                    <li className='list-style-type'>Frontend: <span className='text-slate-400 font-semibold'>HTML</span>, <span className='text-slate-400 font-semibold'>CSS</span>, <span className='text-slate-400 font-semibold'>Tailwind CSS</span>, <span className='text-slate-400 font-semibold'>React.js</span></li>
                    <li className='list-style-type'>Backend: <span className='text-slate-400 font-semibold'>SQL</span>, <span className='text-slate-400 font-semibold'>Django</span></li>
                    <li className='list-style-type'>Tools: <span className='text-slate-400 font-semibold'>Git</span>, <span className='text-slate-400 font-semibold'>GitHub</span>, <span className='text-slate-400 font-semibold'>Burp Suite</span>, <span className='text-slate-400 font-semibold'>Nmap</span>, <span className='text-slate-400 font-semibold'>WireShark</span></li>
                    <li className='list-style-type'>Cloud: <span className='text-slate-400 font-semibold'>AWS</span></li>
                    <li className='list-style-type'>Creative: <span className='text-slate-400 font-semibold'>Designing & UI/UX</span></li>
                </ul>
                <p className="text-md text-left mb-4" >
                    I am actively seeking opportunities as a <span className='font-semibold text-slate-400'>Full-Stack Developer</span> or <span className='text-slate-400 font-semibold'>Junior Cyber Security Analyst</span>, where I can apply my skills, keep learning, and grow with the team.
                </p>
                <p className="text-md text-left mb-4" >
                    Beyond tech, I love <span className='text-slate-400 font-semibold'>repairing gadgets, painting, designing, exploring new technologies, and gaming</span> — which keeps me curious and creative in everything I do.
                </p>
                
                <div className='flex justify-start items-center gap-[10px] mt-4'>
                    <a href="#contact" className='inline-block text-gray-300 bg-slate-800 font-semibold px-3 py-2 rounded-sm border-2 border-gray-500 transition-all duration-300 ease-in-out hover:bg-slate-700 hover:text-white'>Contact me <span className='text-white font-3xl'>→</span></a>
                    <a href="https://drive.google.com/drive/folders/1zeU6xw21xl136uo0XIlVDQNz3tXtktn1?usp=sharing" target="_blank" rel="noopener noreferrer" className=' px-3 py-2 text-gray-300 rounded-sm border-2 border-gray-500 font-semibold transition-all duration-300 ease-in-out hover:text-white hover:backdrop-blur-2xl'>Download CV</a>
                </div>
            </div>
            <div className='w-[100%] overflow-hidden rounded-ss-3xl rounded-ee-3xl rounded-es-md rounded-se-md lg:w-[30%]'>
                <img 
                    className='w-[100%] h-auto'
                    src="./profile.webp"
                    alt="Sridip Tah's Profile Image"
                />
            </div>
        </div>
    </section>
    </>
  )
}


export default About


