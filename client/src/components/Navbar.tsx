import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

export default function Navbar() {
  return (
    <div className="flex sticky opacity-80 top-0 left-0 justify-between w-full items-center py-5 bg-black text-white font-medium">
      <Link to={'/'}><img src={logo} className='w-[60px]' /></Link>

        <ul className='sm:flex gap-5 text-sm flex flex-row items-center text-white'>

            <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
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

            <button className='px-6 py-2 text-black bg-white rounded-md'>Buy</button>

        </ul>
    </div>
  );
}
