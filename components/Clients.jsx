'use client'
import React from 'react'
import "../app/globals.css";
import { useTheme } from '@/context/ThemeContext';

const Clients = () => {
    // bg-[#f5f7fb] dark:bg-[#0f172a]
 const { theme, toggleTheme } = useTheme();

    return (
        <div id='clients' className={` ${theme=='light'? 'bg-white': 'bg-[#0f172a]'} flex flex-col justify-center items-center gap-14 pt-30 px-5 `}>

            <div className='flex flex-col gap-3 text-center'>
                <h1 className={`${theme=='light'? 'text-gray-900': 'text-gray-300'} text-2xl md:text-3xl lg:text-4xl font-bold `}>
                    Our Proven <span className='text-blue-600'>Partnership</span>
                </h1>
                <p className={`${theme=='light'? 'text-gray-700': 'text-gray-300'} md:text-md lg:text-lg  font-semibold`}>
                    Successful Collaborations With the <span className='text-blue-600'>Industry’s Best</span>
                </p>
            </div>

            <div className="w-full overflow-hidden">

                {/* Mobile: Moving */}
                <div className="md:hidden animate-scroll flex gap-10 w-max">

                    <img src='/Images/reliance.png' className="h-12" />
                    <img src='/Images/hcl.png' className="h-14" />
                    <img src='/Images/ibm.png' className="h-10" />
                    <img src='/Images/crif.png' className="h-8" />
                    <img src='/Images/adp.svg' className="h-8" />
                    <img src='/Images/bayer.svg' className="h-10" />

                    {/* duplicate for infinite effect */}
                    <img src='/Images/reliance.png' className="h-12" />
                    <img src='/Images/hcl.png' className="h-14" />
                    <img src='/Images/ibm.png' className="h-10" />
                    <img src='/Images/crif.png' className="h-8" />
                    <img src='/Images/adp.svg' className="h-8" />
                    <img src='/Images/bayer.svg' className="h-10" />

                </div>

                {/* Tablet */}
                <ul className="hidden md:grid lg:hidden grid-cols-3 gap-y-8 gap-x-1 justify-items-center max-w-3xl mx-auto">

                    <li><img src='/Images/reliance.png' className="h-14" /></li>
                    <li><img src='/Images/hcl.png' className="h-14" /></li>
                    <li><img src='/Images/ibm.png' className="h-14" /></li>
                    <li><img src='/Images/crif.png' className="h-14" /></li>
                    <li><img src='/Images/adp.svg' className="h-14" /></li>
                    <li><img src='/Images/bayer.svg' className="h-14" /></li>

                </ul>

                {/* Desktop */}
                <ul className="hidden lg:flex justify-center items-center gap-28">

                    <li><img src='/Images/reliance.png' className="h-28" /></li>
                    <li><img src='/Images/hcl.png' className="h-28" /></li>
                    <li><img src='/Images/ibm.png' className="h-16" /></li>
                    <li><img src='/Images/crif.png' className="h-12" /></li>
                    <li><img src='/Images/adp.svg' className="h-12" /></li>
                    <li><img src='/Images/bayer.svg' className="h-24" /></li>

                </ul>

            </div>
        </div>

    )
}

export default Clients
