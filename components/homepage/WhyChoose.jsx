"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import whychooseus from "@/public/homepage/whychooseus.jpg";

export default function WhyChoose() {
  // Container variant to cascade text elements sequentially
  const contentContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Upward text reveal block parameters
  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        
        {/* --- LEFT SIDE: CONTENT COPY --- */}
        <motion.div 
          variants={contentContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 lg:col-span-6"
        >
          <motion.span 
            variants={textItem}
            className="block text-xs font-bold uppercase tracking-widest text-[#00c4ff]"
          >
            Health & Purity First
          </motion.span>
          
          <motion.h2 
            variants={textItem}
            className="text-3xl font-serif font-extrabold tracking-tight text-[#1e2e4d] sm:text-4xl lg:text-5xl leading-[1.15]"
          >
            Why a Smart Water Purifier is Essential for Your Family
          </motion.h2>
          
          <motion.div 
            variants={textItem}
            className="space-y-4 text-sm leading-relaxed text-gray-500 max-w-xl"
          >
            <p>
              Groundwater and tap water sources travel through aging underground municipal pipelines, often picking up invisible contaminants like rust, mud, lead, and industrial chemical residues along the way. A multi-stage RO purifier acts as your home’s ultimate defense shield, ensuring what enters your glass is 100% pure.
            </p>
            <p>
              Traditional methods like boiling water can kill biological pathogens and bacteria, but they completely fail to eliminate dissolved toxic heavy metals, arsenic, nitrates, and microscopic plastics. Advanced reverse osmosis membranes physically separate these microscopic solids from your drinking water.
            </p>
            <p>
              Unregulated high TDS (Total Dissolved Solids) parameters not only destroy the natural sweet taste of water but also cause long-term digestive stress, kidney issues, and dry hair. Investing in an intelligent purification system ensures active mineral restoration, delivering perfectly balanced, mineral-rich, and sweet-tasting water every single day.
            </p>
          </motion.div>

          <motion.div variants={textItem} className="pt-4">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="rounded-full bg-[#00c4ff] px-10 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-sky-400 hover:shadow-lg"
            >
              Explore RO Systems
            </motion.button>
          </motion.div>
        </motion.div>

        {/* --- RIGHT SIDE: COMPOSITION --- */}
        <div className="relative flex items-center justify-center lg:col-span-6 h-[480px] sm:h-[520px]">
          
          {/* Main Panel Image Wrapper with spring layout entrance */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -4 }}
            transition={{ 
              y: { type: "spring", stiffness: 60, damping: 15 },
              scale: { duration: 0.5 },
              hover: { duration: 0.3 }
            }}
            className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-xl border border-white translate-y-6 sm:translate-y-10"
          >
            <Image
              src={whychooseus}
              alt="Professional water purifier quality testing and technical setup verification"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}