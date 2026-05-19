import React from 'react';
import Image from 'next/image';

export default function Features() {
  const leftFeatures = [
    {
      id: 'residential',
      title: 'Residential Waters',
      desc: 'Lorem ipsum dolor amet, consectetur adipisicing sed do eiusmod',
    },
    {
      id: 'filtration',
      title: 'Filration Plants',
      desc: 'Lorem ipsum dolor amet, consectetur adipisicing sed do eiusmod',
    },
  ];

  const rightFeatures = [
    {
      id: 'commercial',
      title: 'Commercial Waters',
      desc: 'Lorem ipsum dolor amet, consectetur adipisicing sed do eiusmod',
    },
    {
      id: 'softening',
      title: 'Water Softening',
      desc: 'Lorem ipsum dolor amet, consectetur adipisicing sed do eiusmod',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f0f9ff]/40 py-20 px-4 sm:px-6 lg:px-8">
      
      {/* --- HEADER --- */}
      <div className="mx-auto max-w-3xl text-center mb-16 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00c4ff]">
          Filter Water
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#1e2e4d] sm:text-4xl lg:text-5xl leading-tight">
          Protect your family with one of the best <br className="hidden sm:inline" /> water filtering system.
        </h2>
      </div>

      {/* --- MAIN INTERACTIVE DISPLAY GRID --- */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        
        {/* LEFT COLUMN: Features (Right-aligned text on desktop) */}
        <div className="space-y-12 lg:col-span-4 order-2 lg:order-1 text-center lg:text-right">
          {leftFeatures.map((feature) => (
            <div key={feature.id} className="group flex flex-col items-center lg:items-end space-y-2">
              <div className="flex items-center space-x-3 lg:space-x-reverse flex-row lg:flex-row-reverse">
                <h3 className="text-xl font-bold text-[#1e2e4d] transition-colors group-hover:text-[#00c4ff]">
                  {feature.title}
                </h3>
                {/* Concentric Pointer Dot */}
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00c4ff]/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00c4ff]"></span>
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-4xl text-gray-500">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CENTER COLUMN: Focal Image with Water Ripples Background */}
        <div className="relative flex justify-center lg:col-span-4 order-1 lg:order-2 py-6">
          
          {/* Decorative Ripple/Glow Outer Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 sm:scale-100">
            <div className="absolute h-[420px] w-[420px] rounded-full border border-sky-200/40 bg-gradient-to-b from-sky-100/30 to-transparent animate-pulse" />
            <div className="absolute h-[320px] w-[320px] rounded-full border border-sky-200/60 bg-gradient-to-b from-sky-100/40 to-transparent" />
          </div>

          {/* Central Jug Image Container */}
          <div className="relative z-10 w-[240px] h-[340px] transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/water-jar.png" // Replace with your transparent jar asset path
              alt="Water Filtering Bottle"
              fill
              priority
              className="object-contain filter drop-shadow-[0_15px_30px_rgba(14,165,233,0.15)]"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Features (Left-aligned text on desktop) */}
        <div className="space-y-12 lg:col-span-4 order-3 text-center lg:text-left">
          {rightFeatures.map((feature) => (
            <div key={feature.id} className="group flex flex-col items-center lg:items-start space-y-2">
              <div className="flex items-center space-x-3">
                {/* Concentric Pointer Dot */}
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00c4ff]/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00c4ff]"></span>
                </span>
                <h3 className="text-xl font-bold text-[#1e2e4d] transition-colors group-hover:text-[#00c4ff]">
                  {feature.title}
                </h3>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-4xl text-gray-500">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Decorative Bottom Wave Divider Curve (Simulated) */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-[50px] lg:rounded-t-[100px]" />
    </section>
  );
}