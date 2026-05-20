import React from "react";
import Image from "next/image";
import { ArrowRight, Droplets, ShieldCheck, Wrench,Sparkles } from "lucide-react";
import service1 from "@/public/spare parts/spare-parts2.jpg"
import service2 from "@/public/vaccum cleaner/vaccum-cleaner2.webp"
import service3 from "@/public/water purifier/water-purifier1.jpg"
import service4 from "@/public/water softner/water-softner.webp"

export default function Services() {
 const categories = [
  {
    id: 1,
    title: "Water Purifier",
    description:
      "Advanced multi-stage reverse osmosis systems that eliminate 99% of contaminants, heavy metals, and chemicals while maintaining essential pure hydration.",
    image: service1,
    tag: "Most Popular",
    icon: <Droplets className="h-5 w-5 text-[#22a5f1]" />,
  },
  {
    id: 2,
    title: "Vacuum Cleaner",
    description:
      "High-efficiency, deep-cleaning vacuum systems equipped with advanced filtration to effortlessly eliminate dust, allergens, and pet dander from every corner of your home.",
    image: service2, // Updated image path suggestion
    tag: "Deep Clean",              // Updated tag to match the product type
    icon: <Sparkles className="h-5 w-5 text-[#22a5f1]" />, // Suggested icon change for cleaning
  },
  {
    id: 3,
    title: "Water Softener",
    description:
      "Premium hard water conditioning systems designed to eliminate scale buildup, protect your plumbing appliances, and ensure gentler water for your skin and hair.",
    image: service3, // Updated image path suggestion
    tag: "Home Protection",        // Updated tag to match the product type
    icon: <ShieldCheck className="h-5 w-5 text-[#22a5f1]" />, // Suggested icon change for protection
  },
  {
    id: 4,
    title: "Spare Parts",
    description:
      "Keep your appliances running at peak performance with genuine, high-quality replacement membranes, filters, motors, and certified structural components.",
    image: service4, // Updated image path suggestion
    tag: "100% Genuine",                 // Updated tag to emphasize authentic parts
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
          <h2 className="text-3xl font-serif font-extrabold tracking-tight text-[#1c2e4d] sm:text-4xl">
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
                <h3 className="text-2xl font-serif font-extrabold tracking-tight text-[#1c2e4d]">
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
            <div className="relative flex min-h-[220px] items-center justify-center  p-6 md:w-2/5 md:min-h-full">
              <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-w-7xl) 33vw"
                  priority
                  className="object-contain "
                />
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
