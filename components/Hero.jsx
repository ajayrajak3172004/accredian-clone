"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Hero = () => {

const { theme, toggleTheme,openForm, setOpenForm } = useTheme();



  return (
    <section id="home" className={`${theme=='light'? 'bg-[#f5f7fb]': 'bg-[#0f172a]'} w-full px-4 lg:px-16 py-10 `}>
      
      {/* Rounded Container */}
      <div className={` ${theme=='light'? 'bg-blue-50': 'bg-[#1e293b]'} max-w-7xl mx-auto shadow-xl  rounded-3xl px-6 lg:px-12 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10`}>
        
        {/* LEFT */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">

          {/* Heading */}
          <h1 className={` ${theme=='light'? 'text-gray-900': 'text-white'} text-3xl lg:text-5xl font-bold  leading-tight`}>
            Next-Gen{" "}
            <span className="text-blue-500">Expertise</span>
            <br />
            For Your{" "}
            <span className="text-blue-500">Enterprise</span>
          </h1>

          {/* Description */}
          <p className={ `${theme=='light'? 'text-gray-900': 'text-gray-300'} font-semibold   text-base lg:text-lg max-w-md mx-auto lg:mx-0`}>
            Cultivate high-performance teams through expert learning.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm lg:text-base">
            
            <div className="flex items-center gap-2">
              <IoIosCheckmarkCircleOutline className="text-green-500" size={20} />
              Tailored Solutions
            </div>

            <div className="flex items-center gap-2">
              <IoIosCheckmarkCircleOutline className="text-green-500" size={20} />
              Industry Insights
            </div>

            <div className="flex items-center gap-2">
              <IoIosCheckmarkCircleOutline className="text-green-500" size={20} />
              Expert Guidance
            </div>

          </div>

          {/* Button */}
          <button onClick={() => setOpenForm(true)} className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full lg:w-48 px-5 py-2 lg:px-6 lg:py-3 rounded-lg shadow-md transition">
            Enquire Now
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/Images/corporate-big-hero.webp"
            alt="hero"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;