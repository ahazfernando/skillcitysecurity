"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Recruitment Services",
    description: "Connect exceptional talent with outstanding opportunities across all industries.",
    category: "Talent",
    categoryColor: "bg-orange-500",
    topBgColor: "bg-orange-50 dark:bg-orange-950/20",
    image: "/servicestock/Recruitment.png",
  },
  {
    id: 2,
    title: "Construction Experts",
    description: "Comprehensive construction and facility management services for your projects.",
    category: "Construction",
    categoryColor: "bg-orange-500",
    topBgColor: "bg-orange-50 dark:bg-orange-950/20",
    image: "/servicestock/Construction.png",
  },
  {
    id: 3,
    title: "Cleaning Services",
    description: "Professional cleaning and maintenance solutions to keep your facilities spotless.",
    category: "Facility",
    categoryColor: "bg-orange-500",
    topBgColor: "bg-orange-50 dark:bg-orange-950/20",
    image: "/servicestock/Cleaning.jpeg",
  },
  {
    id: 4,
    title: "Culinary Services",
    description: "Expert chefs and culinary professionals for your hospitality and catering needs.",
    category: "Culinary",
    categoryColor: "bg-orange-500",
    topBgColor: "bg-orange-50 dark:bg-orange-950/20",
    image: "/servicestock/Chefs.png",
  },
];

export const WellnessServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-content">
        {/* Header Section */}
        <div className="mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-4">
            Your Path to a Brighter Living accross Australia
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover comprehensive recruitment and facility solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Top Section with Colored Background */}
              <div className={cn("p-6", service.topBgColor)}>
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className={cn("w-2 h-2 rounded-full", service.categoryColor)} />
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-card/80 text-foreground">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Section with Image */}
              <div className="relative flex-1 min-h-[200px] bg-muted overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Read More Button */}
              <div className="p-4 bg-card border-t border-border">
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-orange-50"
                  asChild
                >
                  <Link href={`/services/${service.id}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
