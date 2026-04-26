'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Faqs = () => {


  const { theme, toggleTheme,setOpenForm } = useTheme();

  const faqData = [
    {
      id: 'course',
      label: 'About the Course',
      questions: [
        { q: 'What types of corporate training programs does Accredian offer?', a: 'Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.' },
        { q: 'What domain specializations are available?', a: 'Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.' }
      ]
    },
    {
      id: 'delivery',
      label: 'About the Delivery',
      questions: [
        { q: 'Can the courses be customized for specific industries or teams?', a: 'Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.' },
        { q: 'Who are the instructors for these programs?', a: 'Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.' },
        { q: 'What formats are the programs delivered in?', a: 'Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team\'s preferences and requirements.' }
      ]
    },
    {
      id: 'misc',
      label: 'Miscellaneous',
      questions: [
        { q: 'What is the ideal team size for corporate training?', a: 'Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.' },
        { q: 'How do we get started with Accredian?', a: 'Get started with Accredian by contacting us or requesting a quote on our website.' }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('course');
  const [openIndex, setOpenIndex] = useState(null);


  const currentQuestions = faqData.find(cat => cat.id === activeCategory)?.questions || [];

  return (
    <div id='faqs' className={`${theme == 'light' ? 'bg-[#f5f7fb]' : 'bg-[#0f172a]'} max-w-8xl mx-auto py-20 px-20 sm:px-20 font-sans`}>

      <div className='mb-16 text-center lg:text-left'>
        <h1 className={`${theme == 'light' ? 'text-gray-900' : 'text-white'} text-3xl md:text-4xl font-bold`}>
          Frequently Asked <span className='text-blue-600'>Questions</span>
        </h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>

        {/* LEFT */}
        <div className='lg:col-span-4 lg:px-16 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible flex-nowrap pb-4 lg:pb-0 no-scrollbar'>
          {faqData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
            cursor-pointer min-w-[200px] lg:min-w-0 lg:w-full 
            py-3 lg:py-4 lg:px-6 text-lg font-bold rounded-xl transition-all duration-300 border-2
            ${activeCategory === cat.id
                  ? `text-blue-600 shadow-xl border-transparent ${theme == 'light' ? 'bg-white' : 'bg-gray-800'}`
                  : `${theme == 'light'
                    ? 'border-gray-200 text-gray-500 bg-white'
                    : 'border-gray-700 text-gray-300 bg-[#1e293b]'}`
                }
          `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* RIGHT */}
        <div className='lg:col-span-8'>
          <div className='flex flex-col gap-6'>
            {currentQuestions.map((item, index) => (
              <div key={index} className={`${theme == 'light' ? 'border-gray-200' : 'border-gray-700'} border-b`}>

                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex cursor-pointer justify-between items-center text-left py-3 group"
                >
                  <span className={`text-lg font-bold transition-colors 
                  ${openIndex === index ? 'text-blue-600': theme === 'light'? 'text-gray-800' : 'text-white'}`}
                  >
                    {item.q}
                  </span>

                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index
                      ? <ChevronUp className={`${theme == 'light' ? 'text-gray-600' : 'text-gray-300'}`} />
                      : <ChevronDown className={`${theme == 'light' ? 'text-gray-400' : 'text-gray-500'}`} />
                    }
                  </div>
                </button>

                {openIndex === index && (
                  <div className="mt-2 pb-6">
                    <p className={`${theme == 'light' ? 'text-gray-600' : 'text-gray-300'} leading-relaxed`}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BUTTON */}
      <div className="mt-16 flex justify-center">
        <button onClick={() => setOpenForm(true)} className="bg-blue-600 text-white px-6 py-3 cursor-pointer rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-105">
          Enquire Now
        </button>
      </div>

    </div>
  );
};

export default Faqs;