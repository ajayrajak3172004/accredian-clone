'use client'
import React from 'react'

const HowitWorksCart = ({data}) => {
  return (
    <>
      <div key={data.id || data.title} className='flex justify-center items-center'>

        {/* LEFT LINE */}
        <div className='w-1 md:w-2 h-20 md:h-36 rounded-2xl bg-blue-500'></div>

        {/* CARD */}
        <div className="flex items-center justify-center lg:gap-2 px-3 py-3 w-80
          flex-col text-center md:px-6 md:py-5
          bg-blue-50 rounded-xl border border-blue-300 shadow-md hover:shadow-xl transition-all duration-300">

          {/* NUMBER */}
          <div className='w-full flex justify-start'>
            <div className='px-2 border-3 border-blue-400 rounded-full'>
              <p className='text-md font-bold'>{data.id}</p>
            </div>
          </div>

          {/* ICON */}
          <div className='text-blue-600 text-xl md:text-5xl shrink-0 bg-blue-600 rounded-full p-2'>
            {data.icon}
          </div>

          {/* TITLE */}
          <p className='text-md lg:text-xl font-bold text-gray-800 leading-tight'>
           {data.title}
          </p>

          {/* DESC */}
          <p className='text-sm text-gray-500 font-semibold hidden md:block'>
            {data.description}
          </p>
        </div>

        {/* RIGHT LINE */}
        <div className='w-1 md:w-2 h-20 md:h-36 rounded-2xl bg-blue-500'></div>

      </div>
    </>
  )
}

export default HowitWorksCart