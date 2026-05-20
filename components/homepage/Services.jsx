"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, ShieldCheck, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import service1 from "@/public/spare parts/spare-parts2.jpg";
import service2 from "@/public/vaccum cleaner/vaccum-cleaner2.webp";
import service3 from "@/public/water purifier/water-purifier1.jpg";
import service4 from "@/public/water softner/water-softner.webp";

export default function Services() {
  const categories = [
    {
      id: 1,
      title: "Water Purifier",
      slug: "/services/water-purifier",
      description:
        "Advanced multi-stage reverse osmosis systems that eliminate 99% of contaminants, heavy metals, and chemicals while maintaining essential pure hydration.",
      image: service1,
      tag: "Most Popular",
      icon: <Droplets className="h-4 w-4 text-[#22a5f1]" />,
    },
    {
      id: 2,
      title: "Vacuum Cleaner",
      slug: "/services/vacuum-cleaner",
      description:
        "High-efficiency, deep-cleaning vacuum systems equipped with advanced filtration to effortlessly eliminate dust, allergens, and pet dander from every corner of your home.",
      image: service2,
      tag: "Deep Clean",
      icon: <Sparkles className="h-4 w-4 text-[#22a5f1]" />,
    },
    {
      id: 3,
      title: "Water Softener",
      slug: "/services/water-softener",
      description:
        "Premium hard water conditioning systems designed to eliminate scale buildup, protect your plumbing appliances, and ensure gentler water for your skin and hair.",
      image: service3,
      tag: "Home Protection",
      icon: <ShieldCheck className="h-4 w-4 text-[#22a5f1]" />,
    },
    {
      id: 4,
      title: "Spare Parts",
      slug: "/services/spare-parts",
      description:
        "Keep your appliances running at peak performance with genuine, high-quality replacement membranes, filters, motors, and certified structural components.",
      image: service4,
      tag: "100% Genuine",
      icon: <Wrench className="h-4 w-4 text-[#22a5f1]" />,
    },
  ];

  // Grid container animation to reveal cards sequentially
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  // Upward smooth transition for the card layout
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* --- SECTION HEADER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col justify-between gap-6 border-b border-gray-100 pb-8 md:flex-row md:items-end"
      >
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
          <Link 
            href="/services" 
            className="group flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#22a5f1] transition-colors hover:text-sky-600"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>

      {/* --- HORIZONTAL CARDS GRID --- */}
      <motion.div 
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.06), 0 8px 10px -6px rgb(0 0 0 / 0.06)" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm md:flex-row md:h-[280px]"
          >
            {/* Left/Top Content Area */}
            <div className="flex flex-1 flex-col justify-between p-8 md:w-3/5">
              <div className="space-y-3">
                {/* Micro-badge Container */}
                <div className="inline-flex items-center gap-1.5 rounded-md bg-sky-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-600 border border-sky-100">
                  {category.icon}
                  <span>{category.tag}</span>
                </div>
                
                <h3 className="text-2xl font-serif font-extrabold tracking-tight text-[#1c2e4d]">
                  {category.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 line-clamp-3 md:line-clamp-2 lg:line-clamp-3">
                  {category.description}
                </p>
              </div>

              {/* Action Link inside the card text flow */}
              <div className="mt-4">
                <Link
                  href={category.slug}
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#22a5f1] uppercase tracking-wider transition-colors hover:text-sky-600"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right/Bottom Image Area (Horizontal Placement) */}
            <div className="relative flex min-h-[220px] items-center justify-center p-6 bg-slate-50/40 md:w-2/5 md:min-h-full overflow-hidden">
              <motion.div 
                className="relative w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-w-7xl) 33vw"
                  priority
                  className="object-contain p-2"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}