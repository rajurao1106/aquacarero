import React from "react";
import Image from "next/image";
import { ArrowRight, Droplets, ShieldCheck, Wrench } from "lucide-react";

export default function Services() {
  const categories = [
    {
      id: 1,
      title: "Aquacarero Premium RO Systems",
      description:
        "Advanced multi-stage reverse osmosis systems that eliminate 99% of contaminants, heavy metals, and chemicals while maintaining essential pure hydration.",
      image: "/drinking-filters.png", // Replace with your RO Purifier image
      tag: "Most Popular",
      icon: <Droplets className="h-5 w-5 text-[#22a5f1]" />,
    },
    {
      id: 2,
      title: "Alkaline & Copper Mineralizers",
      description:
        "Upgrade your existing water flow with custom bio-alkaline and active copper filters to restore essential minerals, balance pH levels, and boost immunity.",
      image: "/mainline-filters.png", // Replace with filter/cartridge image
      tag: "Health Boost",
      icon: <ShieldCheck className="h-5 w-5 text-[#22a5f1]" />,
    },
    {
      id: 3,
      title: "Annual Maintenance & Support",
      description:
        "Keep your Aquacarero systems running perfectly with genuine membrane replacements, scheduled TDS checkups, and expert technician support.",
      image: "/cottage-purification.png", // Replace with maintenance/service image
      tag: "24/7 Service",
      icon: <Wrench className="h-5 w-5 text-[#22a5f1]" />,
    },
    {
      id: 4,
      title: "Annual Maintenance & Support",
      description:
        "Keep your Aquacarero systems running perfectly with genuine membrane replacements, scheduled TDS checkups, and expert technician support.",
      image: "/cottage-purification.png", // Replace with maintenance/service image
      tag: "24/7 Service",
      icon: <Wrench className="h-5 w-5 text-[#22a5f1]" />,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* --- SECTION HEADER --- */}
      <div className="mb-12 flex flex-col justify-between gap-6 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#22a5f1]">
            Our Products & Services
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1c2e4d] sm:text-4xl">
            Pure Water Solutions by Aquacare
          </h2>
          <p className="text-base text-gray-500">
            Explore our high-performance RO purifiers, advanced mineral
            infusers, and reliable maintenance plans tailored for your home.
          </p>
        </div>

        {/* Top Action */}
        <div className="shrink-0">
          <button className="group flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#22a5f1] transition-colors hover:text-sky-600">
            <span>View Full Catalog</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* --- HORIZONTAL CARDS GRID --- */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row md:h-[280px]"
          >
            {/* Left/Top Content Area */}
            <div className="flex flex-1 flex-col justify-between p-8 md:w-3/5">
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#1c2e4d]">
                  {category.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 line-clamp-3 md:line-clamp-2 lg:line-clamp-3">
                  {category.description}
                </p>
              </div>

              {/* Action Link inside the card text flow */}
              <div className="mt-4 flex items-center gap-2 font-bold text-sm text-[#22a5f1] uppercase tracking-wider cursor-pointer group-hover:text-sky-600">
                <span>Explore Details</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Right/Bottom Image Area (Horizontal Placement) */}
            <div className="relative flex min-h-[220px] items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-100/50 p-6 md:w-2/5 md:min-h-full">
              <div className="relative h-full w-full max-w-[240px] transform transition-transform duration-500 group-hover:scale-105 md:max-w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-w-7xl) 33vw"
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
