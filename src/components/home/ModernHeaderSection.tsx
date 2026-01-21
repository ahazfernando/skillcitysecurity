"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ModernHeaderSection = () => {
  return (
    <section className="relative h-[110vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/securitylogo/SkillSec.png"
          alt="Skill City Header"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-end justify-start pb-16 lg:pb-24">
        <div className="w-full">
          <div className="flex flex-col items-start text-left px-10 lg:px-16 xl:px-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <span className="text-white/90 font-semibold text-sm tracking-wider uppercase">
                Welcome to Skill City Security
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-tight mb-6 text-white">
              <span className="font-medium italic">Protecting Your</span>
              <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                <span className="font-medium italic">Business</span> & Peace of Mind
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
              Professional security services designed to safeguard your people, property, and assets. Trust our experienced team to provide comprehensive security.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-start">
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <Link href="/services/security">
                  Our Security Services
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50"
                asChild
              >
                <Link href="/contact">
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
