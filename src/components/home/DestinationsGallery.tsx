"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  { 
    image: '/securityservices/da70b16731e204ca988383717c60d559.jpg', 
    serviceName: 'Security Guard Services',
    description: 'Professional trained security personnel for your premises'
  },
  { 
    image: '/securityservices/abd95df86f099e14285d3ff3fd1251e4.jpg', 
    serviceName: 'Event Security Management',
    description: 'Comprehensive security solutions for events and gatherings'
  },
  { 
    image: '/securityservices/69313e189e6cccb00bf7871e4c9fd6e5.jpg', 
    serviceName: 'Access Control Systems',
    description: 'Advanced access control and monitoring solutions'
  },
  { 
    image: '/securityservices/086f14eaa0cfccc722c962e3a4bdd284.jpg', 
    serviceName: 'Security Assessments',
    description: 'Thorough evaluation and recommendations for your security needs'
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
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">
              <span className="italic font-medium">Reliable</span> <span className="font-semibold">Services for</span> <br /><span className="italic font-medium">Safer Spaces</span> <span className="font-semibold">across Australia</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Comprehensive security solutions designed to protect your business, employees, and assets across Australia.
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
                <p className="text-white/70 text-sm mb-2">Skill City Security</p>
                <h3 className="text-2xl font-semibold text-white mb-2">{service.serviceName}</h3>
                {service.description && (
                  <p className="text-white/80 text-sm mb-4">{service.description}</p>
                )}
                <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  <span>Learn More</span>
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
