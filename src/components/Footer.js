import React from 'react'

const Footer = ({ footer: { titles, links } }) => {

  return (
   <>
      <footer className='bg-theme pt-7 pb-5 mt-12'>
        <div className='nike-container text-slate-200'>
          <div className='grid items-start grid-cols-3 w-full lg:w-1/2 gap-2 md:gap-1 mx-auto'>
            {titles.map((val, i) => (
              <div key={i} className="grid items-center">
                <h4 className='text-sm lg:text-lg md:text-base uppercase font-semibold'>{val.title}</h4>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list.map((link, i) => (
                  <li key={i} className="text-xs sm:text-sm">{link.link}</li>
                ))}
              </ul>
            ))}
          </div>
          <div className='mt-5 text-center'>
            <p className='text-sm'>Made by <a href='https://github.com/ulvikrml' rel='noreferrer' target='_blank'>Ulvi Karimli</a>. All rights reserved </p>
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer