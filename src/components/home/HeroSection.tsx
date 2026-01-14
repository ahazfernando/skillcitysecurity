"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Building2 } from "lucide-react";

export const HeroSection = () => {
  const stats = [
    { 
      value: "10K+", 
      label: "Successful placements",
      icon: Users
    },
    { 
      value: "500+", 
      label: "Facility solutions delivered",
      icon: Building2
    },
  ];

  return (
    <section className="relative min-h-[120vh] flex items-center pt-32 pb-32 overflow-hidden bg-white">
      <div className="max-w-content relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1 animate-fade-in flex-1">
            <img 
              src="/servicestock/Recruitment.png" 
              alt="Recruitment and Facility Solutions"
              className="w-full h-full object-cover rounded-[32px]"
              style={{ minHeight: '100%', height: '100%' }}
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 flex-1 flex flex-col justify-center">
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-[1.15] mb-8 animate-fade-in">
              Why being Business
              <span className="block mt-1">Partners With us matters?</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md animate-fade-in" style={{ animationDelay: '100ms' }}>
              We connect exceptional talent with outstanding opportunities while providing 
              comprehensive facility management solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-20 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Button 
                variant="default" 
                size="lg" 
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 rounded-[16px] h-12 px-6"
              >
                <Link href="/contact">
                  Book a Consultation
                </Link>
              </Button>
            </div>
            
            {/* Stats Row */}
            <div className="flex items-start gap-12 pt-8 border-t border-foreground/10 animate-fade-in" style={{ animationDelay: '300ms' }}>
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
