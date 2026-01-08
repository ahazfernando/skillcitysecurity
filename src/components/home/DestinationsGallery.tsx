"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  { 
    image: '/services/interiorhouse(D1V1).jpg', 
    serviceName: 'Facility Solutions'
  },
  { 
    image: '/services/recreuitment.jpg', 
    serviceName: 'Recruitment'
  },
  { 
    image: '/services/plumbingwater.jpg', 
    serviceName: 'Professional Plumbing'
  },
  { 
    image: '/services/dab71de9b4112fadbb7208c430841d67.jpg', 
    serviceName: 'Security Services'
  },
];

export default function DestinationsGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              <span className="italic">Reliable</span> Services for <br /><span className="italic">Safer Spaces</span> across Australia
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Discover our comprehensive range of professional services designed to meet all your business needs.
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors text-foreground"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors text-foreground"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{
          paddingLeft: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))'
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 group cursor-pointer"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/70 text-sm mb-2">Skill City</p>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.serviceName}</h3>
                <button className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  <span>View More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
