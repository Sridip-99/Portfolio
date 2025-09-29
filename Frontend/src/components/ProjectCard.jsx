import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props) => {
  const handleExpandClick = () => {
    props.onExpand({
      id: props.id,
      name: props.name,
      bgColor: props.bgColor,
      image: props.image,
      imgAltText: props.imgAltText,
      about: props.about,
      type: props.type,
      techStack: props.techStack,
      conclusion: props.conclusion,
      liveLink: props.liveLink,
      repoLink: props.repoLink,
    });
  };

  if (props.isExpanded) return null; // Hide card if expanded

  return (
    <div className='card2'>
      <div className='img-container group w-full border-2 border-slate-600 rounded-md overflow-hidden'>
        <img src={props.image} alt={props.imgAltText} className='brightness-95 w-full h-full overflow-hidden object-cover'/>
        <div className='card-inner pt-1 pb-2 px-2 rounded-sm bg-slate-950 duration-300 translate-y-[-100%] lg:translate-y-[-30%] lg:group-hover:translate-y-[-100%]'>
          <h1 className='w-full text-center text-slate-400 mt-1 text-3xl lg:text-2xl font-semibold'>{props.name}</h1>
          <p className='w-full text-center font-light text-zinc-400'>Type: <span className='text-slate-300'>{props.type}</span></p>
          
          {/* Removed checkbox — using button instead */}
          <button
            onClick={handleExpandClick}
            className='cursor-pointer w-full mt-4 text-center inline-block text-gray-300 bg-slate-800 font-semibold px-3 py-2 rounded-lg border-2 border-gray-500 transition-all duration-300 ease-in-out hover:bg-slate-700 hover:text-white'
          >
            <FontAwesomeIcon icon={faCode} className="text-slate-400" /> Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

