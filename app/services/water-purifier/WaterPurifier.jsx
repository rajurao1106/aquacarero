"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import water_purifier1 from "@/public/water purifier/water-purifier1.webp";
import water_purifier2 from "@/public/water purifier/water-purifier2.webp";
import water_purifier3 from "@/public/water purifier/water-purifier3.webp";
import water_purifier4 from "@/public/water purifier/water-purifier4.webp";
import water_purifier5 from "@/public/water purifier/water-purifier5.webp";
import water_purifier6 from "@/public/water purifier/water-purifier6.jpg";
import water_purifier from "@/public/water purifier/water-purifier.jpg";
import water_purifier7 from "@/public/water purifier/water-purifier7.jpg";
import water_purifier8 from "@/public/water purifier/water-purifier8.jpg";
import water_purifier9 from "@/public/water purifier/water-purifier9.jpg";

// Mock Data strictly following the layout style and parameters in the image
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Aquaguard Enrich Vector RO+UV+MC 2X Water Purifier ",
    description:
      "Advanced water purification featuring RO and UV technologies combined with Mineral Charge (MC) to enrich your drinking water with essential minerals and deliver double the safety.",
    bestPrice: 17500,
    mrp: 28000,
    discount: "Save 21%",
    image: water_purifier1,
    color: "Black",
    popularity: 5,
    isSoldOut: false,
  },
  {
    id: 2,
    name: "Aquaguard Water Purifier Aspire Nova Pro RO+UV 2X IOT",
    description:
      "A smart, next-gen water purifier featuring RO+UV multi-stage protection and 2X IoT smart monitoring capabilities to track water quality and filter life directly from your smartphone.",
    bestPrice: 9000,
    mrp: 28000,
    discount: "Save 21%",
    image: water_purifier2,
    color: "Black",
    popularity: 4,
    isSoldOut: false,
  },
  {
    id: 3,
    name: "Aquaguard Aspire Blaze 2X UV+UF Stainless Steel Water Purifier",
    description:
      "Combines the dual protection of UV and UF technologies with a premium, hygienic stainless steel storage tank to ensure pure, chemical-free drinking water.",
    bestPrice: 9500,
    mrp: 28000,
    discount: "Save 21%",
    image: water_purifier3,
    color: "Black",
    popularity: 5,
    isSoldOut: false,
  },
  {
    id: 4,
    name: "Aquaguard Aspire Nova WS RO+UV+UF Water Purifier 7 L RO + UV + MTDS + Copper 7 L RO + UV + Copper + TDS Control",
    description:
      "Equipped with a 7-liter tank, this comprehensive purifier utilizes RO+UV+UF filtration, active Copper infusion, and an MTDS regulator to control taste and total dissolved solids dynamically.",
    bestPrice: 26500,
    mrp: 28000,
    discount: "Save 21%",
    image: water_purifier4,
    color: "Black",
    popularity: 4,
    isSoldOut: false,
  },
  {
    id: 5,
    name: "NILE CANIX-W-01 10 L RO + UF + Alkaline Water Purifier",
    description:
      "Featuring a generous 10-liter storage capacity, this system combines robust RO and UF filtration with an alkaline filter to optimize pH levels and keep your body perfectly hydrated.",
    bestPrice: 25000,
    mrp: 28000,
    discount: "Save 21%",
    image: water_purifier5,
    color: "Black",
    popularity: 5,
    isSoldOut: false,
  },
  {
    id: 6,
    name: "Excellent | RO+UV+UF+TDS Control |7 stage filtration |12 ltr storage | White",
    description:
      "Multiple purification by RO+UF process which removes even dissolved impurities such as chemicals, bacteria, viruses, and salts making water 100% pure and suitable for drinking.",
    bestPrice: 25500,
    mrp: 28000,
    discount: "Save 21%",
    image: water_purifier,
    color: "Black",
    popularity: 4,
    isSoldOut: false,
  },
  {
    id: 7,
    name: "New Apple Veda | Premium RO Water Purifier | Premium Black In Color",
    description:
      "An elegant, premium black edition water purifier utilizing multistage RO filtration to deliver pristine taste while complementing modern kitchen aesthetics.",
    bestPrice: 21999,
    mrp: 28000,
    discount: "Save 21%",
    image: water_purifier7,
    color: "Black",
    popularity: 5,
    isSoldOut: false,
  },
  {
    id: 8,
    name: "Simflo 50LTR Commercial Water Purifier | RO+TDS Control+Copper",
    description:
      "Heavy-duty 50-liter commercial purification system designed to cater to large crowds. Features robust RO filtration, automatic TDS management, and integrated copper enrichment.",
    bestPrice: 8000,
    mrp: 28000,
    discount: "Save 21%",
    image: water_purifier8,
    color: "Black",
    popularity: 4,
    isSoldOut: false,
  },
  {
    id: 9,
    name: "AQUAULTRA Glory Multi stage Purification 8 Liter RO +UV+ B12, Alkaline + Auto TDS Control Water Purifier Filter",
    description:
      "An advanced 8-liter wellness purifier that offers RO and UV stages, automatic TDS control, alkaline balancing, and unique Vitamin B12 enrichment for healthier drinking water.",
    bestPrice: 6000,
    mrp: 28000,
    discount: "Save 21%",
    image: water_purifier9,
    color: "Black",
    popularity: 4,
    isSoldOut: false,
  },
];

export default function WaterPurifier() {
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
                      <h2 className="text-sm font-sans font-semibold tracking-tight text-slate-900 leading-snug">
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
                        <span className="font-sans">
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
