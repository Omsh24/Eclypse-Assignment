import React, { useState } from 'react';
import newone from '../assets/new.jpg';
import new1 from '../assets/new1.jpg';
import new2 from '../assets/new2.jpg';

const Down = () => {
  const [active, setActive] = useState('img1');

  return (
    <div className='text-white px-4 py-8'>
      <p className='text-xl text-center mb-8'>
        O U R <span className='text-orange-400'>C U S T O M E R S</span>
      </p>
      <div className='flex flex-col-reverse md:flex-row items-center md:items-start justify-around gap-8'>
        
        <div className='flex flex-row md:flex-col items-center justify-center gap-4'>
          <img
            src={newone}
            onClick={() => setActive('img1')}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              active === 'img1'
                ? 'w-[100px] h-[100px] md:w-[120px] md:h-[120px] border-4 border-blue-500'
                : 'w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
            }`}
          />
          <img
            src={new1}
            onClick={() => setActive('img2')}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              active === 'img2'
                ? 'w-[100px] h-[100px] md:w-[120px] md:h-[120px] border-4 border-blue-500'
                : 'w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
            }`}
          />
          <img
            src={new2}
            onClick={() => setActive('img3')}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              active === 'img3'
                ? 'w-[100px] h-[100px] md:w-[120px] md:h-[120px] border-4 border-blue-500'
                : 'w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
            }`}
          />
        </div>
        <div className='w-full md:w-[60%]'>
          {active === 'img1' && (
            <div className='flex flex-col gap-4'>
              <div>
                <span className='text-6xl md:text-8xl'>“</span>
                <span className='text-2xl md:text-4xl text-orange-400'>
                  Understated, but unforgettable. It feels like it was made for me
                </span>
              </div>
              <p className='text-lg mt-4'>Random Man</p>
              <p className='text-sm text-gray-400'>Indiana, USA</p>
            </div>
          )}
          {active === 'img2' && (
            <div className='flex flex-col gap-4'>
              <div>
                <span className='text-6xl md:text-8xl'>“</span>
                <span className='text-2xl md:text-3xl text-orange-400'>
                  I like shopping here
                </span>
              </div>
              <p className='text-lg mt-4'>Random Woman</p>
              <p className='text-sm text-gray-400'>New Delhi, India</p>
            </div>
          )}
          {active === 'img3' && (
            <div className='flex flex-col gap-4'>
              <div>
                <span className='text-6xl md:text-8xl'>“</span>
                <span className='text-2xl md:text-3xl text-orange-400'>
                  Nice Products here!!!
                </span>
              </div>
              <p className='text-lg mt-4'>Random Person</p>
              <p className='text-sm text-gray-400'>Warsaw, Poland</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Down;
