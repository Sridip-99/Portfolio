import React from 'react'
import ScrollFloat from '../components/ScrollFloat'
import AnimatedContent from '../components/AnimatedContent.jsx'
import EducationCard from '../components/EducationCard.jsx'

const Education = () => {
    const projects = [
    // {JSON DATA}
    {
        "id": 1,
        "schoolName" : "Simlon A.K. Vidyamandir",
        "image" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/education/sakv.webp",
        "imgAltText" : "Simlon A.K. Vidyamandir school image",
        "board" : "WBBSE",
        "session" : "JAN 2013 - FEB 2019",
        "marks" : 90.28,
        "marksParameter" : "Percentage",
        "mapLink" : "https://maps.app.goo.gl/7byeRE8Tdr7VjvU97"
    },
    {
        "id": 2,
        "schoolName" : "Simlon A.K. Vidyamandir",
        "image" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/education/sakv.webp",
        "imgAltText" : "Simlon A.K. Vidyamandir school image",
        "board" : "WBCHSE",
        "session" : "MAY 2019 - JUN 2021",
        "marks" : 96.2,
        "marksParameter" : "Percentage",
        "mapLink" : "https://maps.app.goo.gl/7byeRE8Tdr7VjvU97"
    },
    {
        "id": 3,
        "schoolName" : "Techno Main Salt Lake",
        "image" : "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/education/tmsl.webp",
        "imgAltText" : "Techno Main Salt Lake college image",
        "board" : "MAKAUT",
        "session" : "AUG 2021 - JUN 2025",
        "marks" : 7.58,
        "marksParameter" : "CGPA",
        "mapLink" : "https://maps.app.goo.gl/8xw22afZntQvDkjv5"
    }
  ];
  return (
    <>
        <section id='education'>
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
            >
                Education.
            </ScrollFloat>
            <div className='container-grid pb-[2rem]'>
                {projects.map((elem,idx) => (
                    <AnimatedContent
                        key={idx}
                        distance={100}
                        direction="horizontal"
                        reverse={true}
                        duration={1}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={.8}
                        threshold={0.1}
                        delay={0 + idx * 0.3}
                    > 
                        <EducationCard
                            schoolName={elem.schoolName}
                            image={elem.image}
                            imgAltText={elem.imgAltText}
                            board={elem.board}
                            session={elem.session}
                            marks={elem.marks}
                            marksParameter={elem.marksParameter}
                            mapLink={elem.mapLink}
                        />
                    </AnimatedContent>
                ))}
            </div>
        </section>
    </>
  )
}


export default Education

