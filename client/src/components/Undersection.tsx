import React from 'react'
import undervid from '../assets/undervid.mp4'
import umg1 from '../assets/umg1.jpg'
import umg2 from '../assets/umg2.jpg'
import umg3 from '../assets/umg3.jpg'
const Undersection = () => {
  return (
    <div className='flex md:flex-row flex-col items-start'>
        <div className='md:w-[50%] w-full'>
            <video
                src={undervid}
                // autoPlay
                muted
                loop
                playsInline
                className="rounded-none w-full h-[638px] object-cover"
            />
        </div>

        <div className='md:w-[50%] w-full px-6 py-3 bg-white '>
            <div className=''>
                <p className=' mt-6'>A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.</p>
                <div className='flex flex-row items-center justify-between py-6'>
                    <img src={umg1} alt="" className='md:w-[150px] md:h-[180px] w-[80px] h-[100px]'/>
                    <img src={umg2} alt="" className='md:w-[150px] md:h-[180px] w-[80px] h-[100px]'/>
                    <img src={umg3} alt="" className='md:w-[150px] md:h-[180px] w-[80px] h-[100px]'/>
                </div>
            </div>

            <hr  className='text-gray-400 font-bold'/>

            <div className='my-6 text-sm text-gray-600'>
                <span className='text-black pr-6 text-4xl font-bold'>₹ 7,999</span>
                MRP incl. of all taxes
            </div>

            <div className='flex flex-col'>
                <p className='text-sm'>Please select a size <span className='underline cursor-pointer'>size chart</span></p>
                <div className='flex flex-wrap gap-4 py-4'>
                    {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                    <button
                        key={size}
                        className='px-4 py-2 bg-gray-300 text-black rounded-sm hover:text-xl transition-all duration-300 hover:bg-gray-400'
                    >
                        {size}
                    </button>
                    ))}
                </div>
            </div>

            <hr className='text-gray-400 font-bold'/>

            <div className='flex flex-row justify-between my-6'>
                <button className='bg-white w-[40%] rounded-sm py-2 text-black border border-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300'>Add to Cart</button>
                <button className='bg-gray-800 w-[55%] rounded-sm py-2 text-white border border-gray-800 hover:text-gray-800 hover:bg-white transition-all duration-300'>Buy</button>
            </div>
        </div>
    </div>

  )
}

export default Undersection