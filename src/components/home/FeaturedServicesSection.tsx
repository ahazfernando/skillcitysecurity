"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import teamMeeting from "@/assets/team-meeting.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const FeaturedServicesSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* LEFT COLUMN - Stacked Images */}
          <div className="space-y-4 order-1">
            {/* Top Image with Overlay Card */}
            <div className="relative">
              <Image 
                src={teamMeeting} 
                alt="Professional recruitment services" 
                className="w-full h-[280px] lg:h-[320px] object-cover rounded-2xl"
                width={600}
                height={320}
              />
              {/* Overlay Card */}
              <div 
                className="absolute top-4 right-4 w-[240px] lg:w-[280px] rounded-xl p-4 shadow-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.97)' }}
              >
                {/* Tag */}
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                  style={{ backgroundColor: '#e8e0d5', color: '#6b5b4f' }}
                >
                  Professional Staffing
                </span>
                {/* Description */}
                <p 
                  className="text-xs leading-relaxed mb-3"
                  style={{ color: '#6b6b6b' }}
                >
                  We connect you with vetted cleaning crews, certified plumbers, and trained security 
                  personnel for reliable service delivery.
                </p>
                {/* Button */}
                <Button 
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs px-4 h-8 border-gray-300 hover:bg-gray-50"
                  style={{ color: '#4a4a4a' }}
                >
                  View full details
                </Button>
              </div>
            </div>

            {/* Bottom Image */}
            <Image 
              src={heroBg} 
              alt="Expert cleaning and maintenance" 
              className="w-full h-[180px] lg:h-[200px] object-cover rounded-2xl"
              width={600}
              height={200}
            />
          </div>

          {/* RIGHT COLUMN - Content */}
          <div className="order-2 lg:pt-8">
            {/* Main Heading */}
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-5 leading-tight"
              style={{ color: '#1a1a1a' }}
            >
              Your trusted partner for essential services
            </h2>

            {/* Description */}
            <p 
              className="text-base lg:text-lg mb-8 leading-relaxed"
              style={{ color: '#6b6b6b' }}
            >
              Whether you need reliable cleaning crews, certified plumbers, or professional security personnel — 
              we provide comprehensive staffing solutions tailored to your needs. Our vetted professionals ensure 
              quality service delivery every time.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#6b8e5a' }} />
                <p style={{ color: '#3d3d3d' }}>
                  Professional cleaning staff, trained in commercial and residential standards
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#6b8e5a' }} />
                <p style={{ color: '#3d3d3d' }}>
                  Licensed plumbers for installations, repairs, and ongoing maintenance
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#6b8e5a' }} />
                <p style={{ color: '#3d3d3d' }}>
                  Background-checked security personnel for properties and events
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;
