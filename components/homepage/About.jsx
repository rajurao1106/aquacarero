"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import about1 from "@/public/homepage/about1.jpg";

export default function About() {
  // Stagger wrapper for the text block and features
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Upward fade element variant
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        
        {/* --- LEFT SIDE: IMAGE COMPOSITION --- */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative lg:col-span-6"
        >
          {/* Main Large Image with gentle hover scaling */}
          <motion.div 
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl bg-gray-100 shadow-md"
          >
            <Image
              src={about1}
              alt="Aquacarero RO Water Purifier installation"
              width={600}
              height={450}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* --- RIGHT SIDE: CONTENT & FEATURES --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 lg:col-span-6 lg:pl-6"
        >
          {/* Header Texts */}
          <div className="space-y-3">
            <motion.span 
              variants={itemVariants}
              className="block text-xs font-bold uppercase tracking-widest text-cyan-400"
            >
              Why Choose Aquacarero
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-serif tracking-tight text-slate-800 sm:text-4xl leading-tight max-w-md"
            >
              We promise pure, safe, and mineral-rich water for a healthier life.
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-sm leading-relaxed text-slate-500"
            >
              At Aquacare, we believe clean drinking water is the foundation of
              family health. Our state-of-the-art RO purification systems work
              silently behind the scenes to guard your home against invisible
              water-borne threats.
            </motion.p>
          </div>

          {/* Features List Group */}
          <div className="space-y-6">
            
            {/* Feature 1 */}
            <motion.div 
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              {/* Icon Circle with Scale-up Effect */}
              <motion.div 
                whileHover={{ scale: 1.08 }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm"
              >
                <ShieldCheck className="h-5 w-5" />
              </motion.div>
              
              {/* Feature Copy */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-serif text-slate-800">
                  Multi-Stage Multi-Layer Shield
                </h3>
                
                {/* Blue accent line animating to full width */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="h-[2px] bg-cyan-400" 
                />
                
                <p className="pt-1 text-sm leading-relaxed text-slate-500">
                  Combines advanced RO, UV, and UF filtration mechanisms to
                  systematically filter out 99% of dissolved solids, heavy
                  metals, bacteria, and harsh chemicals.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              {/* Icon Circle with Scale-up Effect */}
              <motion.div 
                whileHover={{ scale: 1.08 }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm"
              >
                <Zap className="h-5 w-5" />
              </motion.div>
              
              {/* Feature Copy */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-serif text-slate-800">
                  Active Mineral Retention
                </h3>
                
                {/* Blue accent line animating to full width */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="h-[2px] bg-cyan-400" 
                />
                
                <p className="pt-1 text-sm leading-relaxed text-slate-500">
                  Unlike basic filters that strip everything away, our system
                  restores essential alkaline minerals like Calcium and
                  Magnesium to ensure your water stays healthy and tastes crisp.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}