import React from 'react';
import { 
  LuGlassWater, 
  LuUserCheck, 
  LuUsers, 
  LuMapPin 
} from 'react-icons/lu';
import { IoWater } from 'react-icons/io5'; // Using a solid water droplet icon

export default function Stats() {
  const stats = [
    {
      id: 1,
      value: '6.8K',
      label: 'BOTTLED DELIVERED',
      Icon: LuGlassWater,
    },
    {
      id: 2,
      value: '8+',
      label: 'YEAR OF EXPERIENCED',
      Icon: LuUserCheck,
    },
    {
      id: 3,
      value: '45k',
      label: 'TEAM MEMBERS',
      Icon: LuUsers,
    },
    {
      id: 4,
      value: '25',
      label: 'LOCAL SERVING AREAS',
      Icon: LuMapPin,
    },
  ];

  return (
    <section className="relative w-full bg-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- MAIN CORE BLUE PANEL BAR --- */}
        <div className="rounded-2xl lg:rounded-none bg-[#004fb0] grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:divide-white/15 shadow-xl">
          
          {stats.map((stat) => {
            const CustomIcon = stat.Icon;
            return (
              <div 
                key={stat.id} 
                className="relative flex flex-col items-center text-center px-6 pt-16 pb-10 transition-transform duration-300 hover:scale-[1.02]"
              >
                
                {/* FLOATING TOP BADGE: Styled Cloud/Flower Outline */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex h-24 w-24 items-center justify-center select-none filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]">
                  {/* Custom Background SVG to match the cloud outline perfectly */}
                  <svg 
                    viewBox="0 0 100 100" 
                    className="absolute inset-0 w-full h-full fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M50,5 C58,5 62,12 68,14 C74,16 82,12 86,18 C90,24 85,32 87,39 C89,46 96,50 95,58 C94,66 87,70 85,77 C83,84 87,92 81,95 C75,98 68,93 61,94 C54,95 48,101 40,99 C32,97 29,90 22,88 C15,86 7,89 4,83 C1,77 5,69 4,62 C3,55 -3,50 -2,42 C-1,34 6,30 8,23 C10,16 6,8 12,5 C18,2 25,7 32,6 C39,5 42,-1 50,5 Z" />
                  </svg>
                  
                  {/* Inside Line Icon Reference */}
                  <div className="relative z-10 text-[#004fb0]">
                    <CustomIcon className="h-7 w-7 stroke-[1.5]" />
                  </div>
                </div>

                {/* MIDDLE INDICATOR: Cyan Droplet Asset */}
                <div className="text-[#38bdf8] mb-3 mt-2 animate-bounce [animation-duration:3s]">
                  <IoWater className="h-5 w-5" />
                </div>

                {/* STATISTIC METRIC COUNT VALUE */}
                <h3 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl font-sans">
                  {stat.value}
                </h3>

                {/* LOWER LABELS DESCRIPTION */}
                <p className="mt-2 text-xs font-bold tracking-widest text-sky-100 uppercase leading-snug max-w-[160px]">
                  {stat.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}