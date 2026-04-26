import React from 'react'

const CourseCart2 = ({ course }) => {
    return (
        <>
            <div key={course?.id || course.title} className="p-2">

                <div className='flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100'>

                    <div className='w-full h-40 overflow-hidden'>
                        <img
                            src={course.image}
                            alt={course.title}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='p-5 flex flex-col items-center text-center gap-2'>
                        <h2 className='text-xl font-bold text-blue-600'>
                            {course.title}
                        </h2>

                    </div>

                </div>

            </div>
        </>
    )
}

export default CourseCart2
