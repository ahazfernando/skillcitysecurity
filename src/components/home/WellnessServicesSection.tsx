"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Couples Therapy",
    description: "Strengthen your relationship and communication.",
    ageRange: "19-60",
    category: "Family",
    categoryColor: "bg-green-500",
    topBgColor: "bg-green-50 dark:bg-green-950/20",
    image: "/placeholder.svg", // Replace with actual image
  },
  {
    id: 2,
    title: "Anger Management",
    description: "Improve communication, and deepen your connection.",
    ageRange: null,
    categories: ["Person", "Group"],
    categoryColor: "bg-orange-400",
    topBgColor: "bg-amber-50 dark:bg-amber-950/20",
    image: "/placeholder.svg", // Replace with actual image
  },
  {
    id: 3,
    title: "Teenage Sessions",
    description: "Support, and guide you toward a brighter tomorrow.",
    ageRange: "15-25",
    category: "Teens",
    categoryColor: "bg-orange-400",
    topBgColor: "bg-amber-50 dark:bg-amber-950/20",
    image: "/placeholder.svg", // Replace with actual image
  },
  {
    id: 4,
    title: "Addiction Therapy",
    description: "Confidential space for self-reflection and growth.",
    ageRange: "18-80",
    category: "Private",
    categoryColor: "bg-orange-400",
    topBgColor: "bg-amber-50 dark:bg-amber-950/20",
    image: "/placeholder.svg", // Replace with actual image
  },
];

export const WellnessServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-content">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left: Title and Subtitle */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-4">
              Your Path to Wellness
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore your inner world and gain insights.
            </p>
          </div>

          {/* Right: Description and Button */}
          <div className="flex flex-col justify-center">
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              We believe in the transformative power of therapy. Our compassionate team of experienced therapists is here to guide you on your journey toward healing, growth, and self-discovery.
            </p>
            <Button size="lg" className="w-fit bg-foreground text-background hover:bg-foreground/90">
              Book Appointment
            </Button>
          </div>
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
                  {service.ageRange && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-card/80 text-foreground">
                      {service.ageRange}
                    </span>
                  )}
                  {service.categories ? (
                    service.categories.map((cat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className={cn("w-2 h-2 rounded-full", service.categoryColor)} />
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-card/80 text-foreground">
                          {cat}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className={cn("w-2 h-2 rounded-full", service.categoryColor)} />
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-card/80 text-foreground">
                        {service.category}
                      </span>
                    </div>
                  )}
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
                  className="w-full justify-between group-hover:bg-accent/10"
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
