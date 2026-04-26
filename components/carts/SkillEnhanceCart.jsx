import React from 'react'

const SkillEnhanceCart = ({ card }) => {
    return (
        <>
            <div
                key={card.id}
                className='flex flex-row md:flex-col items-center md:items-start gap-4 p-4 rounded-xl'
            >
                {card.icon}

                <div>
                    <h2 className='text-lg font-bold text-gray-900 dark:text-white'>
                        {card.title}
                    </h2>

                    <p className='text-sm text-gray-600 dark:text-gray-300'>
                        {card.desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SkillEnhanceCart
