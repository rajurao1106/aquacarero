import React from 'react';
import Image from 'next/image';

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        
        {/* --- LEFT SIDE: CONTENT COPY --- */}
        <div className="space-y-6 lg:col-span-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00c4ff]">
            Intelligent
          </span>
          
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1e2e4d] sm:text-4xl lg:text-5xl leading-[1.15]">
            You&apos;ll love fresh taste of our <br className="hidden sm:inline" /> natural water
          </h2>
          
          <div className="space-y-4 text-sm leading-relaxed text-gray-500 max-w-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tmpor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tmpor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="pt-4">
            <button className="rounded-full bg-[#00c4ff] px-10 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-sky-400 hover:shadow-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: STAGGERED IMAGES WITH BLOB BACKGROUND --- */}
        <div className="relative flex items-center justify-center lg:col-span-6 h-[480px] sm:h-[520px]">
          
          {/* Organic Background Vector Shape (Recreating the faint blue blob layout) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
            <svg 
              viewBox="0 0 500 500" 
              className="w-[110%] h-[110%] fill-[#f0f9ff]" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M410,310Q370,420,250,430Q130,440,90,320Q50,200,120,100Q190,0,310,50Q430,100,410,310Z" />
            </svg>
          </div>

          {/* Image Grid Container */}
          <div className="relative z-10 w-full h-full max-w-md sm:max-w-xl grid grid-cols-2 gap-6 items-center">
            
            {/* Top-Left Image: Water Purifier Countertop */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-xl border border-white -translate-y-6 sm:-translate-y-10 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/countertop-purifier.jpg" // Replace with your image path
                alt="Water purifier on kitchen counter"
                fill
                className="object-cover"
                sizes="(max-w-7xl) 25vw"
              />
            </div>

            {/* Bottom-Right Image: Service Delivery Representative */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-xl border border-white translate-y-6 sm:translate-y-10 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/delivery-service.jpg" // Replace with your image path
                alt="Water delivery and setup service customer check"
                fill
                className="object-cover"
                sizes="(max-w-7xl) 25vw"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}