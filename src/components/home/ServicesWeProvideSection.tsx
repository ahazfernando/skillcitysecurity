"use client";

import Link from "next/link";
import { Shield, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Manned Guarding",
    description: "Professional, licensed security officers providing on-site protection, access control, and visible security presence for your locations.",
  },
  {
    icon: Calendar,
    title: "Event Security",
    description: "Comprehensive security solutions for events, gatherings, and special occasions to ensure safety and smooth operations.",
  },
  {
    icon: CheckCircle2,
    title: "24/7 Surveillance",
    description: "Continuous surveillance and monitoring solutions to secure your facilities with modern technology and always-on oversight.",
  },
];

export const ServicesWeProvideSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-content">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Section - Heading */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
              <span className="text-orange-500">Complete</span>
              <br />
              <span className="text-orange-500">Security</span>
              <br />
              <span className="text-gray-700">Made for You</span>
            </h2>
            <Link
              href="/services/security"
              className="inline-flex items-center justify-center text-orange-500 hover:text-orange-600 transition-colors"
            >
              <ArrowRight className="w-7 h-7" />
            </Link>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="h-64 w-px bg-gray-200"></div>
          </div>

          {/* Right Section - Service Cards */}
          <div className="lg:col-span-6">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex flex-col">
                    {/* Icon without background */}
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-orange-500" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-display font-semibold text-orange-500 mb-2">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
