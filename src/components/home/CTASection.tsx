"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Phone, MessageCircle } from "lucide-react";

export const CTASection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 rounded-2xl bg-white/5 rotate-12 animate-float" />
      <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-xl bg-white/10 -rotate-12 animate-float" style={{ animationDelay: '-5s' }} />
      
      <div className="max-w-content relative z-10">
        <div className={cn(
          "max-w-4xl mx-auto text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-10">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-accent" />
              <div className="absolute inset-0 animate-ping opacity-30">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
            </div>
            <span className="text-white/90 text-sm font-semibold">Let&apos;s Build Your Future Together</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
            Ready to Transform
            <span className="block mt-3 bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
              Your Organization?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/70 mb-14 leading-relaxed max-w-2xl mx-auto">
            Partner with us to unlock potential, drive innovation, and achieve 
            sustainable growth. Let&apos;s create the future together.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
          
          {/* Quick contact options */}
          <div className={cn(
            "flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-white/10 transition-all duration-700 delay-200",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="font-medium">Live Chat Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
