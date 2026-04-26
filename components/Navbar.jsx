"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const NavLinks = [
    { id: 'home', title: 'Home' },
    { id: 'clients', title: 'Clients' },
    { id: 'accredianEdge', title: 'Accredian Edge' },
    { id: 'cat', title: 'CAT' },
    { id: 'howItWorks', title: 'How It Works' },
    { id: 'faqs', title: 'FAQs' },
    { id: 'testimonials', title: 'Testimonials' },

  ]

  const handleClickLink = (link) => {
    scrollToSection(link.id)
    setActiveLink(link.id)
  }


  return (
    <nav className={`${theme == 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} w-full  shadow-md sticky top-0 z-50`}>

      {/* Main Container */}
      <div className="max-w-8xl mx-auto flex justify-between items-center px-20 py-6 0">

        {/* Logo */}
        <img src="/Images/logo1.webp" alt="logo" className="h-9" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 font-semibold ">

          {
            NavLinks.map((link, i) => (
              <li key={link.id || i | link.title} onClick={() => handleClickLink(link)} className="hover:text-blue-500 cursor-pointer">
                {link.title}

                <div className={`w-full h-[2px] bg-blue-500 transform origin-left transition-all duration-300 ease-in-out
                 ${activeLink === link.id ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </li>
            ))
          }

          <li onClick={toggleTheme} className="hover:text-blue-500 cursor-pointer">{theme === "light" ? <MdOutlineDarkMode size={30} /> : <CiLight size={30} />}</li>
          {/* <CiLight /> */}

        </ul>

        {/* Mobile Menu */}
        <div className="relative lg:hidden">

          {/* Icon */}
          <HiMenuAlt3
            size={30}
            className="cursor-pointer "
            onClick={() => setOpen(!open)}
          />

          {/* Dropdown Menu */}
          {open && (
            <ul className={`${theme == 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} absolute right-0 mt-3 w-fit min-w-[200px] flex flex-col gap-3 p-4  shadow-lg rounded-xl font-semibold   transition-all duration-200`}>
              {
                NavLinks.map((link, i) => (
                  <li key={link.id || i} onClick={() => scrollToSection(link.id)} className="hover:text-blue-500 cursor-pointer">
                    {link.title}

                  </li>
                ))
              }

              <li onClick={toggleTheme} className="hover:text-blue-500 cursor-pointer">{theme === "light" ? <MdOutlineDarkMode size={30} /> : <CiLight size={30} />}</li>

            </ul>
          )}

        </div>
      </div>

    </nav>
  );
};

export default Navbar;