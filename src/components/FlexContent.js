import React from 'react'

const FlexContent = ({ ifExists, endpoint: { title, heading, text, img, btn, url } }) => {
  return (
    <>
      <div className={`flex items-center flex-col justify-center lg:justify-between nike-container ${ifExists ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div className='w-full text-center lg:text-left grid items-center'>
          <h1 className='text-3xl font-bold text-gradient sm:text-4xl'>{heading}</h1>
          <h1 className='text-2xl lg:text-5xl md:text-4xl sm:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
          <p className='w-full md:w-4/5 lg:w-full text-sm xl:text-md my-4 text-slate-900'>{text}</p>
          <a href={url} target={"_blank"} rel='noreferrer' role="button">
            <button type='button' className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>{btn}</button>
          </a>
        </div>
        <div className='flex justify-center items-center max-w-xl relative lg:max-w-none w-full'>
          <img
            src={img}
            alt={heading}
            className={`w-auto object-fill transitions-theme ${ifExists ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12' : 'h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12'}`}
          />
        </div>
      </div>
    </>
  )
}

export default FlexContent