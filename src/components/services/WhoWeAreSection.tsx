"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface WhoWeAreSectionProps {
  image: string;
  imageAlt: string;
  categoryTitle?: string;
  categoryDescription?: string;
  stats?: Stat[];
  sectionLabel?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  featureTitle?: string;
  featureDescription?: string;
  featureIcon?: LucideIcon;
  ctaText?: string;
  ctaLink?: string;
  accentColor?: "accent" | "green-600" | "blue-600" | "custom-blue" | "orange";
}

export function WhoWeAreSection({
  image,
  imageAlt,
  categoryTitle,
  categoryDescription,
  stats,
  sectionLabel = "Who We Are?",
  title,
  titleHighlight,
  description,
  featureTitle,
  featureDescription,
  featureIcon: FeatureIcon,
  ctaText = "Contact us today",
  ctaLink = "/contact",
  accentColor = "accent",
}: WhoWeAreSectionProps) {
  const { ref: whoWeAreRef } = useScrollReveal();

  const accentBgClasses = {
    "accent": "bg-accent",
    "green-600": "bg-green-600",
    "blue-600": "bg-blue-600",
    "custom-blue": "",
    "orange": "bg-orange-500",
  };

  const accentTextClasses = {
    "accent": "text-accent",
    "green-600": "text-green-600",
    "blue-600": "text-blue-600",
    "custom-blue": "",
    "orange": "text-orange-500",
  };

  const accentBgLightClasses = {
    "accent": "bg-accent/10",
    "green-600": "bg-green-600/10",
    "blue-600": "bg-blue-600/10",
    "custom-blue": "",
    "orange": "bg-orange-50",
  };

  const customBlue = "#36A1D3";

  return (
    <section ref={whoWeAreRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            {/* Image Card */}
            <div className="relative mb-8 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
                <div 
                  className={cn("absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center", accentColor !== "custom-blue" && accentBgClasses[accentColor])}
                  style={accentColor === "custom-blue" ? { backgroundColor: customBlue } : undefined}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            {categoryTitle && (
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{categoryTitle}</h3>
            )}
            {categoryDescription && (
              <p className="text-gray-600 mb-8">
                {categoryDescription}
              </p>
            )}

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={cn("p-4 rounded-lg text-center", accentColor !== "custom-blue" && accentBgLightClasses[accentColor])}
                    style={accentColor === "custom-blue" ? { backgroundColor: `${customBlue}1A` } : undefined}
                  >
                    <div 
                      className={cn("text-2xl font-bold mb-1", accentColor !== "custom-blue" && accentTextClasses[accentColor])}
                      style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side */}
          <div>
            <p 
              className={cn("font-semibold text-sm mb-4", accentColor !== "custom-blue" && accentTextClasses[accentColor])}
              style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
            >
              {sectionLabel}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              {title}{" "}
              {titleHighlight && (
                <span 
                  className={accentColor !== "custom-blue" ? accentTextClasses[accentColor] : ""}
                  style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
                >
                  {titleHighlight}
                </span>
              )}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Feature Card */}
            {featureTitle && featureDescription && (
              <div 
                className={cn("p-6 rounded-lg mb-8", accentColor !== "custom-blue" && accentBgLightClasses[accentColor])}
                style={accentColor === "custom-blue" ? { backgroundColor: `${customBlue}1A` } : undefined}
              >
                <div className="flex items-start gap-4">
                  {FeatureIcon && (
                    <div 
                      className={cn("w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0", accentColor !== "custom-blue" && accentBgClasses[accentColor])}
                      style={accentColor === "custom-blue" ? { backgroundColor: customBlue } : undefined}
                    >
                      <FeatureIcon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{featureTitle}</h4>
                    <p className="text-gray-600 text-sm">
                      {featureDescription}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white h-10 rounded-[16px]" asChild>
              <Link href={ctaLink}>
                {ctaText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}