import React from 'react'

const CertificationCard = (props) => {
  return (
    <>
        <div className='card3'>
            <div className='w-full border-2 border-slate-600 rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'>
                <img loading="lazy" src={props.image} alt={props.imgAltText} className='brightness-95 w-full h-full overflow-hidden object-cover'/>
                <div className='pt-1 pb-2 px-2 rounded-sm bg-slate-950 '>
                    <h1 className='w-full text-center text-slate-400 mt-1 text-xl md:text-2xl font-semibold'>{props.name}</h1>
                    <p className='w-full text-center font-light text-zinc-400'>Issued by: <span className='text-slate-300'>{props.issued}</span></p>
                </div>
            </div>
        </div>
    </>
  )
}


export default CertificationCard

