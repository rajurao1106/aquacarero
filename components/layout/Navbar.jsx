"use client";

import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaChevronDown, FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Water Purifier",
    message: ""
  });

  // Close modal or mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent body scrolling when mobile navigation or modal is active
  useEffect(() => {
    if (isMobileMenuOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isModalOpen]);

  const services = [
    { name: "Water Purifier", href: "/services/water-purifier" },
    { name: "Vacuum Cleaner", href: "/services/vaccum-cleaner" },
    { name: "Water Softener", href: "/services/water-softner" },
    { name: "Spare Parts", href: "/services/spare-parts" },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", formData);
    alert("Thank you! Your quote request has been received. Our team will call you back shortly.");
    setIsModalOpen(false);
    setFormData({ name: "", phone: "", service: "Water Purifier", message: "" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white w-full flex justify-center items-center shadow-sm">
        <header className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between border-b border-gray-100">
            {/* Logo */}
            <div className="flex flex-col z-50">
              <a
                href="/"
                className="text-2xl font-black tracking-tight text-sky-600"
              >
                Aquacarero
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden space-x-8 md:flex items-center">
              <a
                href="/"
                className="text-sm font-medium transition-colors hover:text-sky-500"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-sm font-medium transition-colors hover:text-sky-500"
              >
                About Us
              </a>

              {/* Services Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                onMouseLeave={() => setIsDesktopDropdownOpen(false)}
              >
                <a
                  href="/services"
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-sky-500 py-2"
                >
                  Our Services
                  <FaChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${isDesktopDropdownOpen ? "rotate-180" : ""}`}
                  />
                </a>

                {/* Dropdown Menu */}
                {isDesktopDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-56 rounded-xl bg-white border border-gray-100 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/faq"
                className="text-sm font-medium transition-colors hover:text-sky-500"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-sky-500"
              >
                Contact Us
              </a>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              {/* Clickable Call Icon & Number Wrap */}
              <a 
                href="tel:+917771967070" 
                className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 transition-colors group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 border border-sky-100 text-[#22a5f1] transition-colors group-hover:bg-[#22a5f1] group-hover:text-white">
                  <FaPhoneAlt className="h-4 w-4" />
                </div>
                <div className="hidden flex-col text-left xl:flex">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 leading-none">Call Support</span>
                  <span className="text-sm font-bold text-[#1e2e4d] pt-0.5">+91 77719-67070</span>
                </div>
              </a>

              {/* Get Quote Trigger Button */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hidden rounded-md bg-[#22a5f1] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sky-500 sm:block shadow-sm active:scale-95"
              >
                Get Quote
              </button>

              {/* Mobile Menu Action Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors md:hidden z-50"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </header>
      </nav>

      {/* --- RESPONSIVE MOBILE NAVIGATION DRAWER OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Drawer Content Body container */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white p-6 pt-24 shadow-2xl flex flex-col justify-between transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-6 overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-[#1e2e4d] border-b border-gray-50 pb-2 hover:text-sky-500"
              >
                Home
              </a>
              <a
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-[#1e2e4d] border-b border-gray-50 pb-2 hover:text-sky-500"
              >
                About Us
              </a>
              
              {/* Mobile Accordion Dropdown Link Block */}
              <div className="border-b border-gray-50 pb-2">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="w-full flex items-center justify-between text-lg font-semibold text-[#1e2e4d] text-left hover:text-sky-500"
                >
                  <span>Our Services</span>
                  <FaChevronDown className={`h-4 w-4 transition-transform duration-200 text-gray-400 ${isMobileDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isMobileDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2 pl-2 border-l-2 border-sky-100 animate-in slide-in-from-top-1 duration-200">
                    <a 
                      href="/services" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-sm font-medium text-sky-600 hover:underline"
                    >
                      View All Services
                    </a>
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 text-sm text-gray-600 hover:text-sky-500"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-[#1e2e4d] border-b border-gray-50 pb-2 hover:text-sky-500"
              >
                FAQ
              </a>
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-[#1e2e4d] border-b border-gray-50 pb-2 hover:text-sky-500"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Fixed Drawer Footer Actions */}
          <div className="pt-6 border-t border-gray-100 space-y-4">
            <a 
              href="tel:+917771967070"
              className="flex items-center justify-center space-x-3 w-full py-3 bg-slate-50 rounded-xl border border-gray-100 group"
            >
              <FaPhoneAlt className="h-4 w-4 text-[#22a5f1]" />
              <span className="text-sm font-bold text-[#1e2e4d]">+91 77719-67070</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full rounded-xl bg-[#22a5f1] py-3 text-center text-sm font-bold text-white shadow-md active:scale-[0.98]"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* --- BACKDROP MODAL OVERLAY --- */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl transition-all border border-gray-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button top corner */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close form"
            >
              <FaTimes className="h-4 w-4" />
            </button>

            {/* Form Headers */}
            <div className="mb-6 space-y-1 pr-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#22a5f1]">
                Quick Enquiry
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#1e2e4d]">
                Request a Free Quote
              </h3>
              <p className="text-xs text-gray-400">
                Fill the details below. Our field expert will call you back within 15 minutes.
              </p>
            </div>

            {/* Interactive Quote Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Full Name Input */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wide text-gray-500 block">
                  Your Full Name
                </label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-slate-50 border border-gray-100 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white"
                />
              </div>

              {/* Contact Phone Number Input */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wide text-gray-500 block">
                  Phone Number
                </label>
                <input 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="98765 XXXXX"
                  className="w-full rounded-xl bg-slate-50 border border-gray-100 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white"
                />
              </div>

              {/* Service Selection Dropdown */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wide text-gray-500 block">
                  Select Service
                </label>
                <div className="relative">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full appearance-none rounded-xl bg-slate-50 border border-gray-100 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white cursor-pointer"
                  >
                    <option value="Water Purifier">Water Purifier (RO Installation/Service)</option>
                    <option value="Vaccum Cleaner">Vacuum Cleaner Repair</option>
                    <option value="Water Softner">Water Softener Plant Setup</option>
                    <option value="Spare Parts">Spare Parts / Filter Cartridges</option>
                  </select>
                  <FaChevronDown className="pointer-events-none absolute top-4 right-4 h-3 w-3 text-gray-400" />
                </div>
              </div>

              {/* Additional Notes text box */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wide text-gray-500 block">
                  Additional Notes (Optional)
                </label>
                <textarea 
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="E.g., High TDS problem, looking for alkaline filter..."
                  className="w-full rounded-xl bg-slate-50 border border-gray-100 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-sky-300 focus:bg-white resize-none placeholder:text-gray-300"
                />
              </div>

              {/* Submit Buttons Actions */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#22a5f1] py-3.5 text-center text-sm font-bold text-white shadow-md transition-all hover:bg-sky-500 hover:shadow-lg active:scale-[0.98]"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}