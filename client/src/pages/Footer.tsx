const Footer = () => {
  return (
    <div className='text-white p-6 sm:p-10 bg-black'>
      <div className='flex flex-col lg:flex-row justify-between gap-10'>
    <div className='flex flex-col lg:flex-row gap-10 items-start'>
    <div className='flex flex-col items-start gap-6'>
    <div className='text-3xl sm:text-4xl font-bold'>Eclypse <span>↗</span></div>
    <div className='text-sm text-gray-300 leading-6'>
        Home <span className='text-gray-500'> / </span>
            About <span className='text-gray-500'> / </span>
            Buy <span className='text-gray-500'> / </span><br className='block sm:hidden' />
            Our Customers <span className='text-gray-500'> / </span>
            Contacts <span className='text-gray-500'> / </span>
        </div>
        </div>
        <div className='flex flex-col gap-4 text-sm'>
        <div>
            <span className='text-gray-500'>CONTACT</span>
              <p className='text-white'>+91 123456789</p>
        </div>
        <div>
            <span className='text-gray-500'>EMAIL</span>
            <p className='text-white'>eclypse@gmail.com</p>
        </div>
        </div>
    </div>
    <div className='flex flex-col items-center gap-4 lg:items-end'>
          <p className='bg-white text-black text-2xl rounded-full w-[36px] h-[36px] flex items-center justify-center hover:bg-gray-300 transition-all cursor-pointer'>
            ↑</p>
          <p className='text-gray-500 text-sm'>© Eclypse 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
