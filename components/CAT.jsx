'use client'
import { useTheme } from '@/context/ThemeContext';
import React from 'react'

const CAT = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div id='cat' className={`${theme=='light'? 'bg-[#f5f7fb] ': 'bg-[#192d5d]'} flex flex-col justify-center items-center gap-5  pt-4 px-5 `}>

      <div className='flex flex-col gap-3 text-center'>
        <h1 className= {` ${theme=='light'? 'text-gray-900': 'text-white'} text-2xl md:text-3xl lg:text-4xl font-bold `}>
          The <span className='text-blue-600'>CAT Framework</span>
        </h1>
        <p className= {` ${theme=='light'? 'text-gray-700': 'text-gray-200'} md:text-md lg:text-lg  font-semibold`}>
          Our Proven Approach to  <span className='text-blue-600'>Learning Excellence</span>
        </p>
      </div>

      <div className=' p-8 '>

       
        <img src='/Images/catV2.svg' alt='accredian-edge' height={1000} width={1000} className='lg:p-10' />
        
        

      </div>
    </div>
  )
}

export default CAT
