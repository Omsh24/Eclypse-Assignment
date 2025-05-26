import herovid from '../assets/herovid.mp4'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Gallery = () => {
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-row gap-3 justify-between'>
            <video
                src={herovid}
                autoPlay
                muted
                loop
                playsInline
                className="md:w-[60%] w-full h-[300px] mt-8 rounded-none object-cover"
            />
            <img src={img1} className='hidden md:block w-[40%] h-[300px] mt-8 rounded-none object-cover' />
        </div>
        <div className='flex flex-row gap-2 justify-between'>
            <img src={img3} alt="" className='w-[40%] md:h-[250px] h-[150px] rounded-none object-cover'/>
            <img src={img4} alt="" className='w-[40%] md:h-[250px] h-[150px] rounded-none object-cover'/>
            <img src={img2} alt="" className='w-[40%] md:h-[250px] h-[150px] rounded-none object-cover'/>
        </div>
    </div>
  )
}

export default Gallery