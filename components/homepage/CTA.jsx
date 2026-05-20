"use client";

import React, { useState } from "react";
import { IoMail, IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-4 sm:px-6 lg:px-8 font-sans antialiased text-[#1e293b]">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* --- LEFT COLUMN: CONTENT COPY & INFO LINKING --- */}
        <div className="space-y-8 lg:col-span-6 lg:pr-8">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              We&apos;re here to help you
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl leading-[1.15] max-w-md">
              Discuss Your Chemical Solution Needs
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-gray-4xl text-gray-500">
              Are you looking for top-quality chemical solutions tailored to
              your needs? Reach out to us.
            </p>
          </div>

          {/* Contact Methods List */}
          <div className="space-y-6 pt-4">
            {/* Email Row */}
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#006fff] text-white shadow-md shadow-blue-500/10">
                <IoMail className="h-5 w-5" />
              </div>
              <div className="space-y-0.5 text-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  E-mail
                </p>
                <a
                  href="mailto:info@Aquacarero .com"
                  className="font-semibold text-[#0f172a] hover:underline"
                >
                  info@Aquacarero .com
                </a>
              </div>
            </div>

            {/* Phone Row */}
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#006fff] border border-gray-100 shadow-sm">
                <IoCall className="h-5 w-5" />
              </div>
              <div className="space-y-0.5 text-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Phone number
                </p>
                <a
                  href="tel:+1234567890"
                  className="font-semibold text-[#0f172a] hover:underline"
                >
                  +91 777-1967-070
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: WHITE EMBEDDED CONTAINER CARD FORM --- */}
        <div className="lg:col-span-6">
          <div className="rounded-[2rem] bg-white p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Input Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 tracking-wide block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full rounded-xl bg-[#f3f4f6]/70 border border-transparent px-4 py-3 text-sm text-slate-800 placeholder:text-gray-300 outline-none transition-all focus:border-blue-400 focus:bg-white"
                />
              </div>

              {/* Input Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 tracking-wide block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@framer.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full rounded-xl bg-[#f3f4f6]/70 border border-transparent px-4 py-3 text-sm text-slate-800 placeholder:text-gray-300 outline-none transition-all focus:border-blue-400 focus:bg-white"
                />
              </div>

              {/* Select Industry Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 tracking-wide block">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  required
                  className="w-full rounded-xl bg-[#f3f4f6]/70 border border-transparent px-4 py-3 text-sm text-slate-500 outline-none transition-all focus:border-blue-400 focus:bg-white cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23006fff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_auto] bg-[right_1.25rem_center] bg-no-repeat"
                >
                  <option value="" disabled hidden>
                    Select...
                  </option>
                  <option value="manufacturing">Water Purifier</option>
                  <option value="pharmaceutical">Vaccum Cleaner</option>
                  <option value="agriculture">Water Softner</option>
                  <option value="research">Spare Parts</option>
                </select>
              </div>

              {/* Textarea Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 tracking-wide block">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full rounded-xl bg-[#f3f4f6]/70 border border-transparent px-4 py-3 text-sm text-slate-800 placeholder:text-gray-300 outline-none transition-all focus:border-blue-400 focus:bg-white resize-none"
                />
              </div>

              {/* Submit Capsule Button Layout */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="flex items-center space-x-4 rounded-full bg-[#006fff] p-1.5 pr-6 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-600 hover:shadow-lg group"
                >
                  {/* Embedded White Circle with Arrow icon */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#006fff] transition-transform duration-300 group-hover:translate-x-0.5">
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </div>
                  <span>Get a Solution</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
