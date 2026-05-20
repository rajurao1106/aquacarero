"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import about1 from "@/public/about/about1.png";

export default function About() {
  // Container variant to stagger the primary text copy and narrative blocks
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Smooth slide-up for textual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 bg-white font-sans antialiased text-slate-800 overflow-hidden">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        
        {/* --- LEFT COLUMN: COMPANY MAIN PROFILE INFO & BLOCKS --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 lg:col-span-7"
        >
          <motion.span 
            variants={itemVariants} 
            className="block text-xs font-bold uppercase tracking-widest text-[#0ea5e9]"
          >
            About Company
          </motion.span>

          <motion.h2 
            variants={itemVariants} 
            className="text-4xl font-serif font-bold tracking-tight text-slate-900 sm:text-5xl leading-[1.15]"
          >
            Pioneering Pure Water <br />
            For Homes & Businesses.
          </motion.h2>

          <motion.h3 
            variants={itemVariants} 
            className="text-xs font-bold uppercase tracking-wider text-slate-400 pt-2"
          >
            Aquacarero — Pure Water, Healthy Life
          </motion.h3>

          <motion.p 
            variants={itemVariants} 
            className="max-w-2xl text-base leading-relaxed text-gray-500"
          >
            For years, Aquacarero has been at the forefront of advanced water
            purification technology. We engineer state-of-the-art RO, UV, and UF
            systems that don&apos;t just filter water, but completely eliminate
            deep-seated heavy metals, harsh industrial pollutants, and
            disease-causing pathogens to protect your well-being.
          </motion.p>

          {/* --- NEW SECTION: OUR STORY & OUR MISSION BELOW DESCRIPTION (WITHOUT ICONS) --- */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 border-t border-gray-100"
          >
            {/* Our Story Block */}
            <div className="space-y-2">
              <h4 className="text-lg font-serif font-bold tracking-tight text-slate-900">
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
              <h4 className="text-lg font-serif font-bold tracking-tight text-slate-900">
                Our Mission
              </h4>
              <p className="text-sm leading-relaxed text-gray-500">
                To engineer accessible, zero-compromise multi-layer purification
                technology that preserves essential natural minerals while
                building a transparent infrastructure of prompt annual support
                and maintenance.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- RIGHT COLUMN: LARGE IMAGE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5"
        >
          <motion.div 
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
            className="relative h-[450px] sm:h-[500px] w-full overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={about1}
              alt="Aquacarero RO laboratory and product design engineering showcase"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}