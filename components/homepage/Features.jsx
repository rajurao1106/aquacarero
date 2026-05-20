import React from "react";
import Image from "next/image";
import features1 from "@/public/homepage/features1.jpg"
export default function Features() {
  // 3 Advantages of having an RO Purifier
  const leftFeatures = [
    {
      id: "safety",
      title: "Complete Toxin Shield",
      desc: "Eliminates 99% of dissolved solids, heavy metals, arsenic, and micro-plastics for 100% safe drinking water.",
    },
    {
      id: "health",
      title: "Mineral-Rich Hydration",
      desc: "Restores essential minerals like Calcium and Magnesium while keeping optimum pH levels intact.",
    },
    {
      id: "savings",
      title: "Cost-Effective & Eco",
      desc: "Say goodbye to expensive, plastic single-use plastic water cans. Saves money and environment simultaneously.",
    },
  ];

  // 3 Disadvantages / Risks of NOT having a Purifier
  const rightFeatures = [
    {
      id: "contamination",
      title: "Waterborne Disease Risk",
      desc: "Exposes your family to invisible pathogens, chlorine, and high TDS levels that cause frequent stomach issues.",
    },
    {
      id: "taste",
      title: "Harsh Taste & Odor",
      desc: "Unfiltered water often contains excess iron and chlorine, causing a bitter, metal-like taste and chemical smell.",
    },
    {
      id: "piping",
      title: "Lead & Piping Scale",
      desc: "Corroded underground city pipe networks leach heavy rust, mud, and contaminants straight into your drinking glass.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f0f9ff]/40 py-20 px-4 sm:px-6 lg:px-8">
      {/* --- HEADER --- */}
      <div className="mx-auto max-w-3xl text-center mb-16 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00c4ff]">
          The Purity Comparison
        </span>
        <h2 className="text-3xl font-extrabold font-serif tracking-tight text-[#1e2e4d] sm:text-4xl lg:text-5xl leading-tight">
          With Purifier vs. Without Purifier:
          Make the Right Choice.
        </h2>
      </div>

      {/* --- MAIN INTERACTIVE DISPLAY GRID --- */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* LEFT COLUMN: Advantages (Right-aligned text on desktop) */}
        <div className="space-y-12 lg:col-span-4 order-2 lg:order-1 text-center lg:text-right">
          <div className="mb-6 hidden lg:block">
            <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
              Advantages (With RO)
            </span>
          </div>
          {leftFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group flex flex-col items-center lg:items-end space-y-2"
            >
              <div className="flex items-center space-x-3 lg:space-x-reverse flex-row lg:flex-row-reverse">
                <h3 className="text-xl font-serif font-bold text-[#1e2e4d] transition-colors group-hover:text-emerald-500">
                  {feature.title}
                </h3>
                {/* Concentric Green Pointer Dot for Advantages */}
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-500">
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
          <div className="relative z-10 w-[240px] h-[240px] transform overflow-hidden transition-transform duration-500 hover:scale-105">
            <Image
              src={features1} // Replace with your transparent jar asset path
              alt="Aquacarero RO Pure Water"
              fill
              priority
              className="object-contain rounded-full "
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Disadvantages (Left-aligned text on desktop) */}
        <div className="space-y-12 lg:col-span-4 order-3 text-center lg:text-left">
          <div className="mb-6 hidden lg:block">
            <span className="rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-600">
              Disadvantages (Unfiltered)
            </span>
          </div>
          {rightFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group flex flex-col items-center lg:items-start space-y-2"
            >
              <div className="flex items-center space-x-3">
                {/* Concentric Rose Pointer Dot for Disadvantages */}
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1e2e4d] transition-colors group-hover:text-rose-500">
                  {feature.title}
                </h3>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Wave Divider Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-[50px] lg:rounded-t-[100px]" />
    </section>
  );
}
