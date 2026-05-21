"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import vaccum_cleaner1 from "@/public/vaccum cleaner/vaccum-cleaner1.jpg";
import vaccum_cleaner2 from "@/public/vaccum cleaner/vaccum-cleaner2.webp";

// Mock Data strictly following the layout style and parameters in the image
const INITIAL_PRODUCTS = [
  {
    id: 4,
    name: "Smart Robotic Vacuum Cleaner with Self-Emptying Dock",
    description:
      "Intelligent hands-free robot vacuum with LiDAR navigation, precise obstacle avoidance, and an automated dirt disposal charging station.",
    bestPrice: 2999,
    mrp: 48000,
    discount: "Save 28%",
    image: vaccum_cleaner1,
    color: "Black",
    popularity: 4.7,
    isSoldOut: false,
  },
  {
    id: 5,
    name: "Heavy Duty Wet & Dry Drum Vacuum Cleaner",
    description:
      "Powerful multi-purpose vacuum cleaner with high suction capacity, durable blower function, and a robust body perfect for deep household cleaning.",
    bestPrice: 5499,
    mrp: 8999,
    discount: "Save 38%",
    image: vaccum_cleaner2,
    color: "Black & Red",
    popularity: 4.3,
    isSoldOut: false,
  },
];

export default function VaccumCleaner() {
  // --- STATES ---
  const [sortBy, setSortBy] = useState("Popularity");
  const [maxPrice, setMaxPrice] = useState(28000);
  const [minPrice, setMinPrice] = useState(0);
  const [selectedColor, setSelectedColor] = useState(""); // "" means all colors

  // --- FILTER & SORT LOGIC ---
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...INITIAL_PRODUCTS];

    // 1. Color Filtering
    if (selectedColor) {
      result = result.filter((p) => p.color === selectedColor);
    }

    // 2. Price Filtering
    result = result.filter(
      (p) => p.bestPrice >= minPrice && p.bestPrice <= maxPrice,
    );

    // 3. Sorting Mechanics
    if (sortBy === "Popularity") {
      result.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === "Price, low to high") {
      result.sort((a, b) => a.bestPrice - b.bestPrice);
    } else if (sortBy === "Price, high to low") {
      result.sort((a, b) => b.bestPrice - a.bestPrice);
    } else if (sortBy === "Alphabetically, A-Z") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Alphabetically, Z-A") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [sortBy, maxPrice, minPrice, selectedColor]);

  // Reset helper handlers
  const handlePriceReset = () => {
    setMinPrice(0);
    setMaxPrice(28000);
  };

  const handleColorReset = () => {
    setSelectedColor("");
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 font-sans antialiased text-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Product Tracker Header */}
        <div className="mb-6 text-xs font-semibold text-gray-400">
          Showing {filteredAndSortedProducts.length} of{" "}
          {INITIAL_PRODUCTS.length} products
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 items-start">
          {/* ================= SIDEBAR FILTERS ================= */}
          <aside className="space-y-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            {/* 1. SORT BY SECTION */}
            <div className="space-y-3 pb-6 border-b border-gray-100">
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Sort By
              </h3>
              <div className="space-y-2.5">
                {[
                  "Popularity",
                  "Price, low to high",
                  "Price, high to low",
                  "Alphabetically, A-Z",
                  "Alphabetically, Z-A",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="sort"
                      checked={sortBy === option}
                      onChange={() => setSortBy(option)}
                      className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                    />
                    <span
                      className={`text-xs font-medium transition-colors ${sortBy === option ? "text-slate-900 font-bold" : "text-gray-500 group-hover:text-slate-900"}`}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 2. PRICE RANGE FILTER */}
            <div className="space-y-4 pb-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                  Price
                </h3>
                <button
                  onClick={handlePriceReset}
                  className="text-xs font-bold text-gray-400 hover:text-sky-600 transition-colors"
                >
                  Reset
                </button>
              </div>

              {/* Dynamic Range Slider Input tracking maxPrice */}
              <input
                type="range"
                min="0"
                max="28000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              {/* Min - Max Box Input display row */}
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-xl bg-slate-50 border border-gray-100 px-3 py-2 w-full">
                  <span className="text-xs text-gray-400 mr-1">₹</span>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full bg-transparent text-xs font-semibold text-slate-800 outline-none"
                  />
                </div>
                <span className="text-gray-300 text-xs">—</span>
                <div className="flex items-center rounded-xl bg-slate-50 border border-gray-100 px-3 py-2 w-full">
                  <span className="text-xs text-gray-400 mr-1">₹</span>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full bg-transparent text-xs font-semibold text-slate-800 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 3. COLOR SELECTION SECTION */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                  Color
                </h3>
                <button
                  onClick={handleColorReset}
                  className="text-xs font-bold text-gray-400 hover:text-sky-600 transition-colors"
                >
                  Reset
                </button>
              </div>
              <div className="space-y-2.5">
                {[
                  { name: "Black", style: "bg-black" },
                  { name: "White", style: "bg-white border border-gray-200" },
                ].map((color) => (
                  <label
                    key={color.name}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="color"
                      checked={selectedColor === color.name}
                      onChange={() => setSelectedColor(color.name)}
                      className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                    />
                    <div className={`h-3 w-3 rounded-full ${color.style}`} />
                    <span
                      className={`text-xs font-medium transition-colors ${selectedColor === color.name ? "text-slate-900 font-bold" : "text-gray-500 group-hover:text-slate-900"}`}
                    >
                      {color.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* ================= PRODUCT DISPLAY GRID ================= */}
          <main className="lg:col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredAndSortedProducts.length > 0 ? (
              filteredAndSortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  {/* Main Product Frame Box */}
                  <div className="flex flex-col items-center pt-4 pb-6">
                    <div className="relative flex h-48 w-full items-center justify-center bg-slate-50/40 rounded-xl p-4">
                      {/* Using fallback div rendering to represent image placeholder context structure */}
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain"
                          priority={product.id <= 3} // Optimization hint for above the fold assets
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Copy Specifications Wrapper */}
                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h2 className="text-sm  font-sans  font-semibold tracking-tight text-slate-900 leading-snug">
                        {product.name}
                      </h2>
                      <p className="text-[11px] leading-relaxed text-gray-400 line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Pricing Matrix Labels Frame */}
                    <div className="pt-3 pb-4 space-y-0.5">
                      <div className="text-xs font-serif text-slate-900 font-medium">
                        Best Price :{" "}
                        <span className=" font-sans font-bold">
                          ₹ {product.bestPrice.toLocaleString("en-IN")}.00
                        </span>
                      </div>
                    </div>

                    {/* Footer Trigger Operations Buttons Panel row */}
                    <div className="grid grid-cols-1 gap-2.5 pt-1">
                      <a
                        href={"/contact"}
                        className={`rounded-full py-2.5 text-xs font-bold text-white shadow-sm transition-all text-center border bg-[#1e2e4d] border-[#1e2e4d] hover:bg-slate-800`}
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Empty result placeholder fallback
              <div className="col-span-full text-center py-20 rounded-2xl bg-white border border-dashed border-gray-200">
                <p className="text-sm font-medium text-gray-400">
                  No water purifiers match your filter conditions.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
