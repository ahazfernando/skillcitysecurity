"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users } from "lucide-react";

export const MarketingHeroSection = () => {
  const stats = [
    { 
      value: "500+", 
      label: "Facilities managed",
      icon: Building2
    },
    { 
      value: "10K+", 
      label: "Placements",
      icon: Users
    },
  ];

  return (
    <section className="relative flex items-center py-12 overflow-hidden bg-white">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-white opacity-60" />
      <div className="absolute top-40 left-40 w-8 h-8 rounded-full bg-white opacity-40" />
      
      <div className="max-w-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1 animate-fade-in">
            <img 
              src="/home/ConstructionHat.png" 
              alt="Professional construction safety helmet"
              className="w-full h-auto object-contain max-w-lg mx-auto lg:mx-0"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-foreground leading-[1.15] mb-6 animate-fade-in">
              Comprehensive Facility
              <span className="block mt-1">Solutions & Recruitment</span>
            </h1>
            
            {/* Description */}
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-md animate-fade-in" style={{ animationDelay: '100ms' }}>
              We provide end-to-end facility management solutions and expert recruitment services to help 
              your business operate efficiently and build exceptional teams.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <Button 
                variant="default" 
                size="lg" 
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
              >
                <Link href="/contact">
                  Let's talk
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="rounded-full px-6 border-foreground/20 hover:bg-foreground/5"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Learn more about us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            {/* Stats Row */}
            <div className="flex items-start gap-12 pt-8 border-t border-foreground/10 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="flex items-start gap-2">
                    <stat.icon className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-tight max-w-[140px]">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
