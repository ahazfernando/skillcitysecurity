"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Skill City Group transformed our entire leadership team. The impact on our organizational culture has been remarkable and continues to drive results.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp Industries",
    rating: 5,
    image: null,
  },
  {
    quote: "The training programs are world-class. Our team's productivity increased by 40% within six months of completing the program.",
    author: "Michael Chen",
    role: "HR Director",
    company: "Global Finance Ltd",
    rating: 5,
    image: null,
  },
  {
    quote: "What sets them apart is their genuine commitment to our success. They're partners, not just service providers. Highly recommended!",
    author: "Amanda Williams",
    role: "COO",
    company: "Innovation Labs",
    rating: 5,
    image: null,
  },
  {
    quote: "The strategic consulting services helped us navigate a complex digital transformation with confidence and clarity. Outstanding results.",
    author: "David Park",
    role: "CTO",
    company: "NextGen Solutions",
    rating: 5,
    image: null,
  },
];

const logos = ["TechCorp", "GlobalFinance", "InnoLabs", "NextGen", "Apex", "Vertex"];

export const TestimonialsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/5 blur-3xl" />
      
      <div className="max-w-content relative z-10">
        {/* Header */}
        <div className={cn(
          "text-center mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Testimonials</span>
            <div className="h-px w-12 bg-accent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className={cn(
          "max-w-5xl mx-auto transition-all duration-700 delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative bg-card rounded-[2.5rem] border border-border/50 shadow-2xl p-10 md:p-16 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl" />
            
            {/* Quote icon */}
            <Quote className="absolute top-10 left-10 w-16 h-16 text-accent/10" />
            
            {/* Content */}
            <div className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display text-foreground leading-[1.4] mb-12 transition-all duration-500">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg">
                    {testimonials[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl text-foreground">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  {/* Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          index === currentIndex 
                            ? "w-8 bg-accent" 
                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        )}
                      />
                    ))}
                  </div>
                  
                  {/* Arrows */}
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-xl border border-border bg-background flex items-center justify-center hover:bg-muted hover:border-accent/30 transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-xl border border-border bg-background flex items-center justify-center hover:bg-muted hover:border-accent/30 transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className={cn(
          "mt-24 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-center text-muted-foreground text-sm mb-10">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {logos.map((company, index) => (
              <div 
                key={index} 
                className="text-2xl font-display font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-300 cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
