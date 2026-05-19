import React from 'react';
import Image from 'next/image';
import { Search, User } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1e293b]">
     

      {/* --- HERO MAIN CONTENT --- */}
      <main className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        {/* Curved Light Blue Background Wrapper */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#ffffff] px-8 py-12 sm:px-12 lg:px-20 lg:py-20">
          
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="space-y-6 lg:col-span-7">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#1c2e4d] sm:text-5xl lg:text-6xl leading-[1.15]">
                Фильтр <br />
                <span className="block mt-1">Профи Осмо 100</span>
              </h1>
              
              <p className="max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
                Комплексная очистка водопроводной воды от всех основных содержащихся в ней вредных примесей. Быстрая замена картриджей без специальных инструментов
              </p>
              
              <div className="pt-4">
                <button className="rounded-xl bg-[#22a5f1] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-sky-500 shadow-md hover:shadow-lg">
                  Узнать больше
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="flex justify-center lg:col-span-5">
              <div className="relative w-full max-w-[420px] transition-transform duration-300 hover:scale-105">
                {/* Replace src with your actual image path */}
                <Image
                  src="/water-filter.png" 
                  alt="Фильтр Профи Осмо 100"
                  width={450}
                  height={450}
                  priority
                  className="h-auto w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>

          {/* Slider Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center space-x-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22a5f1]"></span>
            <span className="h-2.5 w-2.5 rounded-full border border-[#22a5f1] bg-transparent"></span>
            <span className="h-2.5 w-2.5 rounded-full border border-[#22a5f1] bg-transparent"></span>
          </div>

        </div>
      </main>
    </div>
  );
}