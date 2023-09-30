import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 text-white'>
      <h1 className='w-full text-2xl font-bold text-green-900'>Mfe Travels.</h1>

      <div className='flex items-center justify-center w-1/2 md:w-auto'>
        <div className='relative p-2 rounded-full'>
          <CiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-green-900 text-xl font-bold' />
          <input
            type='text'
            className='pl-8 pr-2 py-1 rounded-full shadow-md focus:outline-none'
            placeholder='Search...'
          />
        </div>
      </div>

      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Services</li>
        <li className='p-4'>Destinations</li>
        <li className='p-4'>Career</li>
      </ul>

      {/* Section: Responsive Nav */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div className={`fixed left-0 top-0 w-[60%] h-full border-r border-green-900 bg-[#7e7c7c] ease-in-out duration-500 ${nav ? '' : 'left-[-100%]'}`}>
        <h1 className='w-full text-2xl font-bold text-green-900 m-4'>Mfe Travels.</h1>

        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-100'>Home</li>
          <li className='p-4 border-b border-gray-100'>About</li>
          <li className='p-4 border-b border-gray-100'>Services</li>
          <li className='p-4 border-b border-gray-100'>Destinations</li>
          <li className='p-4'>Career</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
