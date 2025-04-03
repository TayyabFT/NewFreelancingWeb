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
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {/* <span className="font-bold text-lg">Euka</span> */}
          <a href="#" className="hover:text-green-600">
            Home
          </a>
          <a href="#" className="hover:text-green-600">
            Pricing
          </a>
          <a href="#" className="hover:text-green-600">
            Case Studies
          </a>
          <a href="#" className="hover:text-green-600">
            Find Affiliates
          </a>
          <a href="#" className="hover:text-green-600">
            About
          </a>
          <a href="#" className="hover:text-green-600">
            Blog
          </a>
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-green-950 hover:text-green-900">
            <FaFacebook />
          </a>
          <a href="#" className="text-green-950 hover:text-green-900">
            <FaInstagram />
          </a>
          <a href="#" className="text-green-950 hover:text-green-900">
            <FaTwitter />
          </a>
          <a href="#" className="text-green-950 hover:text-green-900">
            <FaYoutube />
          </a>
          <a href="#" className="text-green-950 hover:text-green-900">
            <FaLinkedin />
          </a>
        </div>
        <div className="text-center text-gray-500 text-sm">
          <p>Affiliate Program | Privacy Policy | Terms & Conditions</p>
          <p>Copyright © 2025 Euka | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
