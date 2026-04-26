'use client'
import React from 'react'
import HowitWorksCart from './carts/HowitWorksCart'
import { LuTv } from "react-icons/lu";
import { useTheme } from '@/context/ThemeContext';

const HowItWorks = () => {


  const { theme, toggleTheme } = useTheme();

  const howItWorksData = [
    {
      id: 1,
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" color='white' width="40" height="40" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-combined">
          <path d="M12 16v5" /> <path d="M16 14v7" /> <path d="M20 10v11" /> <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
          <path d="M4 18v3" />
          <path d="M8 14v7" />
        </svg>
      ),
    },




    {
      id: 2,
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals.",
      icon: (<LuTv size={32} color='white' />),
    },

    {
      id: 3,
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" color='white' width="40" height="40" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-monitor-play-icon lucide-monitor-play">
          <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
          <path d="M12 17v4" /><path d="M8 21h8" /><rect x="2" y="3" width="20" height="14" rx="2" /></svg>
      ),
    },
  ];


  return (
    <div id='howItWorks' className={`${theme=='light'? 'bg-[#f5f7fb] ': 'bg-[#0f172a]'} flex flex-col justify-center items-center gap-5 pt-20 px-5 `}>

      <div className='flex flex-col gap-3 text-center'>
        <h1 className= {` ${theme=='light'? 'text-gray-900': 'text-white'} text-2xl md:text-3xl lg:text-4xl font-bold`}>
          How We <span className='text-blue-600'>Deliver Results</span> That Matter?
        </h1>
        <p className= {` ${theme=='light'? 'text-gray-700': 'text-gray-200'} md:text-md lg:text-lg  font-semibold`}>
          A Structured Three-Step Approach to <span className='text-blue-600'>Skill Development</span>
        </p>
      </div>

      <div className=' p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>

        {
          howItWorksData?.map((data) => (
            <HowitWorksCart key={data.id} data={data} />
          ))
        }



      </div>
    </div>
  )
}

export default HowItWorks
