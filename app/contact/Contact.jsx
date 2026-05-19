"use client";

import React from 'react';
import { 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaRegEnvelope, 
  FaRegClock 
} from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#222222]">
      
      {/* --- TOP HEADER / BREADCRUMB --- */}
      <div className="py-16 text-center space-y-2 border-b border-gray-50">
        <h1 className="text-5xl font-serif font-bold text-[#1e2e4d]">
          Contact
        </h1>
        <p className="text-xs tracking-wider text-gray-400 font-medium">
          Pages &gt; <span className="text-gray-600">Contact</span>
        </p>
      </div>

      {/* --- MAIN SPLIT CONTENT CONTENT --- */}
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">
          
          {/* LEFT COLUMN: Contact Details Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-[#1e2e4d]">
                Send a Message
              </h2>
              {/* Decorative small orange squiggle line */}
              <div className="w-10 h-1">
                <svg viewBox="0 0 40 6" className="w-full h-full stroke-amber-500 fill-none">
                  <path d="M0,3 Q5,0 10,3 T20,3 T30,3 T40,3" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <ul className="space-y-6">
              {/* Phone Row */}
              <li className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                  <FaPhoneAlt className="h-4 w-4" />
                </div>
                <div className="text-sm pt-1">
                  <span className="font-semibold text-gray-500">Call Us </span>
                  <a href="tel:+12078761059" className="text-gray-800 font-medium hover:underline">
                    +1 207-876-1059
                  </a>
                </div>
              </li>

              {/* Address Row */}
              <li className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                  <FaMapMarkerAlt className="h-4 w-4" />
                </div>
                <div className="text-sm pt-1 text-gray-800 font-medium leading-relaxed max-w-xs">
                  3065 Upton Avenue, Guilford, Maine 04443 USA
                </div>
              </li>

              {/* Email Row */}
              <li className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                  <FaRegEnvelope className="h-4 w-4" />
                </div>
                <div className="text-sm pt-1">
                  <span className="font-semibold text-gray-500">E-mail </span>
                  <a href="mailto:sales@example.com" className="text-gray-800 font-medium hover:underline">
                    sales@example.com
                  </a>
                </div>
              </li>

              {/* Timing/Clock Row */}
              <li className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                  <FaRegClock className="h-4 w-4" />
                </div>
                <div className="text-sm pt-1 text-gray-800 font-medium leading-relaxed">
                  Monday-Friday: 9am to 5pm <br />
                  Saturday: 10am to 4pm <br />
                  Sunday: Closed
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN: Interactive Input Message Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-[#1e2e4d]">
                Contact Information
              </h2>
              {/* Decorative small orange squiggle line */}
              <div className="w-10 h-1">
                <svg viewBox="0 0 40 6" className="w-full h-full stroke-amber-500 fill-none">
                  <path d="M0,3 Q5,0 10,3 T20,3 T30,3 T40,3" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 tracking-wide block">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full rounded-2xl bg-[#f8fafc] border border-transparent px-5 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 tracking-wide block">
                    Email address
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full rounded-2xl bg-[#f8fafc] border border-transparent px-5 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 tracking-wide block">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full rounded-2xl bg-[#f8fafc] border border-transparent px-5 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 tracking-wide block">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full rounded-2xl bg-[#f8fafc] border border-transparent px-5 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 tracking-wide block">
                  Message
                </label>
                <textarea 
                  rows={4}
                  required
                  className="w-full rounded-2xl bg-[#f8fafc] border border-transparent px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit"
                  className="rounded-full border-2 border-amber-500 bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-widest text-[#1e2e4d] transition-all hover:bg-amber-500 hover:text-white"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>

      {/* --- BOTTOM FULL WIDTH GOOGLE MAP EMBED --- */}
      <div className="w-full h-[450px] relative bg-slate-100 border-t border-gray-100 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118965.73641215112!2d81.54714659726562!3d21.23864030000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x269e061803faf56f!2sVY%20Hospital!5e0!3m2!1sen!2sin!4v1716121500000!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full border-0 grayscale opacity-85 contrast-115"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
        />
      </div>

    </div>
  );
}