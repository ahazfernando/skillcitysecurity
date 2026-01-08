"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Building2, GraduationCap, Lightbulb, Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const companies = [
  {
    name: "Skill Academy",
    focus: "Professional Training",
    description: "World-class training programs for professionals at every career stage, designed to accelerate growth.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Future Leaders",
    focus: "Leadership Development",
    description: "Cultivating the next generation of visionary leaders and change-makers through immersive programs.",
    icon: Users,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Innovation Hub",
    focus: "Digital Transformation",
    description: "Driving organizational change through cutting-edge technology and innovative thinking strategies.",
    icon: Lightbulb,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Corporate Solutions",
    focus: "Enterprise Consulting",
    description: "Strategic consulting for large-scale organizational transformation and sustainable growth.",
    icon: Building2,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export const CompaniesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className={cn(
          "max-w-content text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Our Family</span>
            <div className="h-px w-12 bg-accent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
            A Group of Companies
            <span className="block mt-2 text-gradient">United by Purpose</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each company in our group brings unique expertise, 
            all working together to transform human potential.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className={cn(
          "max-w-content flex justify-end gap-3 mb-8 transition-all duration-700 delay-100",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-muted hover:border-accent/30 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-muted hover:border-accent/30 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Horizontal Scroll Companies */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-[calc((100vw-1280px)/2+1.5rem)] pb-8 snap-x snap-mandatory"
        >
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <div
                key={index}
                className={cn(
                  "group flex-shrink-0 w-80 md:w-[380px] snap-start transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-full p-8 rounded-3xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative">
                  {/* Gradient background on hover */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                    company.gradient
                  )} />
                  
                  {/* Icon */}
                  <div className={cn(
                    "relative w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg",
                    company.gradient
                  )}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <span className="text-accent text-sm font-semibold">{company.focus}</span>
                    <h3 className="text-2xl font-display font-bold text-foreground mt-2 mb-4 group-hover:text-accent transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {company.description}
                    </p>
                    
                    {/* Arrow indicator */}
                    <div className="flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
