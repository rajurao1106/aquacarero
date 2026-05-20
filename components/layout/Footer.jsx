"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#f8fafc] pt-20 text-white">
      {/* --- TOP OCEAN WAVE CONTAINER SHAPE --- */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px] fill-[#222222]"
        >
          <path d="M0,60 C150,100 350,120 600,60 C850,0 1050,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* --- MAIN DARK WRAPPER SECTION --- */}
      <div className="bg-[#222222] px-4 pt-16 pb-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* 1. TOP HERO CTA SECTION */}
          <div className="flex flex-col items-center justify-between gap-6  pb-10 md:flex-row">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Please <span className="text-[#00c4ff]">Call Us</span> Take an
              Extraordinary Service
            </h2>

            {/* Phone CTA Button */}
            <a
              href="tel:+917878535701"
              className="flex items-center space-x-3 rounded-full bg-[#00c4ff] px-8 py-3.5 font-bold text-white shadow-md transition-all hover:bg-sky-400 hover:shadow-lg"
            >
              <FaPhoneAlt className="h-4 w-4" />
              <span>+91 777-1967-070</span>
            </a>
          </div>

          {/* Decorative Wave/Squiggle Line Divider Asset */}
          <div className="relative py-8 flex justify-center opacity-20">
            <svg
              className="w-full h-4 stroke-white fill-none"
              viewBox="0 0 1200 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0,10 Q30,0 60,10 T120,10 T180,10 T240,10 T300,10 T360,10 T420,10 T480,10 T540,10 T600,10 T660,10 T720,10 T780,10 T840,10 T900,10 T960,10 T1020,10 T1080,10 T1140,10 T1200,10"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* 2. FOOTER LINKS CONTENT GRID */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12">
            {/* Column 1: Brand & Socials */}
            <div className="space-y-6 lg:col-span-4">
              {/* Logo Typography */}
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-black tracking-tight text-[#00c4ff] ">
                  Aquacarero
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-400">
                Advanced RO technology designed to eliminate 99% of impurities,
                delivering crisp, safe, and mineral-rich drinking water to your
                family everyday.
              </p>
              {/* Social Round Media Icons */}
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#222222] transition-transform hover:scale-110"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#222222] transition-transform hover:scale-110"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#222222] transition-transform hover:scale-110"
                >
                  <FaTwitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="space-y-4 lg:col-span-2">
              <h3 className="text-lg font-bold text-white tracking-wide">
                Links
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#00c4ff]"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#00c4ff]"
                  >
                    About Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#00c4ff]"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#00c4ff]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="space-y-4 lg:col-span-2">
              <h3 className="text-lg font-bold text-white tracking-wide">
                Services
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#00c4ff]"
                  >
                    Water Purifier
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#00c4ff]"
                  >
                    Vaccum Cleaner
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#00c4ff]"
                  >
                    Water Softner
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#00c4ff]"
                  >
                    Spare Parts
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Address Details */}
            <div className="space-y-4 lg:col-span-3">
              <h3 className="text-lg font-bold text-white tracking-wide">
                Address
              </h3>
              <ul className="space-y-3.5 text-sm text-gray-400">
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="h-5 w-5 text-[#00c4ff] shrink-0 mt-0.5" />
                  <span>Indra Colony, Beside Top-n-Town, Raver Road</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhoneAlt className="h-4 w-4 text-[#00c4ff] shrink-0" />
                  <span>+91 777-1967-070</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaRegEnvelope className="h-4 w-4 text-[#00c4ff] shrink-0" />
                  <span className="break-all">info@Aquacarero .com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. BOTTOM BASE RIGHTS COPY BAR */}
          <div className="mt-6 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            <p>© Copyright 2023 | Aquataflo | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
