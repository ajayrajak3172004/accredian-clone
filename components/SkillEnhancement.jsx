'use client'
import { useTheme } from '@/context/ThemeContext';
import React from 'react'
import { LuMonitorCheck, LuMonitorX } from "react-icons/lu";
import SkillEnhanceCart from './carts/SkillEnhanceCart';

const SkillEnhancement = () => {



    const cardData = [
        {
            id: 1,
            title: "Tech Professionals",
            desc: "Enhance expertise, embrace tech, drive innovation.",
            icon: <LuMonitorCheck color="white" size={50} />
        },
        {
            id: 2,
            title: "Non-Tech Professionals",
            desc: "Adapt digitally, collaborate in tech environments.",
            icon: <LuMonitorX color="white" size={50} />
        },
        {
            id: 3,
            title: "Emerging Professionals",
            desc: "Develop powerful skills for rapid career growth.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" color='white' width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Senior Professionals",
            desc: "Strengthen leadership, enhance strategic decisions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="50" color='white' height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
            )
        }
    ];

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={` ${theme == 'light' ? 'bg-white' : 'bg-[#0f172a]'}  py-20`}>
            <div className="max-w-7xl  md:mx-16 lg:mx-28  bg-blue-500 md:rounded-xl px-6 lg:px-12 pt-8 pb-6 lg:pb-0 flex flex-col lg:flex-row items-center justify-between gap-8">

                {/* LEFT */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10 pt-6">

                    <div className='flex flex-col gap-2'>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Why Should Join?
                        </h2>

                        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                            Strategic Skill Enhancement
                        </h1>
                    </div>

                    <img
                        src="/Images/imagehuman.png"
                        alt="hero"
                        width={300}
                        height={300}
                        className="object-contain hidden lg:block"
                    />
                </div>

                <div className="w-full lg:w-1/2 grid md:grid-cols-2">

                    {cardData.map((card) => (
                        <SkillEnhanceCart key={card.id} card={card} />
                    ))}

                </div>

            </div>
        </div>
    )
}

export default SkillEnhancement