import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between w-full gap-8 p-8 bg-slate-100">
        <div>
          <b>Free Customer Care</b>
          <p>+2519-95464646</p> <br />
          <b>Need Live Support?</b>
          <p>cffv2000@gmail.com</p>
          <br />
          <b>Address:</b>
          <p>1, ብስራተ ገብርኤል ቤተክርስቲያን ወረድ ብሎ አሌክስ ስጋ ቤት ፊት ለፊት</p>
          <p>2, ሰሚት ፍየል ቤት ወደ ፊጋ በሚወስደው መንገድ ዲቦራ ት/ቤት ፊት ለፊት</p>
          <p>3, ከሜክሲኮ አደባባይ ወደ ሳር ቤት ሲወርዱ በግራ በኩል SNV ህንፃ 1ኛ ፎቅ</p>
        </div>

        <div>
          <b>Products</b> <br /> <br />
          <ul>
            <li>In-Store Shopx</li>
            <li>Brands</li>
            <li>Gift Cards</li>
            <li>Careers</li>
            <li>About Us</li>
          </ul>
        </div>

        <div>
          <b>Company</b>
          <br /> <br />
          <ul>
            <li>Showroom</li>
            <li>Our Story</li>
            <li>Share Your Style</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <b>Follow Us</b>
          <br /> <br />
          <div className="flex gap-3">
            <div className="p-3 text-white transition-colors duration-300 bg-blue-600 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500">
              <FaFacebookF />
            </div>
            <div className="p-3 text-white transition-colors duration-300 bg-blue-400 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500">
              <FaTwitter />
            </div>
            <div className="p-3 text-white transition-colors duration-300 bg-pink-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500">
              <FaInstagram />
            </div>
            <div className="p-3 text-white transition-colors duration-300 bg-blue-700 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500">
              <FaLinkedinIn />
            </div>
            <div className="p-3 text-white transition-colors duration-300 bg-black rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500">
              <FaTiktok />
            </div>
          </div>
          <br />
          <p>Open Hours 2:30 AM - 12:30 AM (Local Time), Monday - Saturday</p>
        </div>
      </footer>
      <div className="w-full py-4 text-center bg-slate-200">
        Copyright © 2024 Classic Furniture All Rights Reserved <br />
        <br />
        <div className="flex items-center justify-center">
          <p className="mr-1">Powered by </p>
          <a
            href="/https://shegerinnovations.com.et"
            className="text-blue-700 "
          >
            Sheger Innovations
          </a>
          <FiExternalLink color="blue" />
        </div>
      </div>
    </>
  );
};

export default Footer;
