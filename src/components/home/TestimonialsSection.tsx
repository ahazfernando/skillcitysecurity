import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Skill City Group transformed our entire leadership team. The impact on our organizational culture has been remarkable.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp Industries",
    company: "TechCorp Industries",
  },
  {
    quote: "The training programs are world-class. Our team's productivity increased by 40% within six months of completing the program.",
    author: "Michael Chen",
    role: "HR Director, Global Finance Ltd",
    company: "Global Finance Ltd",
  },
  {
    quote: "What sets them apart is their genuine commitment to our success. They're partners, not just service providers.",
    author: "Amanda Williams",
    role: "COO, Innovation Labs",
    company: "Innovation Labs",
  },
  {
    quote: "The strategic consulting services helped us navigate a complex digital transformation with confidence and clarity.",
    author: "David Park",
    role: "CTO, NextGen Solutions",
    company: "NextGen Solutions",
  },
];

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
    <section ref={sectionRef} className="py-32 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
      
      <div className="max-w-content relative z-10">
        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            What They Say
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Trusted by Leaders
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className={cn(
          "max-w-4xl mx-auto transition-all duration-700 delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative">
            {/* Quote icon */}
            <Quote className="absolute -top-4 left-0 w-12 h-12 text-accent/20" />
            
            {/* Testimonial content */}
            <div className="pt-8 px-4 md:px-12">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display text-foreground leading-[1.4] mb-8 transition-all duration-500">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentIndex 
                        ? "w-8 bg-accent" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className={cn(
          "mt-24 pt-12 border-t border-border transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {["TechCorp", "GlobalFinance", "InnoLabs", "NextGen", "Apex", "Vertex"].map((company, index) => (
              <div key={index} className="text-xl font-display font-bold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
