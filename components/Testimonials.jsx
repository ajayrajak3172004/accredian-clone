'use client'
import React from 'react'
import Slider from "react-slick";
import { Headset } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Testimonials = () => {

  const { theme, setOpenForm } = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const testimonialsData = [
    { id:1, img: '/Images/adp.svg', text: '"We would like to thank Accredian for the wonderful support and the beautiful journey..." ' },
    { id:2, img: '/Images/bayer.svg', text: '"Accredians commitment to excellence is unmatched..." ' },
    { id:3, img: '/Images/reliance.png', text: '"Choosing Accredian for the learning & development..." ' },
  ];

  return (
    <>
      {/* SECTION 1 */}
      <div className={`w-full ${theme==='light' ? 'bg-white' : 'bg-[#0f172a]'}`}>

      
      <div id='testimonials' className={`max-w-7xl mx-auto py-20 px-5 ${theme==='light' ? 'bg-white' : 'bg-[#0f172a]'}`}>

        <div className='flex flex-col gap-3 text-center mb-10'>
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${theme==='light' ? 'text-black' : 'text-white'}`}>
            Testimonials from <span className='text-blue-600'>Our Partners</span>
          </h1>

          <p className={`md:text-md lg:text-lg font-semibold ${theme==='light' ? 'text-gray-700' : 'text-gray-300'}`}>
            What <span className='text-blue-600'>Our Clients</span> Are Saying
          </p>
        </div>

        <Slider {...settings}>
          {testimonialsData.map((item) => (
            <div key={item.id} className='px-3'>
              <div className={`flex flex-col gap-6 p-10 rounded-2xl min-h-[250px] shadow-sm hover:shadow-md transition-shadow
                ${theme==='light' ? 'bg-white border border-gray-200' : 'bg-[#1e293b] border border-gray-700'}`}>

                <div className='flex items-center h-12 w-auto'>
                  <img
                    src={item.img}
                    alt='brand'
                    className='h-14 w-auto object-contain'
                  />
                </div>

                <p className={`italic leading-relaxed ${theme==='light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  {item.text}
                </p>

              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* CTA SECTION */}
      <div className={`w-full px-4 md:px-20 lg:px-24 py-20 ${theme==='light' ? 'bg-white' : 'bg-[#0f172a]'}`}>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-6 px-4 py-5 md:px-6 md:py-5
          lg:h-52 bg-blue-500 rounded-xl border border-blue-300 shadow-md hover:shadow-xl transition-all duration-300">

          {/* ICON */}
          <div className='bg-blue-300 rounded-xl p-1 flex items-center justify-center'>
            <div className='text-blue-500 text-xl font-bold md:text-5xl bg-white rounded-xl p-2'>
              <Headset size={50} />
            </div>
          </div>

          {/* TEXT */}
          <div className='flex flex-col text-center lg:text-left flex-1 gap-2'>
            <p className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>
              Want to Learn More About Our Training Solutions?
            </p>

            <p className='text-md hidden md:block lg:text-lg text-gray-200 font-semibold'>
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center md:justify-end">
            <button onClick={() => setOpenForm(true)} className="bg-white text-lg text-blue-600 px-12 py-2 md:py-3 cursor-pointer rounded-xl font-bold shadow-lg">
              Contact Us {'>'}
            </button>
          </div>

        </div>
      </div>

      </div>
    </>
  )
}

export default Testimonials