import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const categories = [
    {
      id: 1,
      title: 'Питьевые фильтры',
      description: 'Глубокая очистка воды от хлора, тяжелых металлов и бактерий прямо под вашу кухонную мойку.',
      image: '/drinking-filters.png',
      hasFooter: true,
    },
    {
      id: 2,
      title: 'Магистральные фильтры',
      description: 'Защита бытовой техники и всей водопроводной системы дома от песка, ржавчины и накипи.',
      image: '/mainline-filters.png',
      hasFooter: true,
    },
    {
      id: 3,
      title: 'Водоочистка для коттеджа',
      description: 'Комплексные интеллектуальные системы для очистки воды из скважин и колодцев загородных домов.',
      image: '/cottage-purification.png',
      hasFooter: true,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      
      {/* --- SECTION HEADER --- */}
      <div className="mb-12 flex flex-col justify-between gap-6 border-b border-gray-100 pb-8 md:flex-row md:items-end">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#22a5f1]">
            Наш Ассортимент
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1c2e4d] sm:text-4xl">
            Надежные решения для чистой воды
          </h2>
          <p className="text-base text-gray-500">
            Выбирайте высокотехнологичные фильтры для любых нужд: от компактных систем под кухонную мойку до комплексного оборудования для загородных домов и коттеджей.
          </p>
        </div>
        
        {/* Top "See More" Action */}
        <div className="shrink-0">
          <button className="group flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#22a5f1] transition-colors hover:text-sky-600">
            <span>Смотреть все категории</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* --- CARDS GRID --- */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative flex h-[460px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-[#38bdf8] via-[#22a5f1] to-[#0ea5e9] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Top Text Content (Title & Description) */}
            <div className="p-8 pb-2 space-y-2">
              <h3 className="text-2xl font-extrabold tracking-tight text-white leading-tight">
                {category.title}
              </h3>
              <p className="text-sm leading-relaxed text-sky-50/90 line-clamp-3">
                {category.description}
              </p>
            </div>

            {/* Product Centered/Bottom Image Area */}
            <div className="relative flex-1 px-6 flex items-end justify-center overflow-hidden">
              <div className="relative h-[200px] w-full transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-w-7xl) 33vw"
                  priority
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>
            </div>

            {/* Bottom White Footer Panel */}
            {category.hasFooter ? (
              <div className="flex items-center justify-between bg-white px-8 py-5 border-t border-gray-50">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1c2e4d]">
                  Перейти в каталог
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full text-[#22a5f1] transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            ) : (
              <div className="h-6 w-full shrink-0" />
            )}
          </div>
        ))}
      </div>

    </section>
  );
}