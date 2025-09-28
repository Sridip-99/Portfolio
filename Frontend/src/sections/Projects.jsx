import React from 'react'
import ScrollFloat from '../components/ScrollFloat.jsx'
import ProjectCardsContainer from '../components/ProjectCardsContainer.jsx'

const Projects = () => {
  return (
    <>
        <section id='projects'>
            
			<ScrollFloat
				containerClassName="relative z-[100]"
				animationDuration={1}
				ease='back.inOut(2)'
				scrollStart='center bottom+=50%'
				scrollEnd='bottom bottom-=40%'
				stagger={0.03}
				>
					Projects.
			</ScrollFloat>
            <ProjectCardsContainer/>
        </section>
    </>
  )
}

export default Projects