import React from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Joew Harbert',
      role: 'CEO, NoonBrew',
      avatar: '/avatars/joew.jpg', // Replace with your image path
      text: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut aliqua.”',
    },
    {
      id: 2,
      name: 'Mila McSabbu',
      role: 'Marketing & Office Coordinator',
      avatar: '/avatars/mila.jpg', // Replace with your image path
      text: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut aliqua.”',
    },
    {
      id: 3,
      name: 'Robert Fox',
      role: 'Owner, Beards of Brothers',
      avatar: '/avatars/robert.jpg', // Replace with your image path
      text: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut aliqua.”',
    },
  ];

  return (
    <section className="relative w-full bg-white py-12">
      
      {/* --- TOP OCEAN WAVE SHAPE --- */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden rotate-180 leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-[#f0f9ff]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120C50.4,109.11,142.13,91.3,230.15,75.4,261.35,69.8,291.68,64.44,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* --- CORE BLUE WRAPPER BLOCK --- */}
      <div className="bg-[#f0f9ff] px-4 pt-24 pb-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00c4ff]">
              Our Clients
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1e2e4d] sm:text-4xl">
              Our Testimonials
            </h2>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="relative flex flex-col justify-between rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Decorative Giant Quote Asset */}
                <div className="absolute top-4 left-6 pointer-events-none select-none text-[80px] font-serif font-black leading-none text-slate-100/70">
                  99
                </div>

                {/* Testimonial Core Copy */}
                <div className="relative z-10 pt-4 pb-8">
                  <p className="text-sm font-medium leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>

                {/* Profile Identity Layout */}
                <div className="flex items-center space-x-4 border-t border-slate-50 pt-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-slate-100">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-[#1e2e4d]">
                      {item.name}
                    </h4>
                    <p className="text-xs font-medium text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Controls */}
          <div className="mt-12 flex items-center justify-center space-x-2">
            <button className="h-2.5 w-2.5 rounded-full border border-slate-400 bg-transparent" aria-label="Go to slide 1" />
            <button className="h-1.5 w-1.5 rounded-full bg-slate-400" aria-label="Go to slide 2" />
            <button className="h-1.5 w-1.5 rounded-full bg-slate-400" aria-label="Go to slide 3" />
          </div>

        </div>
      </div>

      {/* --- BOTTOM OCEAN WAVE SHAPE --- */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-[#f0f9ff]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120C50.4,109.11,142.13,91.3,230.15,75.4,261.35,69.8,291.68,64.44,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
}