import React from 'react';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import Button from './Button';


const ContactUs = () => {
  return (
    <section className="p-6 md:p-16 font-poppins bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-2xl shadow-gray-300 rounded-xl p-6">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <input
              type="email"
              placeholder="Your EMail"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3 h-32"
            ></textarea>
            <Button className='w-full'>Send Message</Button>
          
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold mb-4">Get In Touch</h1>
          <p className="text-[16px] sm:text-[17px] md:text-[18px] text-gray-500 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold mb-1">
                  Lhokseumawe, Aceh
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span><FaPhone></FaPhone></span> <span>+62 6943 6956</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span><MdMail></MdMail></span> <span>contact@domain.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span><FaLocationDot></FaLocationDot></span> <span>Jl. Darussalam Hagu selatan</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
