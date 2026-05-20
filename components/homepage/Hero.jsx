"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import hero1 from "@/public/homepage/hero1.png";

export default function Hero() {
  // Container variant to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Child variant for smooth slide-up fade
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  // Dynamic floating effect for the product image
  const floatAnimation = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans antialiased text-[#1e293b] flex items-center">
      {/* --- HERO MAIN CONTENT --- */}
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Curved Light Blue Background Wrapper */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-white px-6 py-12 sm:px-12 lg:px-20 lg:py-16 border border-sky-100/50 shadow-sm">
          
          {/* Subtle Abstract Background Blob for Depth */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="items-center flex max-lg:flex-col max-lg:flex-col-reverse gap-12 lg:grid-cols-12 relative z-10"
          >
            {/* Left Content Column */}
            <div className="space-y-6 lg:col-span-7 flex flex-col justify-center">
              
              {/* Feature Tag */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex font-serif w-fit items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-600 border border-sky-200/60"
              >
                <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                Pure Health Evolution
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-5xl font-serif tracking-tight text-[#1c2e4d] sm:text-5xl lg:text-6xl leading-[1.12]"
              >
                Aquacarero
                <span className="block mt-2 bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  RO Water Purifier
                </span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
              >
                Advanced multi-stage RO technology engineered to eliminate 99% of impurities, 
                delivering crisp, safe, and mineral-enriched drinking water directly to your 
                family every single day.
              </motion.p>

              {/* Call to Actions & Trust Indicators */}
              <motion.div 
                variants={itemVariants}
                className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6"
              >
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#22a5f1] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-sky-500 shadow-md hover:shadow-xl hover:shadow-sky-400/20"
                >
                  Explore Purifiers
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
                
                {/* Micro-Features */}
                <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>99% Pure</span>
                  </div>
                  <div className="h-4 w-[1px] bg-slate-300" />
                  <div className="flex items-center gap-1">
                    <Droplet className="h-4 w-4 text-sky-500" />
                    <span>Mineral Active</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Image Column */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:col-span-5 relative"
            >
              {/* Glow backdrop behind image */}
              <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-gradient-to-tr from-sky-300/30 to-indigo-300/20 blur-3xl pointer-events-none" />
              
              <motion.div 
                variants={floatAnimation}
                animate="animate"
                className="relative w-full max-w-[380px] sm:max-w-[420px] transition-all duration-500"
              >
                <Image
                  src={hero1}
                  alt="Aquacarero Advanced RO Filter System"
                  width={450}
                  height={450}
                  priority
                  className="h-auto w-full object-contain filter drop-shadow-[0_25px_25px_rgba(14,165,233,0.15)]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}