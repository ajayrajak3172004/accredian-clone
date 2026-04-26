'use client'
import { useTheme } from '@/context/ThemeContext';
import React from 'react'

const Stats = () => {

const { theme, toggleTheme } = useTheme();

    return (
        <div id='stats' className={` ${theme=='light'? 'bg-[#f5f7fb]': 'bg-[#0f172a]'} flex flex-col justify-center items-center gap-14 pt-20 px-5  `}>

            <div className='flex flex-col gap-3 text-center'>
                <h1 className= {` ${theme=='light'? 'text-gray-900': 'text-white'} text-2xl md:text-3xl lg:text-4xl font-bold `}>
                    Our <span className='text-blue-600'>Track Record</span>
                </h1>
                <p className= {` ${theme=='light'? 'text-gray-700': 'text-gray-200'} md:text-md lg:text-lg  `}>
                    The Numbers Behind <span className='text-blue-600'>Our Success</span>
                </p>
            </div>

            <div className='flex flex-col lg:flex-row gap-4'>

                {/* CARD 1 */}
                <div className='lg:w-[30%] flex flex-row justify-between lg:flex-col lg:justify-center lg:items-center p-2 gap-4 border-b lg:border-b-0 lg:border-r border-gray-300'>

                    <div className='bg-blue-100  rounded-full flex justify-center items-center px-3 py-1 lg:px-5 lg:py-2 w-fit'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-blue-500'>10K+</h2>
                    </div>

                    <p className= {` ${theme=='light'? 'text-gray-800': 'text-gray-200'} font-semibold w-full`}>
                        Professionals trained for exceptional career success
                    </p>
                </div>

                {/* CARD 2 */}
                <div className='lg:w-[30%] flex flex-row justify-between lg:flex-col lg:justify-center lg:items-center p-2 gap-4 border-b lg:border-b-0 lg:border-r border-gray-300'>

                    <div className='bg-blue-100  rounded-full flex justify-center items-center px-3 py-1 lg:px-5 lg:py-2 w-fit'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-blue-500'>200+</h2>
                    </div>

                     <p className= {` ${theme=='light'? 'text-gray-800': 'text-gray-200'} font-semibold `}>
                        Sessions delivered with unmatched learning excellence
                    </p>
                </div>

                {/* CARD 3 */}
                <div className='lg:w-[30%] flex flex-row justify-between lg:flex-col lg:justify-center lg:items-center gap-4 p-2  border-gray-300'>

                    <div className='bg-blue-100  rounded-full flex justify-center items-center px-3 py-1 lg:px-5 lg:py-2 w-fit'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-blue-500'>5K+</h2>
                    </div>

                     <p className= {` ${theme=='light'? 'text-gray-800': 'text-gray-200'} font-semibold `}>
                        Active learners engaged in dynamic courses
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Stats