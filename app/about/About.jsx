import React from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa'; // Used as a clean placeholder for the read more caret arrow

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 bg-white font-sans antialiased text-slate-8xl">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        
        {/* --- LEFT COLUMN: COMPANY MAIN PROFILE INFO --- */}
        <div className="space-y-6 lg:col-span-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">
            About Company
          </span>
          
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-[1.15]">
            Spring water <br />
            home businesses
          </h2>

          {/* Decorative blue squiggle divider line asset */}
          <div className="w-16 h-1.5 opacity-80">
            <svg viewBox="0 0 60 8" className="w-full h-full stroke-sky-400 fill-none" strokeWidth="2.5">
              <path d="M0,4 Q5,0 10,4 T20,4 T30,4 T40,4 T50,4 T60,4" />
            </svg>
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 pt-2">
            100% USA Owned & Operated
          </h3>

          <p className="max-w-xl text-base leading-relaxed text-gray-500">
            Denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings the great explorer of the truth, the master-builder.
          </p>

          {/* Founder Metadata & Signature block row */}
          <div className="flex items-center space-x-6 pt-6">
            {/* Signature Area (Using an image or stylized script representation) */}
            <div className="relative w-32 h-14 opacity-80 filter contrast-125 select-none">
              <Image 
                src="/signature-placeholder.png" // Replace with your transparent signature file path
                alt="Max Benjamin Signature"
                fill
                className="object-contain"
              />
            </div>

            {/* Vertical Split Line Divider */}
            <div className="h-10 w-[1px] bg-gray-200" />

            {/* Title description stack */}
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Max Benjamin
              </h4>
              <p className="text-sm font-semibold text-[#0ea5e9]">
                Founder
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: FRAMED STORY & MISSION CARD PANEL --- */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 sm:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.02)] space-y-10">
            
            {/* Row 1: Our Story */}
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              {/* Circular Avatar Ring Wrapper */}
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full p-1 ring-4 ring-slate-50 shadow-md">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src="/story-avatar.jpg" // Replace with your image asset path
                    alt="Our Story Illustration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Context Block */}
              <div className="space-y-3 pt-1">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                  Our Story
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Expound the actual teaching the great explorers the truth masters human happiness rejects.
                </p>
                <button className="group flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-slate-900 transition-colors hover:text-[#0ea5e9]">
                  <FaPlay className="h-2 w-2 transform rotate-0 scale-90 fill-current" />
                  <span>Read More</span>
                </button>
              </div>
            </div>

            {/* Horizontal Segment Separator Line */}
            <div className="h-[1px] w-full bg-gray-100" />

            {/* Row 2: Our Mission */}
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              {/* Circular Avatar Ring Wrapper */}
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full p-1 ring-4 ring-slate-50 shadow-md">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src="/mission-avatar.jpg" // Replace with your image asset path
                    alt="Our Mission Illustration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Context Block */}
              <div className="space-y-3 pt-1">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  In hac habitasse platea dictumst. Fusce sed metus urna. Orci varius natoque penatibus.
                </p>
                <button className="group flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-slate-900 transition-colors hover:text-[#0ea5e9]">
                  <FaPlay className="h-2 w-2 transform rotate-0 scale-90 fill-current" />
                  <span>Read More</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}