import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
import Waitlist from './pages/Waitlist'

function App() {


  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] w-[100vw] bg-black'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/waitlist' element={<Waitlist/>} />
      </Routes>
    </div>
  )
}

export default App
