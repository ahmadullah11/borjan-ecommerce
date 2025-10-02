import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Get in touch */}
        <div className="space-y-3 col-span-1">
          <h3 className="font-bold">Get in touch</h3>
          <p className="flex items-center gap-2 text-sm">
            <MdEmail className="text-blue-600" />
            customercare@borjan.com.pk
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MdPhone className="text-black" />
            +9242111-267-526
          </p>
          <div>
            <p className="font-semibold text-sm">Customer services timing</p>
            <p className="text-sm">Monday - Saturday</p>
            <p className="text-sm">9:30 am to 5:30 pm</p>
          </div>
          <p className="flex items-center gap-2 text-sm">
            <FaWhatsapp className="text-green-500" />
            WHATSAPP CHAT: 0345-111-11-26
          </p>
          <p className="text-sm font-semibold">
            Response Time:{" "}
            <span className="font-normal">
              24 Working Hours (excluding holidays)
            </span>
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTiktok className="cursor-pointer hover:text-black" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
            <FaWhatsapp className="cursor-pointer hover:text-green-500" />
          </div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="font-bold mb-3">Brands</h3>
          <ul className="space-y-2 text-sm">
            <li>NAYZA</li>
            <li>DIGGER</li>
            <li>GIG</li>
            <li>SKY WALK</li>
            <li>GEN-Z</li>
            <li>GIRL-B</li>
            <li>TOT BA TOT</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3">About US</h3>
          <ul className="space-y-2 text-sm">
            <li>THE COMPANY</li>
            <li>CONTACT</li>
            <li>BAADMAY</li>
            <li>FAQ</li>
            <li>CAREER</li>
            <li>STORE LOCATOR</li>
            <li>BLOG</li>
          </ul>
        </div>

        {/* Exchange & Return */}
        <div>
          <h3 className="font-bold mb-3">Exchange & Return</h3>
          <ul className="space-y-2 text-sm">
            <li>EXCHANGE & RETURN POLICY</li>
            <li>PRIVACY POLICY</li>
            <li>TERMS & CONDITIONS</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-bold mb-3">Newsletter Signup</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button className="px-4 py-2 bg-indigo-800 text-white rounded-r-lg hover:bg-indigo-900">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600 flex flex-col md:flex-row items-center justify-center gap-2">
        {/* <img
          src="https://borjan.com.pk/cdn/shop/files/360-logo.png" // replace with your 360 logo
          alt="360 logo"
          className="w-12 h-12"
        /> */}
        <p>Copyright © 2025, Borjan all rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
