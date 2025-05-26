import React from 'react';
import herovid from '../assets/herovid.mp4'

const Hero = () => {
  return (
    <div className='flex flex-col text-white pt-8'>
        <div className='flex flex-row justify-between relative'>
            <div className='text-5xl'>Eclypse <span className='text-sm self-top absolute top-0'>®</span></div>
            <div className='text-xs'>
                © 2025
            </div>
        </div>
        <div>
          <video
            src={herovid}
            // autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto mt-8 rounded-none object-cover"
          />
        </div>
    </div>
  );
};

export default Hero;
