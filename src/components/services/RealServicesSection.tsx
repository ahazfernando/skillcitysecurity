"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface RealServicesSectionProps {
  sectionLabel?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  services: Service[];
  accentColor?: "accent" | "green-600" | "blue-600" | "custom-blue";
}

export function RealServicesSection({
  sectionLabel,
  title,
  description,
  image,
  imageAlt,
  services,
  accentColor = "accent",
}: RealServicesSectionProps) {
  const { ref: servicesRef } = useScrollReveal();

  const accentTextClasses = {
    "accent": "text-accent",
    "green-600": "text-green-600",
    "blue-600": "text-blue-600",
    "custom-blue": "",
  };

  const accentBgClasses = {
    "accent": "bg-accent",
    "green-600": "bg-green-600",
    "blue-600": "bg-blue-600",
    "custom-blue": "",
  };

  const accentBgLightClasses = {
    "accent": "bg-accent/10",
    "green-600": "bg-green-600/10",
    "blue-600": "bg-blue-600/10",
    "custom-blue": "",
  };

  const customBlue = "#36A1D3";

  return (
    <section ref={servicesRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            {sectionLabel && (
              <p className="text-sm text-gray-600 mb-4">
                {sectionLabel}{" "}
                <span 
                  className={cn("font-semibold", accentColor !== "custom-blue" && accentTextClasses[accentColor])}
                  style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
                >
                  Service
                </span>
              </p>
            )}
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className={cn("p-6 rounded-lg", accentColor !== "custom-blue" && accentBgLightClasses[accentColor])}
                  style={accentColor === "custom-blue" ? { backgroundColor: `${customBlue}1A` } : undefined}
                >
                  <div 
                    className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", accentColor !== "custom-blue" && accentBgClasses[accentColor])}
                    style={accentColor === "custom-blue" ? { backgroundColor: customBlue } : undefined}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}