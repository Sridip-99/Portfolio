import React from 'react'
import Hero from './Hero'
const About = React.lazy(() => import('./About'));
const Education = React.lazy(() => import('./Education'));
const Projects = React.lazy(() => import('./Projects'));
const LogoLoop = React.lazy(() => import('../components/LogoLoop'));
const Certifications = React.lazy(() => import('./Certifications'));
const Testimonials = React.lazy(() => import('./Testimonials'));
const Contact = React.lazy(() => import('./Contact'));

const imageLogos = [
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/CANVA.webp", alt: "CANVA", href: "https://www.canva.com/en_in/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/HTML.webp", alt: "HTML 5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/CSS.webp", alt: "CSS 3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/JAVASCRIPT.webp", alt: "JS", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/REACT JS.webp", alt: "REACT JS", href: "https://react.dev/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/VITE.webp", alt: "VITE", href: "https://vite.dev/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/TAILWIND CSS.webp", alt: "TAILWIND CSS", href: "https://tailwindcss.com/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/NETLIFY.webp", alt: "NETLIFY", href: "https://www.netlify.com/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/JAVA.webp", alt: "JAVA", href: "https://www.java.com/en/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/COLAB.webp", alt: "CALAB", href: "https://colab.research.google.com/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/JUPYTER NB.webp", alt: "JUPYTER NB", href: "https://jupyter.org/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/PYTHON.webp", alt: "PYTHON", href: "https://www.python.org/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/DJANGO.webp", alt: "DJANGO", href: "https://www.djangoproject.com/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/RENDER.webp", alt: "RENDER", href: "https://render.com/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/GIT.webp", alt: "GIT", href: "https://git-scm.com/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/GITHUB.webp", alt: "GITHUB", href: "https://github.com/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/AWS.webp", alt: "AWS", href: "https://aws.amazon.com/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/POWER BI.webp", alt: "POWER BI", href: "https://app.powerbi.com/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/LINUX.webp", alt: "LINUX", href: "https://www.linux.org/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/KALI.webp", alt: "KALI", href: "https://www.kali.org/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/WIRESHARK.webp", alt: "WIRESHARK", href: "https://www.wireshark.org/" },
  { src: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/logoloop/BURPSUITE.webp", alt: "BURPSUITE", href: "https://portswigger.net/burp" },
];

const Main = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Education/>
        <Projects/>
        <LogoLoop
            logos={imageLogos}
            speed={30}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="rgb(6,0,16)"
            ariaLabel="Tech Stack"
        />
        <LogoLoop
            logos={imageLogos}
            speed={30}
            direction="right"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="rgb(6,0,16)"
            ariaLabel="Tech Stack"
        />
        <Certifications/>
        <Testimonials/>
        <Contact/>

    </>
  )
}


export default Main







