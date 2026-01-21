"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const securityServices = [
  {
    id: 1,
    title: "Security Guard Services",
    description: "Professional trained security personnel for your premises, events, and facilities.",
    category: "Protection",
    categoryColor: "#f97316",
    topBgColor: "bg-orange-50",
    image: "/servicessecurity/28f0dd7c26a20f5a0647f1070f5af947.jpg",
  },
  {
    id: 2,
    title: "Event Security Management",
    description: "Comprehensive security solutions for events, gatherings, and special occasions.",
    category: "Events",
    categoryColor: "#f97316",
    topBgColor: "bg-orange-50",
    image: "/servicessecurity/abd95df86f099e14285d3ff3fd1251e4.jpg",
  },
  {
    id: 3,
    title: "24/7 Surveillance",
    description: "Advanced surveillance and monitoring solutions to secure your facilities day and night.",
    category: "Technology",
    categoryColor: "#f97316",
    topBgColor: "bg-orange-50",
    image: "/servicessecurity/27c74718ca7236e2447a37560fb43a5e.jpg",
  },
  {
    id: 4,
    title: "Security Assessments",
    description: "Thorough evaluation and recommendations for your security needs and vulnerabilities.",
    category: "Consulting",
    categoryColor: "#f97316",
    topBgColor: "bg-orange-50",
    image: "/servicessecurity/3c0b5dc4a3e34a3efa83a8dcfad4cac2.jpg",
  },
];

export const SecurityServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-content">
        {/* Header Section */}
        <div className="mb-16 max-w-12xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-4">
            Comprehensive Security Solutions <br />Across Australia
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our range of professional security services designed to protect your business, employees, and assets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Top Section with Colored Background */}
              <div className={cn("p-6", service.topBgColor)}>
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: service.categoryColor }}
                    />
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-foreground">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Section with Image */}
              <div className="relative flex-1 min-h-[200px] bg-muted overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};