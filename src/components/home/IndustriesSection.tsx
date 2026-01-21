"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Store, 
  Home, 
  Factory, 
  Leaf, 
  Building2, 
  Heart,
  ArrowRight 
} from "lucide-react";

const industries = [
  {
    name: "Commercial / Retail",
    icon: Store,
    description: "Comprehensive security solutions for retail stores, shopping centers, and commercial establishments.",
  },
  {
    name: "Residential",
    icon: Home,
    description: "Residential security services to protect homes, apartments, and residential communities.",
  },
  {
    name: "Industrial",
    icon: Factory,
    description: "Specialized security services for warehouses, manufacturing facilities, and industrial sites.",
  },
  {
    name: "Agriculture / Renewables",
    icon: Leaf,
    description: "Security solutions for farms, agricultural facilities, and renewable energy installations.",
  },
  {
    name: "Government / Health / Education",
    icon: Building2,
    description: "Professional security services for government buildings, hospitals, schools, and universities.",
  },
  {
    name: "Aged Care, Social Welfare & Community Services",
    icon: Heart,
    description: "Compassionate security services for aged care facilities, community centers, and social welfare organizations.",
  },
];

export const IndustriesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Industries We Serve
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            We provide tailored security solutions across diverse industries, ensuring protection and peace of mind.
          </p>
        </div>

        {/* Industries Grid - 12 column layout */}
        <div className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className={cn(
                  "group relative overflow-hidden border-0 hover:shadow-lg transition-all duration-300",
                  "bg-white dark:bg-card flex flex-col items-center text-center"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 w-full flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center group-hover:bg-orange-50 group-hover:scale-110 group-hover:border-orange-400 transition-all duration-300 shadow-sm">
                      <Icon className="w-12 h-12 text-orange-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full">
                    <h3 className="text-sm font-display font-semibold text-foreground leading-tight">
                      {industry.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className={cn(
          "text-center transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <Link href="/services" className="flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
