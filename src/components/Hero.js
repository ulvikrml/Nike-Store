import React from 'react';
import Clips from './Clips';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {

  return (
    <>
      <div className='relative h-auto w-auto flex flex-col'>
        <div className='bg-theme clip-path h-[55vh] lg:h-[85vh] md:h-[75vh] sm:h-[65vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative z-20 grid items-center justify-items-center nike-container'>
          <div className='grid items-center justify-items-center mt-24 md:mt-28'>
            <h1 className='text-2xl xsm:text-3xl sm:text-4xl lg:text-6xl md:text-5xl font-extrabold drop-shadow-sm text-slate-200'>{title}</h1>
            <h1 className='text-2xl xsm:text-3xl sm:text-4xl lg:text-6xl md:text-5xl font-extrabold drop-shadow-sm text-slate-200'>{subtitle}</h1>
            <button type='button' className='button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'>{btntext}</button>
            <div className='grid items-center gap-3 md:gap-5 absolute top-[34vh] lg:top-[33vh] left-0 xl:left-[11%] w-auto h-auto'>
              {videos?.map((val, i) => (
                <Clips
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                />
              ))}
            </div>
            <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'>
              {sociallinks?.map((link, i) => (
                <img
                  key={i}
                  src={link.icon}
                  alt="icon/social"
                  className="w-5 h-5 flex items-center cursor-pointer md:w-7 md:h-7 sm:w-6 sm:h-6 transition-all duration-200 hover:scale-110"
                />
              ))}
            </div>
          </div>
          <div className='flex items-center'>
            <LazyLoadImage
              src={img}
              alt='hero-img/img'
              className='w-auto h-[21vh] lg:h-[45vh] md:h-[35vh] sm:h-[31vh] xsm:h-[24vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'
              effect="opacity"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero