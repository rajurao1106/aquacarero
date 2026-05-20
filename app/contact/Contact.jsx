"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaRegClock,
} from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  // Stagger wrapper variant for list elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Fluid slide item reveal parameters
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#222222]">
      {/* --- TOP HEADER / BREADCRUMB --- */}
      <div className="py-20 text-center space-y-3 bg-gradient-to-b from-sky-50/50 to-white border-b border-gray-100/50">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]"
        >
          Get In Touch
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-serif font-bold tracking-tight text-[#1e2e4d] sm:text-5xl"
        >
          Contact Our Team
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-xs tracking-wider text-gray-400 font-semibold uppercase"
        >
          Home &gt; <span className="text-[#0ea5e9]">Contact Us</span>
        </motion.p>
      </div>

      {/* --- MAIN SPLIT CONTENT --- */}
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">
          
          {/* LEFT COLUMN: Contact Details Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8 bg-slate-50/50 p-8 rounded-3xl border border-gray-100/50 shadow-sm"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-extrabold tracking-tight text-[#1e2e4d]">
                Aquacarero
              </h2>
              <p className="text-sm text-gray-500">
                Have questions about custom commercial RO plants, residential testing, or warranty support? Contact us directly.
              </p>
            </div>

            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Phone Row */}
              <motion.li variants={itemVariants} className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[#0ea5e9]">
                  <FaPhoneAlt className="h-4 w-4" />
                </div>
                <div className="text-sm pt-1 space-y-0.5">
                  <p className="text-xs font-bold font-serif uppercase tracking-wider text-gray-400">
                    Call Support
                  </p>
                  <a
                    href="tel:+917771967070"
                    className="text-slate-800 hover:text-[#0ea5e9] transition-colors"
                  >
                    +91 77719-67070
                  </a>
                </div>
              </motion.li>

              {/* Address Row */}
              <motion.li variants={itemVariants} className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[#0ea5e9]">
                  <FaMapMarkerAlt className="h-4 w-4" />
                </div>
                <div className="text-sm pt-1 space-y-0.5">
                  <p className="text-xs font-bold font-serif uppercase tracking-wider text-gray-400">
                    Our Office
                  </p>
                  <p className="text-slate-800 leading-relaxed max-w-xs">
                    Indra Colony, Beside Top-n-Town, Raver Road, India
                  </p>
                </div>
              </motion.li>

              {/* Email Row */}
              <motion.li variants={itemVariants} className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[#0ea5e9]">
                  <FaRegEnvelope className="h-4 w-4" />
                </div>
                <div className="text-sm pt-1 space-y-0.5">
                  <p className="text-xs font-bold font-serif uppercase tracking-wider text-gray-400">
                    Email Enquiries
                  </p>
                  <a
                    href="mailto:info@aquacarero.com"
                    className="text-slate-800 hover:text-[#0ea5e9] transition-colors"
                  >
                    info@aquacarero.com
                  </a>
                </div>
              </motion.li>

              {/* Timing/Clock Row */}
              <motion.li variants={itemVariants} className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[#0ea5e9]">
                  <FaRegClock className="h-4 w-4" />
                </div>
                <div className="text-sm pt-1 space-y-0.5">
                  <p className="text-xs font-serif font-bold uppercase tracking-wider text-gray-400">
                    Working Hours
                  </p>
                  <div className="text-slate-800 leading-relaxed text-xs">
                    Monday - Saturday: 9:00 AM - 6:00 PM <br />
                    Sunday: Closed (Emergency Support Available)
                  </div>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Input Message Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold tracking-tight text-[#1e2e4d]">
                Send an Instant Message
              </h2>
              {/* Brand accent line animating out to width */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-1 rounded-full bg-[#0ea5e9]" 
              />
            </div>

            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-serif font-bold text-slate-700 tracking-wide block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-2xl bg-[#f8fafc] border border-gray-100 px-5 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-serif font-bold text-slate-700 tracking-wide block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-2xl bg-[#f8fafc] border border-gray-100 px-5 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-serif font-bold text-slate-700 tracking-wide block">
                    Subject / Concern
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-2xl bg-[#f8fafc] border border-gray-100 px-5 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-serif font-bold text-slate-700 tracking-wide block">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-2xl bg-[#f8fafc] border border-gray-100 px-5 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-serif font-bold text-slate-700 tracking-wide block">
                  Write Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your requirements or filter installation queries..."
                  className="w-full rounded-2xl bg-[#f8fafc] border border-gray-100 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white resize-none placeholder:text-gray-400"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="rounded-full bg-[#0ea5e9] px-10 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-sky-500 hover:shadow-lg"
                >
                  Submit Inquiry
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </main>

      {/* --- BOTTOM FULL WIDTH GOOGLE MAP EMBED --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[450px] relative bg-slate-100 border-t border-gray-100 overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118965.73641215112!2d81.54714659726562!3d21.23864030000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x269e061803faf56f!2sVY%20Hospital!5e0!3m2!1sen!2sin!4v1716121500000!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 contrast-105"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
        />
      </motion.div>
    </div>
  );
}