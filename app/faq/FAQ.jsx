"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'general', name: 'General Queries' },
    { id: 'delivery', name: 'Shipping & Delivery' },
    { id: 'products', name: 'Water Filters & Maintenance' },
    { id: 'orders', name: 'Orders & Returns' },
  ];

  const faqData = {
    general: [
      {
        q: "How does the water filtering system work?",
        a: "Our advanced filtration systems pass water through multiple specialized stages—including sediment extraction, carbon blocks, and reverse osmosis membranes—to systematically strip away chlorine, heavy metals, rust, and bacteria, delivering pristine drinking water."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit/debit cards, UPI, net banking options, and digital wallets. Cash on Delivery (COD) is also available depending on your service PIN location."
      },
      {
        q: "Can I install the filtration unit myself?",
        a: "While our countertop and standard pitcher models require zero installation, complex under-sink reverse osmosis systems are best handled by our certified setup specialists to preserve your product warranty."
      }
    ],
    delivery: [
      {
        q: "How long will it take to deliver my product?",
        a: "Standard shipments take 3-5 business days. For major urban regions and local hub areas, express next-day delivery options can be selected during checkouts."
      },
      {
        q: "Do you offer free delivery and setup?",
        a: "Yes! All premium multi-stage filtration plants and residential reverse osmosis setups include completely free doorstep delivery and professional technician installation parameters."
      }
    ],
    products: [
      {
        q: "When should I replace my filter cartridges?",
        a: "Typically, sediment and pre-carbon cartridges require swaps every 6 months, while the core reverse osmosis membranes last up to 12–18 months depending on local raw water TDS metrics."
      },
      {
        q: "How can I check the clean water quality at home?",
        a: "Many of our intelligent purification systems feature built-in electronic TDS monitors on the UI dashboard panels. Alternatively, you can use a portable digital TDS tester pen."
      }
    ],
    orders: [
      {
        q: "What is your return policy window?",
        a: "We offer a hassle-free 14-day return window for unopened, unused equipment packages preserved carefully inside their original manufacturer boxes."
      }
    ]
  };

  // Automatically reset open index when switching filter tabs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setOpenIndex(0);
  };

  // Toggle active accordion element
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter questions based on query inputs
  const currentQuestions = faqData[activeTab].filter(item =>
    item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans antialiased text-[#222222]">
      
      {/* --- TOP BANNER / SEARCH BAR --- */}
      <div className="bg-gradient-to-b from-sky-50 via-sky-50/40 to-[#f8fafc] py-20 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#00c4ff]">
            Help Center
          </span>
          <h1 className="text-4xl font-serif font-bold text-[#1e2e4d] sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Have questions about systems, deliveries, or filter maintenance? Find your quick answers below.
          </p>

          {/* Interactive Dynamic Search Input Bar */}
          <div className="relative max-w-md mx-auto mt-6">
            <input 
              type="text"
              placeholder="Search legal queries, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-full bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-sm transition-all text-sm"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          </div>
        </motion.div>
      </div>

      {/* --- CORE CONTENT NAVIGATION GRID --- */}
      <main className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Navigation Filter Tabs Module */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-none shrink-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap text-left w-full ${
                    isActive 
                      ? 'text-sky-600 shadow-sm border border-sky-100' 
                      : 'text-slate-500 hover:bg-slate-100/70 border border-transparent'
                  }`}
                >
                  {/* Shared background layout slider highlight */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-sky-50 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Smooth Accordion Layout List Area */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="wait">
              {currentQuestions.length > 0 ? (
                <motion.div
                  key={activeTab + searchQuery} // key switch resets view wrapper transitions cleanly
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {currentQuestions.map((item, idx) => {
                    const isCurrentOpen = openIndex === idx;
                    return (
                      <div 
                        key={idx}
                        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                      >
                        {/* Header Trigger bar */}
                        <button
                          onClick={() => toggleAccordion(idx)}
                          className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50/40"
                        >
                          <span className="text-base font-bold text-[#1e2e4d] pr-4">
                            {item.q}
                          </span>
                          <motion.span 
                            animate={{ rotate: isCurrentOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 ${
                              isCurrentOpen ? 'bg-sky-50 !text-[#00c4ff]' : ''
                            }`}
                          >
                            <FaChevronDown className="h-3 w-3" />
                          </motion.span>
                        </button>

                        {/* Content Panel Box using height animations */}
                        <AnimatePresence initial={false}>
                          {isCurrentOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="border-t border-gray-50 overflow-hidden bg-white"
                            >
                              <p className="p-6 text-sm leading-relaxed text-gray-500">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              ) : (
                /* Empty search fallback wrapper panel */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 rounded-3xl bg-white border border-dashed border-gray-200"
                >
                  <p className="text-sm font-medium text-gray-400">
                    No results found matching your search term.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>
    </div>
  );
}