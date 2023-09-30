import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
       <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#040d09] font-bold p-2'>Choose us to travel like a Boss</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#e0e7ee]'>Mfe Travels. Be Richer with Memories </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-3xl sm:text-4xl text-lg font-bold'>Let's Plan Your </p>
                <Typed className='md:text-3xl sm:text-4xl text-lg font-bold pl-2'  strings={['Tour.', 'Next Trip.', 'Dream Destination.', 'Next Holiday.', 'Honeymoon.']} typeSpeed={140} backSpeed={150} loop />
            </div>
            <button className='bg-lime-950 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Explore More</button>
       </div>
    </div>
  )
}

export default Hero;