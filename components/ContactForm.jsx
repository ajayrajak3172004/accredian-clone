'use client'
import React from 'react'
import { X } from 'lucide-react'

const ContactForm = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            {/* Modal Container */}
            <div className="w-[90%] md:w-[800px] bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                {/* LEFT IMAGE */}
                <div className="md:w-1/2 hidden md:block">
                    <img
                        src="/Images/business.webp"
                        alt="form"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT FORM */}
                <div className="w-full md:w-1/2 p-6 relative">

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={onClose}
                        className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black"
                    >
                        <X size={20} />
                    </button>

                    {/* TITLE */}
                    <h2 className="text-2xl font-bold mb-6">Enquire Now</h2>

                    {/* FORM */}
                    <form className="flex flex-col gap-4">

                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="border-b outline-none py-2"
                        />

                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="border-b outline-none py-2"
                        />

                        {/* PHONE */}
                        <div className="flex items-center gap-2 border-b py-2">
                            <span>🇮🇳 +91</span>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="outline-none w-full"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Enter company name"
                            className="border-b outline-none py-2"
                        />

                        <select className="border-b outline-none py-2">
                            <option>Select Domain</option>
                            <option>Product Management</option>
                            <option>CFO</option>
                            <option>Data Science</option>
                            <option>Artificial Intelligence</option>
                            <option>Human Resources</option>
                            <option>Strategy & Leadership</option>
                            <option>General Management</option>
                            <option>Digital Transformation</option>
                            <option>Business Management</option>
                            <option>Finance</option>
                            <option>Project Management</option>
                            <option>Senior Management</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Enter No. of candidates"
                            className="border-b outline-none py-2"
                        />

                        <select className="border-b outline-none py-2">
                            <option>Select Mode of Delivery</option>
                            <option>Online</option>
                            <option>Offline</option>
                            
                        </select>

                        <input
                            type="text"
                            placeholder="Eg: Gurgaon, Delhi, India"
                            className="border-b outline-none py-2"
                        />

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm