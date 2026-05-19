"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaSearch, FaRegQuestionCircle } from 'react-icons/fa';

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

  // Toggle active accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter questions based on search input query
  const currentQuestions = faqData[activeTab].filter(item =>
    item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans antialiased text-[#222222]">
      
      {/* --- TOP BANNER / SEARCH BAR --- */}
      <div className="bg-gradient-to-b from-sky-50 via-sky-50/40 to-[#f8fafc] py-20 text-center px-4">
        <div className="mx-auto max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00c4ff]">
            Help Center
          </span>
          <h1 className="text-4xl font-serif font-bold text-[#1e2e4d] sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Have questions about systems, deliveries, or filter maintenance? Find your quick answers below.
          </p>

          {/* Search Bar Wrap */}
          <div className="pt-6 max-w-xl mx-auto">
            <div className="flex items-center rounded-full bg-white px-5 py-3.5 shadow-sm border border-gray-100 transition-all focus-within:shadow-md focus-within:border-sky-200">
              <FaSearch className="text-gray-400 shrink-0 mr-3 h-4 w-4" />
              <input 
                type="text"
                placeholder="Search keywords or specific questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- CORE CONTENT NAVIGATION GRID --- */}
      <main className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">


          {/* RIGHT COLUMN: Smooth Accordion Layout list */}
          <div className="lg:col-span-8 space-y-4">
            {currentQuestions.length > 0 ? (
              currentQuestions.map((item, idx) => {
                const isCurrentOpen = openIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-200"
                  >
                    {/* Header Trigger bar */}
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50/60"
                    >
                      <span className="text-base font-bold text-[#1e2e4d] pr-4">
                        {item.q}
                      </span>
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform duration-300 ${isCurrentOpen ? 'rotate-180 bg-sky-50 text-[#00c4ff]' : ''}`}>
                        <FaChevronDown className="h-3 w-3" />
                      </span>
                    </button>

                    {/* Content Panel Box */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isCurrentOpen ? 'max-h-[500px] border-t border-gray-50' : 'max-h-0'
                      }`}
                    >
                      <p className="p-6 text-sm leading-relaxed text-gray-500 bg-white">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              // Empty search configuration state fallback
              <div className="text-center py-16 rounded-3xl bg-white border border-dashed border-gray-200">
                <p className="text-sm font-medium text-gray-400">No results found matching your search term.</p>
              </div>
            )}
          </div>

        </div>
      </main>

    </div>
  );
}