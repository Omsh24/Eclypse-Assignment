import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import { Link } from 'react-router-dom'
import Undersection from '../components/Undersection'
import Dropdown from '../components/Dropbox'
import Down from './Down'
import Footer from './Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='relative'>
        <Navbar/>
        <Hero />
        <p className='text-white md:w-[50%] sm:w-[80%] text-4xl py-[10%]'>Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.</p>

        <Link to={'/'} className='text-white text-md underline'>Learn more about Eclypse ↗</Link>
        <Gallery />
        <p className='text-white md:w-[50%] sm:w-[100%] sm:text-2xl md:text-4xl py-[10%]'>Silhouette No. 1 – Vermilion</p>

        <Undersection />

        <div className='my-6 flex flex-col gap-6'>
          <Dropdown title="Size & Fit">
            <p>Products for all sizes.</p>
          </Dropdown>
          <Dropdown title="Delivery & Return">
            <p>Prodict can be returned in 7 days</p>
          </Dropdown>
          <Dropdown title="How this was made">
            <p>Made ethically 100%</p>
          </Dropdown>
        </div>

        <Down />
        
        <hr className='mt-8 text-gray-600'/>
        <Footer />
    </div>
  )
}

export default Home