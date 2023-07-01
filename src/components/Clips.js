import React from 'react';
import { PlayIcon } from "@heroicons/react/24/solid";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Clips = ({ clip, imgsrc }) => {
  return (
   <>
      <div className='relative rounded-xl overflow-hidden group cursor-pointer transition-all duration-300  w-16 lg:w-32 md:w-28 sm:w-24 h-14 lg:h-28 md:h-24 sm:h-20'>
        {/* <img
            src={imgsrc}
            alt="img/clips"
            className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'
        /> */}
        <LazyLoadImage
            src={imgsrc}
            alt='img/clips'
            className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'
            effect="opacity"
          />
        <div className='bg-white/75 blur-effect-theme absolute top-4 left-5 lg:top-10 lg:left-12 md:top-7 md:left-10 sm:top-6 sm:left-8 right-0 opacity-100 z-[100] w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center rounded-full'>
            <PlayIcon className='icon-style w-3 h-3 sm:w-5 sm:h-5 text-slate-900' />
        </div>
        <video
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"
        >
            <source type='video/mp4' src={clip} />
        </video>
      </div>
   </>
  )
}

export default Clips