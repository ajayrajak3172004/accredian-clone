'use client'
import React from 'react'
import { LuLightbulb, LuBrain, LuBanknote } from "react-icons/lu";
import { FiUsers, FiBarChart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { GoGlobe } from "react-icons/go";
import { useTheme } from '@/context/ThemeContext';


const DomainExpertise = () => {

  const { theme, toggleTheme } = useTheme();

  const expertiseData = [
    { id: 1, title: "Product & Innovation Hub", icon: <LuLightbulb /> },
    { id: 2, title: "Gen-AI Mastery", icon: <LuBrain /> },
    { id: 3, title: "Leadership Elevation", icon: <FiUsers /> },
    { id: 4, title: "Tech & Data Insights", icon: <FiBarChart /> },
    { id: 6, title: "Operations Excellence", icon: <IoSettingsOutline /> },
    { id: 7, title: "Digital Enterprise", icon: <GoGlobe /> },
    { id: 8, title: "Fintech Innovation Lab", icon: <LuBanknote /> },
  ];

  return (
    <div className={` ${theme=='light'? 'bg-white': 'bg-[#0f172a]'} flex flex-col justify-center items-center gap-10 py-16 px-4 `}>
      
      <div className='flex flex-col gap-2 text-center'>
        <h2 className={`${theme=='light'? 'text-gray-900': 'text-gray-300'} text-2xl md:text-4xl font-bold `}>
          Our <span className='text-blue-600'>Domain Expertise</span>
        </h2>
        <p className={`  text-sm md:text-lg font-medium text-blue-500`}>
          Specialized Programs <span className={`${theme=='light'? 'text-gray-700': 'text-gray-300'} font-semibold `}>Designed to Fuel Innovation</span>
        </p>
      </div>

      {/* Grid: 3 columns fixed for all screens */}
      <div className='grid grid-cols-2  sm:grid-cols-3 gap-3 md:gap-6 w-full max-w-6xl'>
        {expertiseData.map((item) => (
          <div 
            key={item.id} 
            className={`
              
              flex flex-row items-center justify-center gap-2 p-3 
              
              
              md:flex-col md:text-center md:p-8
              
             ${theme=='light' ? 'bg-white' : 'bg-blue-100'}  rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300
            `}
          >
            {/* Icon Wrapper with Responsive Size */}
            <div className='text-blue-600 text-xl md:text-5xl shrink-0'>
              {item.icon}
            </div>

            {/* Title with Responsive Font Size */}
            <p className='text-[10px] sm:text-xs md:text-base font-bold text-gray-800 leading-tight'>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DomainExpertise