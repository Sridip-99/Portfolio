import React from 'react'
import './Nav.css';

const Nav = () => {
  return (
    <>
        <div className="navBar">

            <nav>
                <ul>
                    <li><a href="#" style={{paddingLeft: "10px"}}>Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#certifications">Certifications</a></li>
                    <li><a href="#contact" style={{paddingRight: "10px"}}>Contact</a></li>
                </ul>
            </nav>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/sridip-tah99" target="_blank" rel="noopener noreferrer" aria-label="let's connect with my linkedin profile">
                    <img src="https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/social-icons/linkedin.webp" width="30px" alt="Linkedin"/>
                </a>
                <a href="https://www.facebook.com/sridip.tah.7" target="_blank" rel="noopener noreferrer" aria-label="let's connect with my facebook account">
                    <img src="https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/social-icons/facebook.webp" width="30px" alt="Facebook"/>
                </a>
                <a href="https://wa.me/+919883391286" target="_blank" rel="noopener noreferrer" aria-label="drop a message to my whatsapp account">
                    <img src="https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/social-icons/whatsapp.webp"  width="30px" alt="Whatsapp"/>
                </a>
            </div>

        </div>
    </>
  )
}

export default Nav

