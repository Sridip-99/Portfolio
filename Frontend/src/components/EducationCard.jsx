import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const EducationCard = (props) => {
  return (
    <>
        <div className='card'>
            <div className='img-container max-h-[25vh] w-full rounded-md overflow-hidden'>
                <img src={props.image} alt={props.imgAltText} className='brightness-95 w-full h-auto object-cover'/>
            </div>
            <h1 className='w-full text-left text-slate-400 mt-4 text-2xl font-semibold'>{props.schoolName}</h1>
            <p className='w-full text-left font-light text-zinc-400'>Board: <span className='text-slate-300'>{props.board}</span></p>
            <p className='w-full text-left font-light text-zinc-400'>Session: <span className='text-slate-300'>{props.session}</span></p>
            <p className='w-full text-left font-light text-zinc-400'>Marks: <span className='text-slate-300'>{props.marks} ({props.marksParameter})</span></p>
            <a href={props.mapLink} target="_blank" rel="noopener noreferrer" className='w-full mt-4 text-center inline-block text-gray-300 bg-slate-800 font-semibold px-3 py-3 md:py-2 rounded-lg border-2 border-gray-500 transition-all duration-300 ease-in-out hover:bg-slate-700 hover:text-white'><FontAwesomeIcon icon={faLocationDot} className="text-slate-400" /> View on Map</a>
        </div>
    </>
  )
}


export default EducationCard
