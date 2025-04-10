// components/Footer.js
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4">
        <div className="flex flex-wrap justify-center space-x-4 space-y-2 md:space-y-0 md:space-x-6 mb-4 text-sm md:text-base text-gray-700 text-center">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-600">
            Case Studies
          </a>
          <a href="#" className="hover:text-blue-600">
            Find Affiliates
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Blog
          </a>
        </div>
        <div className="flex space-x-4 mb-4 justify-center text-xl">
          <a href="#" className="text-blue-950 hover:text-blue-900">
            <FaFacebook />
          </a>
          <a href="#" className="text-blue-950 hover:text-blue-900">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-950 hover:text-blue-900">
            <FaTwitter />
          </a>
          <a href="#" className="text-blue-950 hover:text-blue-900">
            <FaYoutube />
          </a>
          <a href="#" className="text-blue-950 hover:text-blue-900">
            <FaLinkedin />
          </a>
        </div>
        <div className="text-center text-gray-500 text-xs md:text-sm px-2">
          <p>Affiliate Program | Privacy Policy | Terms & Conditions</p>
          <p>Copyright © 2025 Euka | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
