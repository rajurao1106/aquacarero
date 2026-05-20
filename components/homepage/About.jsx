import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap } from "lucide-react"; // Swapped LineChart for water/purity related icons

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* --- LEFT SIDE: IMAGE COMPOSITION --- */}
        <div className="relative lg:col-span-6">
          {/* Main Large Image */}
          <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <Image
              src="/main-purifier.jpg" // Replace with your main image path
              alt="Aquacarero RO Water Purifier installation"
              width={600}
              height={450}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTENT & FEATURES --- */}
        <div className="space-y-8 lg:col-span-6 lg:pl-6">
          {/* Header Texts */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Why Choose Aquacarero
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl leading-tight max-w-md">
              We promise pure, safe, and mineral-rich water for a healthier
              life.
            </h2>
            <p className="text-sm leading-relaxed text-slate-500">
              At Aquacare, we believe clean drinking water is the foundation of
              family health. Our state-of-the-art RO purification systems work
              silently behind the scenes to guard your home against invisible
              water-borne threats.
            </p>
          </div>

          {/* Features List Group */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              {/* Amber Icon Circle */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              {/* Feature Copy */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-800">
                  Multi-Stage Multi-Layer Shield
                </h3>
                <div className="h-[2px] w-8 bg-cyan-400" />{" "}
                {/* Blue accent line */}
                <p className="pt-1 text-sm leading-relaxed text-slate-500">
                  Combines advanced RO, UV, and UF filtration mechanisms to
                  systematically filter out 99% of dissolved solids, heavy
                  metals, bacteria, and harsh chemicals.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              {/* Amber Icon Circle */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white shadow-sm">
                <Zap className="h-5 w-5" />
              </div>
              {/* Feature Copy */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-800">
                  Active Mineral Retention
                </h3>
                <div className="h-[2px] w-8 bg-cyan-400" />{" "}
                {/* Blue accent line */}
                <p className="pt-1 text-sm leading-relaxed text-slate-500">
                  Unlike basic filters that strip everything away, our system
                  restores essential alkaline minerals like Calcium and
                  Magnesium to ensure your water stays healthy and tastes crisp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
