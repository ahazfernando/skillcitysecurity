"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Leaf, LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface BehindTheHomeSectionProps {
  sectionLabel?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  stats: Stat[];
  secondaryDescription?: string;
  ctaText?: string;
  ctaLink?: string;
  image: string;
  imageAlt: string;
  mirrorImage?: boolean;
  accentColor?: "accent" | "green-600" | "blue-600" | "custom-blue";
}

export function BehindTheHomeSection({
  sectionLabel = "What we do",
  title,
  titleHighlight,
  description,
  stats,
  secondaryDescription,
  ctaText = "Get Started",
  ctaLink = "#contact",
  image,
  imageAlt,
  mirrorImage = false,
  accentColor = "accent",
}: BehindTheHomeSectionProps) {
  const accentTextClasses = {
    "accent": "text-accent",
    "green-600": "text-green-600",
    "blue-600": "text-blue-600",
    "custom-blue": "",
  };

  const customBlue = "#36A1D3";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-center rounded-3xl overflow-hidden">
          {/* Left Content - White Background */}
          <div className="bg-white px-8 lg:px-12 py-12 lg:py-24 relative z-10">
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-6">
              <Leaf 
                className={cn("w-5 h-5", accentColor !== "custom-blue" && accentTextClasses[accentColor])}
                style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
              />
              <span className="text-sm font-semibold tracking-wider text-gray-500">
                {sectionLabel}
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-gray-900 mb-6 leading-tight max-w-2xl">
              {title}{" "}
              {titleHighlight && (
                <span 
                  className={accentColor !== "custom-blue" ? accentTextClasses[accentColor] : ""}
                  style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
                >
                  {titleHighlight}
                </span>
              )}{" "}
              Stories.
            </h2>
            
            {/* Description */}
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            {/* Statistics */}
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <Icon 
                      className={cn("w-8 h-8", accentColor !== "custom-blue" && accentTextClasses[accentColor])}
                      style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
                    />
                    <div>
                      <div 
                        className={cn("text-4xl font-display font-bold mb-1", accentColor !== "custom-blue" && accentTextClasses[accentColor])}
                        style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
                      >
                        {stat.value}
                      </div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Secondary Paragraph */}
            {secondaryDescription && (
              <p className="text-base text-gray-600 mb-8">
                {secondaryDescription}
              </p>
            )}
            
            {/* CTA Button */}
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white"
              asChild
            >
              <Link href={ctaLink} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight 
                  className={cn("w-4 h-4", accentColor !== "custom-blue" && accentTextClasses[accentColor])}
                  style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
                />
              </Link>
            </Button>
          </div>
          
          {/* Right Image with Fade Effect */}
          <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-t-[24px] rounded-r-[24px] rounded-b-[24px]">
            {/* Image */}
            <div className={cn("absolute inset-0", mirrorImage && "scale-x-[-1]")}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover rounded-t-[24px] rounded-r-[24px] rounded-b-[24px]"
              />
            </div>
            
            {/* Fade gradient from left (white) to right (transparent) */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent pointer-events-none rounded-t-[24px] rounded-r-[24px] rounded-b-[24px]" />
          </div>
        </div>
      </div>
    </section>
  );
}