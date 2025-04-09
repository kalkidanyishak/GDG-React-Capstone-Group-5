import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import logo from "../assets/images/footer_logo.png";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer>
      <Subscribe />
      <div className="py-8 flex flex-col align-element md:justify-around lg:justify-between items-center space-y-4 md:flex-row space-x-0 lg:space-x-8 md:items-start">
        {/* LOGO */}
        <div className="hidden lg:flex lg:flex-col space-y-2 max-w-sm items-center md:items-start">
          <img src={logo} alt="logo" className="w-40 h-auto" />
          <p className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus eum exercitationem inventore amet omnis unde iusto
            similique officiis aut beatae!
          </p>
        </div>
        {/* CONTACT INFO */}
        <div className="flex flex-col space-y-2 ">
          <h4 className="font-bold text-lg mb-2">Contact Information</h4>
          <p className="">
            <HiLocationMarker className="inline" />
            <span className="text-gray-500 px-2 py-1">
              732 Despard St, Atlanta
            </span>
          </p>
          <p className="">
            <MdEmail className="inline" />
            <span className="text-gray-500 px-2 py-1">+97 888 8888</span>
          </p>
          <p className="">
            <FaPhoneAlt className="inline" />
            <span className="text-gray-500 px-3 py-1">info@traveller.com</span>
          </p>
        </div>
        {/* QUICK LINK */}
        <div className="flex flex-col space-y-2 items-center md:items-start">
          <h4 className="font-bold text-lg mb-2">Quick Link</h4>
          <Link to="/" className="text-gray-500">
            Home
          </Link>
          <Link to="about" className="text-gray-500">
            About Us
          </Link>
          <Link to="/" className="text-gray-500">
            Tours
          </Link>
          <Link to="contact" className="text-gray-500">
            Contact
          </Link>
        </div>
        {/* FOLLOW US */}
        <div className="flex flex-col space-y-2 items-center md:items-start">
          <h4 className="font-bold text-lg mb-2">Follow US</h4>
          <SocialLinks />
        </div>
      </div>
      <div className="bg-black text-white py-8 text-center">
        <p>
          Copyright © All rights reserved (Website Developed & Managed by
          creativechroma)
        </p>
      </div>
    </footer>
  );
};
export default Footer;
