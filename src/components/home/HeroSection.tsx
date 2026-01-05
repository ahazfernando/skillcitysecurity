import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "Building Tomorrow's",
    highlight: "Business Leaders",
    subtitle: "Strategic consulting and skill development for enterprises ready to scale.",
  },
  {
    image: heroSlide2,
    title: "Global Reach,",
    highlight: "Local Expertise",
    subtitle: "Operating across 50+ countries with deep market understanding.",
  },
  {
    image: heroSlide3,
    title: "Data-Driven",
    highlight: "Decision Making",
    subtitle: "Transform insights into actionable strategies for sustainable growth.",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`${slide.title} ${slide.highlight}`}
              className="w-full h-full object-cover scale-105 animate-[zoom_20s_ease-in-out_infinite]"
            />
          </div>
        ))}
        
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        
        {/* Mesh overlay for depth */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        
        {/* Animated particles/dots overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-white animate-pulse delay-300" />
          <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 rounded-full bg-accent animate-pulse delay-500" />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-white animate-pulse delay-700" />
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-20 pb-32">
        <div className="max-w-content">
          <div className="max-w-4xl">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-white/90 text-sm font-medium">Skill City Group</span>
            </div>

            {/* Dynamic Headline */}
            <div className="relative overflow-hidden mb-6">
              {slides.map((slide, index) => (
                <h1
                  key={index}
                  className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 absolute top-0 translate-y-8"
                  }`}
                >
                  <span className="text-white">{slide.title}</span>
                  <br />
                  <span className="text-accent">{slide.highlight}</span>
                </h1>
              ))}
            </div>

            {/* Dynamic Subtitle */}
            <div className="relative h-16 mb-10">
              {slides.map((slide, index) => (
                <p
                  key={index}
                  className={`text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 absolute top-0 translate-y-4"
                  }`}
                >
                  {slide.subtitle}
                </p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
                asChild
              >
                <Link to="/services">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              {[
                { value: "50+", label: "Countries" },
                { value: "24K+", label: "Clients" },
                { value: "98%", label: "Satisfaction" },
                { value: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 h-2 bg-accent rounded-full"
                    : "w-2 h-2 bg-white/40 rounded-full hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
