"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceHeroSectionProps {
  backgroundImage: string;
  welcomeText?: string;
  welcomeHighlight?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  logoImage?: string;
  logoAlt?: string;
  whiteGradientFromBottom?: boolean;
}

export function ServiceHeroSection({
  backgroundImage,
  welcomeText,
  welcomeHighlight,
  title,
  titleHighlight,
  description,
  ctaText = "Book a Meeting",
  ctaLink = "/contact",
  logoImage,
  logoAlt = "Service Logo",
  whiteGradientFromBottom = false,
}: ServiceHeroSectionProps) {
  const { ref: heroRef } = useScrollReveal();

  return (
    <section ref={heroRef} className="relative overflow-hidden h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* White Gradient from Bottom */}
      {whiteGradientFromBottom && (
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
      )}
      
      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-end pb-8 pt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Left Content */}
            <div>
              {welcomeText && (
                <p className="text-sm mb-4" style={{ color: '#040D11' }}>
                  {welcomeText}{" "}
                  {welcomeHighlight && (
                    <span className="font-medium italic" style={{ color: '#040D11' }}>{welcomeHighlight}</span>
                  )}
                </p>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight" style={{ color: '#040D11' }}>
                {title}{" "}
                {titleHighlight && (
                  <span className="font-medium italic" style={{ color: '#040D11' }}>{titleHighlight}</span>
                )}
              </h1>
              <p className="font-medium italic mb-8 leading-relaxed" style={{ color: '#040D11' }}>
                {description}
              </p>
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold h-10 rounded-[14px]"
                asChild
              >
                <Link href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo in Bottom Right */}
      {logoImage && (
        <div className="absolute bottom-8 right-8 z-20">
          <Image
            src={logoImage}
            alt={logoAlt}
            width={150}
            height={60}
            className="h-auto object-contain"
          />
        </div>
      )}
    </section>
  );
}