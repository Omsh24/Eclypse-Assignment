import React from 'react'
import logo from '../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom'

const Checkout = () => {
  return (
    <div>
      {/* // navbar section */}
      <div>
        <div className="flex justify-between w-full items-center py-5 bg-white text-black font-medium">
          <Link to={'/'}><img src={logo} className='w-[60px]' /></Link>

            <ul className='sm:flex gap-5 text-sm flex flex-row items-center text-gray-700'>

                <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
                    <p>About Us</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>

                <NavLink to={'/waitlist'} className='flex flex-col items-center gap-1'>
                    <p>Waitlist</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>

                <NavLink to={'/cart'} className='flex flex-col items-center gap-1 font-bold text-black underline'>
                    <p>Cart</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>  

                <button className='px-6 py-2 text-black border-black hover:bg-black hover:text-white transition-all duration-300 bg-white rounded-md'>Buy</button>

            </ul>
        </div>
      </div>

      <div className="min-h-screen bg-white p-8 text-black">
        <div className="text-sm mb-6">
          <button className="mr-2 text-2xl">{'<'}</button> Shipping Address
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-5 h-5 rounded-full border-4 border-red-500 mr-3" />
              <span className="font-semibold">Add New Address</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="border px-3 py-2 rounded text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border px-3 py-2 rounded text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Street Address"
                className="w-full border px-3 py-2 rounded text-sm"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Apt Number"
                className="border px-3 py-2 rounded text-sm"
              />
              <input
                type="text"
                placeholder="State"
                className="border px-3 py-2 rounded text-sm"
              />
              <input
                type="text"
                placeholder="Zip"
                className="border px-3 py-2 rounded text-sm"
              />
            </div>
            <div className="flex justify-between">
              <button className="border border-black text-black px-6 py-2 rounded text-sm">
                cancel
              </button>
              <button className="bg-black text-white px-6 py-2 rounded text-sm">
                Save This Address
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-6 text-sm">
            <p className="mb-4">
              By placing your order, you agree to our company{' '}
              <span className="underline">Privacy policy</span> and{' '}
              <span className="underline">Conditions of use</span>.
            </p>
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between mb-2">
                <span>Items - Silhouette No. 1 – Vermilion</span>
                <span>7,999</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping and handling:</span>
                <span>200</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Before tax:</span>
                <span>6,599</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Tax Collected:</span>
                <span>1,400</span>
              </div>
              <div className="flex justify-between font-semibold text-base mb-4">
                <span>Order Total:</span>
                <span>8,199</span>
              </div>
              <button className="w-full bg-black text-white py-2 rounded text-sm">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;