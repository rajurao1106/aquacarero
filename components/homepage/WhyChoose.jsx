import React from 'react';
import Image from 'next/image';
import whychooseus from "@/public/homepage/whychooseus.jpg"
export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        
        {/* --- LEFT SIDE: CONTENT COPY --- */}
        <div className="space-y-6 lg:col-span-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00c4ff]">
            Health & Purity First
          </span>
          
          <h2 className="text-3xl font-serif font-extrabold tracking-tight text-[#1e2e4d] sm:text-4xl lg:text-5xl leading-[1.15]">
            Why a Smart Water Purifier is Essential for Your Family
          </h2>
          
          <div className="space-y-4 text-sm leading-relaxed text-gray-500 max-w-xl">
            <p>
              Groundwater and tap water sources travel through aging underground municipal pipelines, often picking up invisible contaminants like rust, mud, lead, and industrial chemical residues along the way. A multi-stage RO purifier acts as your home’s ultimate defense shield, ensuring what enters your glass is 100% pure.
            </p>
            <p>
              Traditional methods like boiling water can kill biological pathogens and bacteria, but they completely fail to eliminate dissolved toxic heavy metals, arsenic, nitrates, and microscopic plastics. Advanced reverse osmosis membranes physically separate these microscopic solids from your drinking water.
            </p>
            <p>
              Unregulated high TDS (Total Dissolved Solids) parameters not only destroy the natural sweet taste of water but also cause long-term digestive stress, kidney issues, and dry hair. Investing in an intelligent purification system ensures active mineral restoration, delivering perfectly balanced, mineral-rich, and sweet-tasting water every single day.
            </p>
          </div>

          <div className="pt-4">
            <button className="rounded-full bg-[#00c4ff] px-10 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-sky-400 hover:shadow-lg">
              Explore RO Systems
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: STAGGERED IMAGES WITH BLOB BACKGROUND --- */}
        <div className="relative flex items-center justify-center lg:col-span-6 h-[480px] sm:h-[520px]">
          
       

          {/* Bottom-Right Image: Service Delivery Representative */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-xl border border-white translate-y-6 sm:translate-y-10 transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={whychooseus} // Replace with your image path
              alt="Professional water purifier quality testing and technical setup verification"
              fill
              className="object-cover"
          
            />
          </div>

        </div>

      </div>
    </section>
  );
}