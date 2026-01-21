"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Quote, Shield, Eye, Lock } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "24/7 Protection & Vigilance",
    description: "We provide round-the-clock security services to protect your people, property, and assets. Our trained security professionals are always vigilant and ready to respond to any situation.",
    icon: Shield,
  },
  {
    number: "02",
    title: "Comprehensive Security Solutions",
    description: "We don't just provide guards - we deliver end-to-end security solutions including access control, surveillance, risk assessment, and emergency response planning tailored to your needs.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Trusted Security Partnership",
    description: "We're not here to sell and disappear. We walk with you as a trusted security partner, building lasting relationships through proven expertise and unwavering commitment to your safety.",
    icon: Lock,
  },
];

export const WhyWeExistSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-orange-400/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />
      
      <div className="max-w-content relative z-10">
        {/* Header */}
        <div className={cn(
          "text-center max-w-4xl mx-auto mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-orange-300" />
            <span className="text-orange-300 font-semibold text-sm tracking-widest uppercase">Why We Exist</span>
            <div className="h-px w-12 bg-orange-300" />
          </div>
          
          {/* Big Quote */}
          <div className="relative">
            <Quote className="absolute -top-8 -left-4 md:left-12 w-20 h-20 text-orange-300/30" />
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1]">
              We don&apos;t just protect.
              <span className="block mt-4 bg-gradient-to-r from-orange-300 via-orange-200 to-white bg-clip-text text-transparent">
                We secure your future.
              </span>
            </h2>
          </div>
        </div>

        {/* Reason cards */}
        <div className={cn(
          "grid md:grid-cols-3 gap-8 mb-20 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Number badge */}
                <div className="absolute -top-4 left-8 px-4 py-2 rounded-full bg-orange-400 text-white font-display font-bold text-sm">
                  {reason.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-orange-400/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-orange-300" />
                </div>
                
                {/* Content */}
                <h4 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-orange-300 transition-colors">
                  {reason.title}
                </h4>
                <p className="text-white/60 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vision statement */}
        <div className={cn(
          "text-center transition-all duration-700 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-400/20 text-orange-300 font-semibold text-sm mb-10 backdrop-blur-sm border border-orange-300/30">
            <div className="w-2 h-2 rounded-full bg-orange-300 animate-pulse" />
            Our Vision
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display text-white/80 italic leading-relaxed max-w-4xl mx-auto">
            &ldquo;To provide exceptional security services that protect businesses, communities, and individuals 
            while delivering comprehensive security solutions that ensure peace of mind and operational continuity.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
};
