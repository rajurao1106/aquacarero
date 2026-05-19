import React from 'react';
import Image from 'next/image';
import { Play, LineChart } from 'lucide-react';

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        
        {/* --- LEFT SIDE: IMAGE COMPOSITION --- */}
        <div className="relative lg:col-span-6">
          {/* Main Large Image */}
          <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <Image
              src="/main-purifier.jpg" // Replace with your main image path
              alt="Water purifier usage"
              width={600}
              height={450}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Overlapping Picture-in-Picture / Video Preview Card */}
          <div className="absolute -bottom-6 right-4 w-1/2 max-w-[220px] overflow-hidden rounded-2xl border-4 border-white bg-gray-200 shadow-xl sm:right-8 sm:w-2/5">
            <div className="relative aspect-square w-full">
              <Image
                src="/video-thumbnail.jpg" // Replace with your video thumbnail path
                alt="Product demonstration video"
                fill
                className="object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-cyan-400 shadow-lg transition-transform hover:scale-110">
                  <Play className="ml-1 h-5 w-5 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTENT & FEATURES --- */}
        <div className="space-y-8 lg:col-span-6 lg:pl-6">
          {/* Header Texts */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Intelligent
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl leading-tight max-w-md">
              We always want safe and healthy water for healthy life.
            </h2>
            <p className="text-sm leading-relaxed text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tmpor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Features List Group */}
          <div className="space-y-6">
            
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              {/* Yellow Icon Circle */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white shadow-sm">
                <LineChart className="h-5 w-5" />
              </div>
              {/* Feature Copy */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-800">Content Marketing</h3>
                <div className="h-[2px] w-8 bg-cyan-400" /> {/* Blue accent line */}
                <p className="pt-1 text-sm leading-relaxed text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tmpor incididunt ut aliqua.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              {/* Yellow Icon Circle */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white shadow-sm">
                <LineChart className="h-5 w-5" />
              </div>
              {/* Feature Copy */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-800">Marketing Strategy</h3>
                <div className="h-[2px] w-8 bg-cyan-400" /> {/* Blue accent line */}
                <p className="pt-1 text-sm leading-relaxed text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tmpor incididunt ut aliqua.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}