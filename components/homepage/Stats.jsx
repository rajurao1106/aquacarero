import React from 'react';
import { 
  LuGlassWater, 
  LuUserCheck, 
  LuUsers, 
  LuMapPin 
} from 'react-icons/lu';
import { IoWater } from 'react-icons/io5'; 

export default function Stats() {
  const stats = [
    {
      id: 1,
      value: '6.8K',
      label: 'TANK DELIVERED',
      Icon: LuGlassWater,
    },
    {
      id: 2,
      value: '8+',
      label: 'YEARS OF EXPERIENCE',
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
    <section className="w-full bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Blue Panel: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="rounded-2xl bg-[#004fb0] grid grid-cols-1 gap-y-12 py-12 px-4 sm:grid-cols-2 sm:gap-y-16 sm:py-16 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-white/15 lg:px-2 shadow-2xl">
          
          {stats.map((stat) => {
            const CustomIcon = stat.Icon;
            return (
              <div 
                key={stat.id} 
                className="group relative flex flex-col items-center text-center px-4 transition-transform duration-300 hover:scale-[1.02]"
              >
                
                {/* Badge Container: Inlined for mobile layout safety, shifts to absolute positioning ONLY on desktop */}
                <div className="relative mb-4 lg:absolute lg:mb-0 lg:-top-24 left-0 right-0 mx-auto flex h-20 w-20 items-center justify-center select-none filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]">
                  {/* Custom Blob SVG */}
                  <svg 
                    viewBox="0 0 100 100" 
                    className="absolute inset-0 w-full h-full fill-white transition-transform duration-500 group-hover:rotate-12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M50,5 C58,5 62,12 68,14 C74,16 82,12 86,18 C90,24 85,32 87,39 C89,46 96,50 95,58 C94,66 87,70 85,77 C83,84 87,92 81,95 C75,98 68,93 61,94 C54,95 48,101 40,99 C32,97 29,90 22,88 C15,86 7,89 4,83 C1,77 5,69 4,62 C3,55 -3,50 -2,42 C-1,34 6,30 8,23 C10,16 6,8 12,5 C18,2 25,7 32,6 C39,5 42,-1 50,5 Z" />
                  </svg>
                  
                  {/* Icon */}
                  <div className="relative z-10 text-[#004fb0]">
                    <CustomIcon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                </div>

                {/* Spacer to simulate the badge height on desktop resolutions so text elements do not overlap */}
                <div className="hidden lg:block lg:h-4" />

                {/* Droplet Decorator */}
                <div className="text-[#38bdf8] mb-2 animate-bounce [animation-duration:3s]">
                  <IoWater className="h-4 w-4" />
                </div>

                {/* Counter Metric */}
                <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-sans">
                  {stat.value}
                </h3>

                {/* Descriptive Label */}
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