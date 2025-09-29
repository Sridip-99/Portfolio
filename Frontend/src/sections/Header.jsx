import React, { useEffect, useState } from "react";
import './Header.css';
import Nav from '../components/Nav';
 
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
  let ticking = false;
  let latestY = 0;

  const onScroll = () => {
    latestY = window.scrollY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        setScrollY(latestY);
        ticking = false;
      });
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);
  // clamp scroll values
  const maxScroll = 120; // after 120px, header stops changing
  const progress = Math.min(scrollY / maxScroll, 1);

  // interpolate values
  const top = isMobile ? 1 - 1 * progress : 3 - 3 * progress; // rem
  const width = isMobile ? 90 + 10 * progress : 72 + 28 * progress; // %
  const borderWidth = .2 - .2 * progress; // px
  const boxShadowWidth = 2 - 2 * progress; // px
  const borderRadius = 40 - 25 * progress; // px
  const borderRadius2 = 40 - 40 * progress; // px
  const logoHeight = 30 + 20 * progress; // px
  const brandName = 1.5 + .5 * progress; // rem

  return (
    <>
      <header
        className="header"
        style={{
          top: `${top}rem`,
          width: `${width}%`,
          borderWidth: `${borderWidth}px`,
          borderRadius: `${borderRadius2}px ${borderRadius2}px ${borderRadius}px ${borderRadius}px`,
          boxShadow: `inset ${boxShadowWidth}px ${boxShadowWidth}px 4px #96969660, ${boxShadowWidth}px ${boxShadowWidth}px 2px #0000005d`
        }}
      >
        <a href="https://sridiptah99.netlify.app/">
            <div id="branding" >
                <img src="./logo.webp" alt="Logo" className="logo" id="logo-pc" style={{ height: `${logoHeight}px` }}/>
                <img src="./logo.webp" alt="Logo" className="logo" id="logo-mobile" style={{ height: `${logoHeight}px` }}/>
                <h1  style={{ fontSize: `${brandName}rem` }}>Sridip</h1>
            </div>
        </a>

        <input type="checkbox" id="hamburger"/>
            <label htmlFor="hamburger" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        
        <Nav/>

        </header>
    </>
  )
}


export default Header
