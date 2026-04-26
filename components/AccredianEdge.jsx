'use client'
import { useTheme } from '@/context/ThemeContext';
import React from 'react'

const AccredianEdge = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div id='accredianEdge' className={` ${theme=='light'? 'bg-white': 'bg-[#0f172a]'} flex flex-col justify-center items-center gap-5 pt-20 px-5 `}>

      <div className='flex flex-col gap-3 text-center'>
        <h1 className={`${theme=='light'? 'text-gray-900': 'text-gray-300'} text-2xl md:text-3xl lg:text-4xl font-bold `}>
          The <span className='text-blue-600'>Accredian Edge</span>
        </h1>
        <p className={`${theme=='light'? 'text-gray-700': 'text-gray-300'} md:text-md lg:text-lg  font-semibold`}>
          Key Aspects of <span className='text-blue-600'>Our Strategic Training</span>
        </p>
      </div>

      <div className={`p-8 ${theme=='light'? 'bg-white': 'bg-[#344264] rounded-2xl'}`}>

       
        <img src='/Images/accredian-edge-usp.svg' alt='accredian-edge' height={1200} width={1200} className='hidden md:block'/>
        <img src='/Images/accredian-edge-usp-mobile.svg' alt='accredian-edge' height={1000} width={1000} className=' md:hidden'/>
        

      </div>
    </div>
  )
}

export default AccredianEdge
