import React from 'react'

const CourseCart3 = ({course}) => {
    return (
        <>
            <div
                key={course.id || course.title}
                className='hidden md:flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300'
            >
                {/* Image Section - Height kam ki hai taaki 4 cards fit ho sakein */}
                <div className='w-full h-40 overflow-hidden'>
                    <img
                        src={course.image}
                        alt={course.title}
                        className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                    />
                </div>

                {/* Content Section */}
                <div className='p-5 flex flex-col items-center text-center gap-2'>
                    <h2 className='text-lg font-bold text-blue-600 leading-tight'>
                        {course.title}
                    </h2>
                    <p className='text-xs text-gray-600 font-medium'>
                        {course.description}
                    </p>

                    {/* <div className='w-10 h-1 mt-1 bg-blue-600 rounded-full' /> */}
                </div>
            </div>
        </>
    )
}

export default CourseCart3
