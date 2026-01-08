"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ModernHeaderSection = () => {
  return (
    <section className="relative h-[110vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/home/skillcityheader(d1v1c2).jpg"
          alt="Skill City Header"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-start justify-center pt-32">
        <div className="max-w-content w-full">
          <div className="flex flex-col items-center text-center px-4 lg:px-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <span className="text-white/90 font-semibold text-sm tracking-wider uppercase">
                Welcome to Skill City
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold leading-tight mb-6 text-white">
              Empowering Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Professional Journey
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
              Discover expert solutions and comprehensive services designed to elevate your career and transform your professional future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50"
                asChild
              >
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
