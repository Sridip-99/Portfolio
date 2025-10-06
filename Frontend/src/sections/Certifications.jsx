import React from 'react'
import ScrollFloat from '../components/ScrollFloat'
import CertificationCard from '../components/CertificationCard'
import AnimatedContent from '../components/AnimatedContent'
import DecryptedText  from '../components/DecryptedText.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-brands-svg-icons/faGithub';

const Certifications = () => {
            const certificate = [
    // {JSON DATA}
    {
        "id": 1,
        "name" : "Cloud Foundations",
        "imgLink" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/certificates/cert-1.webp",
        "imgAltText" : "AWS Academy Cloud Foundations image",
        "issued" : "AWS Academy",
    },
    {
        "id": 2,
        "name" : "Journey to Cloud",
        "imgLink" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/certificates/cert-2.webp",
        "imgAltText" : "IBM Journey to Cloud image",
        "issued" : "IBM",
    },
    {
        "id": 3,
        "name" : "CyberSecurity Fundamentals",
        "imgLink" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/certificates/cert-3.webp",
        "imgAltText" : "Palo Alto CyberSecurity Fundamentals image",
        "issued" : "Palo Alto",
    },
    {
        "id": 4,
        "name" : "Offensive CyberSecurity Internship",
        "imgLink" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/certificates/cert-4.webp",
        "imgAltText" : "InlighnX Global Pvt Ltd Offensive CyberSecurity Internship image",
        "issued" : "InlighnX Global Pvt Ltd",
    }
  ];
  return (
    <>
        <section id='certifications'>
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
            >
                Certifications.
            </ScrollFloat>

            <div className='container-grid2 pb-[2rem]'>
                {certificate.map((elem,idx) => (
                    <AnimatedContent
                        key={idx}
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        duration={1}
                        ease="power3.out"
                        initialOpacity={0.5}
                        animateOpacity
                        scale={.8}
                        threshold={0.1}
                        delay={0 + (idx >= 2 ? (idx - 2) * 0.25 : idx * 0.25)}
                    > 
                        <CertificationCard
                            id={elem.id}
                            name={elem.name}
                            image={elem.imgLink}
                            imgAltText={elem.imgAltText}
                            issued={elem.issued}
                        />
                    </AnimatedContent>
                ))}
            </div>
            <div className='max-w-[1100px] m-auto rounded-md bg-[#0000007f] text-center lg:text-left'>
                <p className=' py-1 px-2 m-0 rounded-md backdrop-blur-2xl text-xl md:text-3xl'>
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
                    <a href='https://www.credly.com/users/sridip-tah.-99' target="_blank" rel="noopener noreferrer" className='group text-slate-400 transition-all ease-in-out duration-300 hover:text-slate-300'>
                    <FontAwesomeIcon icon={faIdBadge} className="group-hover:text-slate-300" />
                        <DecryptedText
                            text="Credly"
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
                        text=" account to see my badges..."
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
        </section>
    </>
  )
}


export default Certifications










