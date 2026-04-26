'use client'
import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {

  const { theme,setOpenForm } = useTheme();

  return (
    <>
      <div className={`w-full px-6 py-10 md:px-16
  ${theme === 'light'
          ? 'bg-[#1d1d1d] text-white md:bg-white md:text-black'
          : 'bg-[#1d1d1d] text-white md:bg-[#0f172a] md:text-white'
        }`}>

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* LEFT */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-4">

            <div className='flex flex-col gap-2'>
              <div>
                {/* Logo */}
                <img src="/Images/logo1.webp" alt="logo" className="h-10 hidden md:block" />
                <img src="/Images/log2.webp" alt="logo" className="h-10 md:hidden" />
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 text-xl mt-2">
                <a href='https://www.facebook.com/accredianlearn' className='hover:text-blue-500'><AiFillFacebook size={22} /></a>
                <a href='https://in.linkedin.com/school/accredianedu/' className='hover:text-blue-500'><RxLinkedinLogo size={22} /></a>
                <a href='https://x.com/accredianedu' className='hover:text-blue-500'><FaTwitter size={22} /></a>
                <a href='https://www.instagram.com/accredian_edu' className='hover:text-blue-500'><FaInstagram size={22} /></a>
                <a href='https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA' className='hover:text-blue-500'><FaYoutube size={22} /></a>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <button onClick={() => setOpenForm(true)} className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg w-fit mt-3">
                Enquire Now
              </button>

              <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm font-semibold`}>
                Speak with our Advisor
              </p>
            </div>

          </div>
        </div>

        {/* LINE */}
        <div className={`border-t my-6 ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'}`}></div>

        <div className='flex flex-col lg:flex-row w-full justify-between gap-10'>

          {/* MIDDLE */}
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg">Accredian</h2>

            <a href='https://accredian.com/About' className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'} hover:text-blue-500`}>
              About
            </a>

            <a href='https://blog.accredian.com/' className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'} hover:text-blue-500`}>
              Blog
            </a>

            <a href='https://accredian.com/whyaccredian' className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'} hover:text-blue-500`}>
              Why Accredian
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg">Contact Us</h2>

            <p className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>
              Email us: <span className="text-blue-400">enterprise@accredian.com</span>
            </p>

            <p className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'} text-sm leading-relaxed`}>
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
              Sector 18, Gurugram, Haryana
            </p>
          </div>

        </div>

        {/* LINE */}
        <div className={`border-t my-6 ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'}`}></div>

        {/* BOTTOM */}
        <div className={`text-center text-sm ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
        </div>

      </div>
    </>
  )
}

export default Footer