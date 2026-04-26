'use client'
import { useTheme } from '@/context/ThemeContext';
import React from 'react'
import Slider from "react-slick";
import CourseCart1 from './carts/CourseCart1';
import CourseCart2 from './carts/CourseCart2';
import CourseCart3 from './carts/CourseCart3';

const CourseSegment = () => {

    const { theme, toggleTheme } = useTheme();

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    var settings2 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const courseData = [
        {
            id: 1,
            image: '/Images/project-management.webp',
            title: 'Program Specific',
            description: 'Certificate, Executive, Post Graduate Certificate',
        },
        {
            id: 2,
            image: '/Images/digital-transformation.webp', // Change paths as needed
            title: 'Industry Specific',
            description: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
        },
        {
            id: 3,
            image: '/Images/data-sciencewebp.webp',
            title: 'Topic Specific',
            description: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
        },
        {
            id: 4,
            image: '/Images/senior-management.webp',
            title: 'Level Specific',
            description: 'Senior Leadership, Mid-Career Professionals, Freshers',
        }
    ];

    return (
        <div className={` ${theme=='light'? 'bg-white': 'bg-[#0f172a]'} flex flex-col justify-center items-center gap-5 pt-20 px-5 `}>

            <div className='flex flex-col gap-3 text-center'>
                <h1 className={`${theme=='light'? 'text-gray-900': 'text-gray-300'} text-2xl md:text-3xl lg:text-4xl font-bold  `}>
                    Tailored <span className='text-blue-600'>Course Segmentation</span>
                </h1>
                <p className={`${theme=='light'? 'text-gray-700': 'text-gray-300'} md:text-md lg:text-lg  font-semibold`}>
                    Explore  <span className='text-blue-500'>Custom-fit Courses</span> Designed to Address Every Professional Focus
                </p>
            </div>

            {/* Grid: 4 (lg), 3 (md), 2 (sm), 1 (default) */}
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl py-10'>


                {/* sm-md */}
                <div className="sm:hidden">
                    <Slider {...settings2}>

                        {courseData.map((course) => (
                            <CourseCart1 key={course.id} course={course}/>
                        ))}

                    </Slider>
                </div>


                 {/* sm-md */}
                <div className="hidden sm:block md:hidden">
                    <Slider {...settings}>

                        {courseData.map((course) => (
                            <CourseCart2 key={course.id} course={course}/>
                        ))}

                    </Slider>
                </div>


                {courseData.map((course) => (
                    <CourseCart3 key={course.id} course={course}/>

                ))}



            </div>
        </div>
    )
}

export default CourseSegment
