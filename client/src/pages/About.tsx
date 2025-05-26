import React from 'react';
import logo from '../assets/logo.jpg'
import {Link, NavLink} from 'react-router-dom'

const AboutPage: React.FC = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between w-full items-center py-5 bg-white text-black font-medium">
          <Link to={'/'}><img src={logo} className='w-[60px]' /></Link>

            <ul className='sm:flex gap-5 text-sm flex flex-row items-center text-gray-700'>

                <NavLink to={'/about'} className='flex flex-col items-center gap-1  font-bold text-black underline'>
                    <p>About Us</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>

                <NavLink to={'/waitlist'} className='flex flex-col items-center gap-1'>
                    <p>Waitlist</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>

                <NavLink to={'/checkout'} className='flex flex-col items-center gap-1'>
                    <p>Cart</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>  

                <button className='px-6 py-2 text-black border-black hover:bg-black hover:text-white transition-all duration-300 bg-white rounded-md'>Buy</button>

            </ul>
        </div>
      </div>
    <div className="min-h-screen bg-white text-black p-8">
      
      <div className="text-2xl font-semibold mb-8">About Us</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="text-sm mb-4">
            Eclypse was founded with a single purpose — to redefine modern fashion with simplicity and impact.
            Our journey began in a small studio with a big vision: to create timeless pieces that speak to individuality and sustainability.
          </p>
          <p className="text-sm">
            We believe in minimalism, transparency, and creating fashion that lasts.
            Every product is crafted with care and responsibility.
          </p>
        </div>
        <div className="bg-gray-100 rounded-md p-6 text-sm">
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Quality over quantity</li>
            <li>Timeless and sustainable design</li>
            <li>Customer-first philosophy</li>
            <li>Transparency in everything we do</li>
          </ul>
          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>Email: support@eclypse.com</p>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Location: 123 Eclypse Avenue, NY</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
