"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { ArrowRight, TrendingUp, Shield, Target } from "lucide-react";

export const WhoWeAreSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const stats = [
    { value: "15+", label: "Years Experience", icon: TrendingUp },
    { value: "75+", label: "Team Members", icon: Shield },
    { value: "5000+", label: "Projects Done", icon: Target },
  ];

  const logos = [
    { 
      src: "/entity/SkillCityFacilitySolutions(D1V1C1).png", 
      alt: "Skill City Facility Solutions",
      href: "/services/cleaning"
    },
    { 
      src: "/entity/SkillCityFacilitySolutions(D1V2C1).png", 
      alt: "Skill City Facility Solutions",
      href: "/services/cleaning"
    },
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-white relative overflow-hidden">
      
      <div className="max-w-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image with floating elements */}
          <div className={cn(
            "relative transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            {/* Main image */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-accent/30 to-primary/30 rounded-[2.5rem] blur-2xl opacity-40" />
              
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/50">
                <img 
                  src="/home/skillcityheader(D1V1C3).jpg" 
                  alt="Facility Solutions and Recruitment Services"
                  className="w-full h-auto object-cover max-h-[350px]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/10" />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 left-6 bg-primary text-primary-foreground rounded-2xl shadow-2xl p-5 animate-float" style={{ animationDelay: '-2s' }}>
                <div className="text-4xl font-display font-bold">15+</div>
                <div className="text-sm text-primary-foreground/80 mt-1">Years of Excellence</div>
              </div>
            </div>
            
            {/* Stats row below image */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="group p-5 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Content */}
          <div className={cn(
            "transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            {/* Section label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">Who We Are</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-[1.1] mb-8">
              Your Recruitment
              <span className="block mt-2 text-gradient">and Facility Solutions Partner</span>
            </h2>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We connect exceptional talent with outstanding opportunities while providing 
              comprehensive facility management solutions.
            </p>
            
            {/* Logos */}
            <div className="flex items-center gap-6 mb-10">
              {logos.map((logo, index) => (
                <Link 
                  key={index}
                  href={logo.href}
                  className="group transition-all duration-300 hover:opacity-80"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="h-16 w-auto object-contain"
                  />
                </Link>
              ))}
            </div>
            
            {/* CTA */}
            <Button variant="gradient" size="lg" asChild className="h-12 rounded-[16px]">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
