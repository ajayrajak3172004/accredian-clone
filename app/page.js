'use client'
import AccredianEdge from "@/components/AccredianEdge";
import CAT from "@/components/CAT";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import CourseSegment from "@/components/CourseSegment";
import DomainExpertise from "@/components/DomainExpertise";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import SkillEnhancement from "@/components/SkillEnhancement";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useState } from "react";


export default function Home() {

const { theme, toggleTheme,openForm, setOpenForm } = useTheme();


  return (
    <div >
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegment />
      <SkillEnhancement />
      <CAT />
      <HowItWorks />
      <Faqs />
      <Testimonials />
      <Footer />
      <ContactForm
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
      />
    </div>
  );
}
