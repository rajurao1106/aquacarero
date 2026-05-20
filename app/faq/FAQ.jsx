"use client";

import React, { useState } from "react";
import { FaChevronDown, FaSearch, FaRegQuestionCircle } from "react-icons/fa";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "general", name: "General Queries" },
    { id: "technology", name: "Purification Technology" },
    { id: "maintenance", name: "Filters & Maintenance" },
    { id: "service", name: "Installation & Support" },
  ];

  const faqData = {
    general: [
      {
        q: "What makes Aquacarero different from ordinary water filters?",
        a: "Aquacarero uses advanced multi-stage RO + UV + UF purification combined with an Active Mineralizer. While regular filters only remove basic sediments, our systems eliminate microscopic contaminants and heavy metals while restoring essential minerals like Calcium and Magnesium for sweet, balanced water.",
      },
      {
        q: "Does this system work for high TDS groundwater or borewell water?",
        a: "Yes, absolutely. Aquacarero heavy-duty RO membranes are specifically engineered to efficiently handle raw water with high TDS (Total Dissolved Solids) levels of up to 2000 ppm, turning brackish water into safe, crisp, and refreshing drinking water.",
      },
      {
        q: "What is the storage tank capacity and material?",
        a: "Our premium residential models come with an 8-liter to 10-liter high-capacity storage tank made from food-grade, multi-layer ABS plastic to preserve hygiene and prevent any bacterial growth over long periods.",
      },
    ],
    technology: [
      {
        q: "How does the multi-stage purification shield work?",
        a: "Water systematically passes through a Sediment Filter (removes mud/rust), a Pre-Carbon Block (removes chlorine/bad odor), the core RO Membrane (removes heavy metals/arsenic), and a post-UV chamber that completely deactivates invisible bacteria and viruses.",
      },
      {
        q: "What does the Copper + Alkaline filter do?",
        a: "The Alkaline cartridge balances the pH level of purified water to keep it optimally alkaline, while the active copper technology infuses trace copper ions into the water to boost immunity and improve digestive system health.",
      },
    ],
    maintenance: [
      {
        q: "How frequently do I need to replace the filter cartridges?",
        a: "Sediment and pre-carbon filters are typically replaced every 6 months to maintain optimum flow rate. The core RO membrane and UV setup last around 12 to 18 months, depending on your daily consumption volume and raw water conditions.",
      },
      {
        q: "How can I monitor the live water quality at home?",
        a: "Our smart purifiers feature a built-in digital LED dashboard panel that provides a live display of output TDS levels, filter life indicators, and real-time alerts if a cartridge needs a scheduled replacement.",
      },
    ],
    service: [
      {
        q: "Are installation and product delivery free?",
        a: "Yes! Every purchase of a Aquacarero RO system includes completely free doorstep delivery and professional technician installation. Our service specialist will also test your raw water TDS and set up the system parameters perfectly.",
      },
      {
        q: "What is covered under the Aquacarero warranty framework?",
        a: "We provide a comprehensive 1-Year Comprehensive Warranty that covers all electronic parts, including the high-pressure pump, SMPS power adapter, UV barrel, and electronic control circuits against any structural manufacturing defects.",
      },
    ],
  };

  // Toggle active accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter questions based on search input query
  const currentQuestions = faqData[activeTab].filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()),
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
            Got questions about Aquacarero technology, regular filter
            replacements, or installation? Find answers below.
          </p>

       
        </div>
      </div>

      {/* --- CORE CONTENT NAVIGATION GRID --- */}
      <main className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* LEFT SIDEBAR: Nav Toggles */}
          <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setOpenIndex(0); // Reset accordion tracking to top item on tab change
                }}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-semibold text-sm transition-all text-left ${
                  activeTab === tab.id
                    ? "bg-white text-[#00c4ff] shadow-sm border border-sky-100/50"
                    : "bg-transparent text-gray-500 hover:bg-gray-100 hover:text-slate-800"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FaRegQuestionCircle className="h-4 w-4 shrink-0" />
                  <span>{tab.name}</span>
                </div>
                <span
                  className={`h-2 w-2 rounded-full bg-[#00c4ff] transition-transform ${activeTab === tab.id ? "scale-100" : "scale-0"}`}
                />
              </button>
            ))}
          </div>

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
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform duration-300 ${isCurrentOpen ? "rotate-180 bg-sky-50 text-[#00c4ff]" : ""}`}
                      >
                        <FaChevronDown className="h-3 w-3" />
                      </span>
                    </button>

                    {/* Content Panel Box */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isCurrentOpen
                          ? "max-h-[500px] border-t border-gray-50"
                          : "max-h-0"
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
                <p className="text-sm font-medium text-gray-400">
                  No results found matching your purification keywords.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
