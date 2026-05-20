import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 bg-white font-sans antialiased text-slate-800">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        {/* --- LEFT COLUMN: COMPANY MAIN PROFILE INFO & BLOCKS --- */}
        <div className="space-y-6 lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">
            About Company
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-[1.15]">
            Pioneering Pure Water <br />
            For Homes & Businesses.
          </h2>

          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 pt-2">
            Aquacarero — Pure Water, Healthy Life
          </h3>

          <p className="max-w-2xl text-base leading-relaxed text-gray-500">
            For years, Aquacarero has been at the forefront of advanced water
            purification technology. We engineer state-of-the-art RO, UV, and UF
            systems that don&apos;t just filter water, but completely eliminate
            deep-seated heavy metals, harsh industrial pollutants, and
            disease-causing pathogens to protect your well-being.
          </p>

          {/* --- NEW SECTION: OUR STORY & OUR MISSION BELOW DESCRIPTION (WITHOUT ICONS) --- */}
          <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 border-t border-gray-100">
            {/* Our Story Block */}
            <div className="space-y-2">
              <h4 className="text-lg font-bold tracking-tight text-slate-900">
                Our Story
              </h4>
              <p className="text-sm leading-relaxed text-gray-500">
                What started as a mission to tackle rising groundwater
                contamination has grown into a trusted household name, helping
                thousands of families access sweet, crisp, and risk-free
                drinking water every single day.
              </p>
            </div>

            {/* Our Mission Block */}
            <div className="space-y-2">
              <h4 className="text-lg font-bold tracking-tight text-slate-900">
                Our Mission
              </h4>
              <p className="text-sm leading-relaxed text-gray-500">
                To engineer accessible, zero-compromise multi-layer purification
                technology that preserves essential natural minerals while
                building a transparent infrastructure of prompt annual support
                and maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: LARGE IMAGE SECTION --- */}
        <div className="lg:col-span-5">
          <div className="relative h-[450px] sm:h-[550px] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/about-showcase.jpg" // Replace with your corporate setup or premium filter asset
              alt="Aquacarero RO laboratory and product design engineering showcase"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
