"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import features1 from "@/public/homepage/features1.jpg";

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

  // Stagger configurations for modern, sequential loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Left-side column items slide outward from the left
  const leftItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  // Right-side column items slide outward from the right
  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  // Infinite liquid ripple configuration
  const rippleAnimation = (delayValue) => ({
    animate: {
      scale: [0.95, 1.2, 0.95],
      opacity: [0.2, 0.45, 0.2],
      transition: {
        duration: 5,
        repeat: Infinity,
        delay: delayValue,
        ease: "easeInOut"
      }
    }
  });

  return (
    <section className="relative overflow-hidden bg-[#f0f9ff]/40 py-20 px-4 sm:px-6 lg:px-8">
      {/* --- HEADER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center mb-16 space-y-3"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#00c4ff]">
          The Purity Comparison
        </span>
        <h2 className="text-3xl font-extrabold font-serif tracking-tight text-[#1e2e4d] sm:text-4xl lg:text-5xl leading-tight">
          With Purifier vs. Without Purifier: Make the Right Choice.
        </h2>
      </motion.div>

      {/* --- MAIN INTERACTIVE DISPLAY GRID --- */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 items-center gap-12 lg:grid-cols-12 relative z-10">
        
        {/* LEFT COLUMN: Advantages (Right-aligned text on desktop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 lg:col-span-4 order-2 lg:order-1 text-center lg:text-right"
        >
          <motion.div variants={leftItemVariants} className="mb-6 hidden lg:block">
            <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
              Advantages (With RO)
            </span>
          </motion.div>
          
          {leftFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={leftItemVariants}
              className="group flex flex-col items-center lg:items-end space-y-2"
            >
              <div className="flex items-center space-x-3 lg:space-x-reverse flex-row lg:flex-row-reverse">
                <h3 className="text-xl font-serif font-bold text-[#1e2e4d] transition-colors group-hover:text-emerald-500">
                  {feature.title}
                </h3>
                {/* Micro indicator with bouncy scale feedback */}
                <motion.span 
                  whileHover={{ scale: 1.25 }}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </motion.span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CENTER COLUMN: Focal Image with Dynamic Ripples */}
        <div className="relative flex justify-center lg:col-span-4 order-1 lg:order-2 py-6">
          {/* Decorative Loop Ripple Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 sm:scale-100">
            <motion.div 
              variants={rippleAnimation(0)}
              animate="animate"
              className="absolute h-[420px] w-[420px] rounded-full border border-sky-200/40 bg-gradient-to-b from-sky-100/20 to-transparent" 
            />
            <motion.div 
              variants={rippleAnimation(1.5)}
              animate="animate"
              className="absolute h-[320px] w-[320px] rounded-full border border-sky-200/60 bg-gradient-to-b from-sky-100/30 to-transparent" 
            />
          </div>

          {/* Central Image Container with Spring Entry */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.04 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 90, 
              damping: 14 
            }}
            className="relative z-10 w-[240px] h-[240px] overflow-hidden drop-shadow-2xl"
          >
            <Image
              src={features1}
              alt="Aquacarero RO Pure Water"
              fill
              priority
              className="object-contain rounded-full"
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Disadvantages (Left-aligned text on desktop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 lg:col-span-4 order-3 text-center lg:text-left"
        >
          <motion.div variants={rightItemVariants} className="mb-6 hidden lg:block">
            <span className="rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-600">
              Disadvantages (Unfiltered)
            </span>
          </motion.div>
          
          {rightFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={rightItemVariants}
              className="group flex flex-col items-center lg:items-start space-y-2"
            >
              <div className="flex items-center space-x-3">
                <motion.span 
                  whileHover={{ scale: 1.25 }}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/20"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                </motion.span>
                <h3 className="text-xl font-serif font-bold text-[#1e2e4d] transition-colors group-hover:text-rose-500">
                  {feature.title}
                </h3>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Bottom Wave Divider Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-[50px] lg:rounded-t-[100px]" />
    </section>
  );
}