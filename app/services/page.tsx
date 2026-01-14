"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Building2, Users, Wrench, Shield, CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "facility-solutions",
    title: "Facility Solutions",
    subtitle: "Comprehensive Facility Management",
    description: "Professional facility management services designed to maintain and enhance your business spaces. From maintenance to property management, we ensure your facilities operate at peak efficiency and provide safe, comfortable environments for your operations.",
    icon: Building2,
    image: "/services/interiorhouse(D1V1).jpg",
    logo: "/entity/SkillCityFacilitySolutions(D1V1C1).png",
    features: [
      "Property maintenance and repairs",
      "Cleaning and janitorial services",
      "HVAC and electrical maintenance",
      "Landscaping and groundskeeping",
      "24/7 facility support",
    ],
    benefits: [
      "Improved workplace safety",
      "Extended asset lifespan",
      "Reduced operational costs",
      "Enhanced productivity",
    ],
  },
  {
    id: "recruitment",
    title: "Recruitment",
    subtitle: "Connecting Talent with Opportunity",
    description: "Expert recruitment services that connect exceptional talent with outstanding opportunities across all industries. We specialize in finding the right candidates who not only meet your requirements but also align with your company culture and values.",
    icon: Users,
    image: "/services/recreuitment.jpg",
    logo: "/entity/SkillCityFacilitySolutions(D1V2C1).png",
    features: [
      "Comprehensive candidate sourcing",
      "Skills assessment and screening",
      "Industry-specific recruitment",
      "Temporary and permanent placements",
      "Post-placement support",
    ],
    benefits: [
      "Quality talent acquisition",
      "Reduced time-to-hire",
      "Better cultural fit",
      "Lower turnover rates",
    ],
  },
  {
    id: "professional-plumbing",
    title: "Professional Plumbing",
    subtitle: "Expert Plumbing Solutions",
    description: "Licensed and experienced plumbing services for residential and commercial properties. Our team handles everything from routine maintenance to emergency repairs, ensuring your plumbing systems operate smoothly and efficiently.",
    icon: Wrench,
    image: "/services/plumbingwater.jpg",
    features: [
      "Emergency plumbing repairs",
      "Installation and renovations",
      "Drain cleaning and maintenance",
      "Water heater services",
      "Preventive maintenance programs",
    ],
    benefits: [
      "Fast response times",
      "Licensed professionals",
      "Long-lasting solutions",
      "Preventive maintenance",
    ],
  },
  {
    id: "security-services",
    title: "Security Services",
    subtitle: "Protecting Your People and Assets",
    description: "Comprehensive security solutions tailored to protect your business, employees, and assets. Our professional security services provide peace of mind through trained personnel, advanced monitoring, and strategic security planning.",
    icon: Shield,
    image: "/services/dab71de9b4112fadbb7208c430841d67.jpg",
    features: [
      "Security guard services",
      "Event security management",
      "Access control systems",
      "Security assessments",
      "24/7 monitoring and response",
    ],
    benefits: [
      "Enhanced safety and protection",
      "Deterrent to crime",
      "Professional trained staff",
      "Peace of mind",
    ],
  },
];

export default function Services() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Header Section with Image */}
        <section ref={heroRef} className="relative overflow-hidden">
          {/* Header Image */}
          <div className="w-full h-[60vh] md:h-[70vh] relative">
            {/* Background Image Layer - Flipped */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/header/OurServicesHeader.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: 'scaleX(-1)'
              }}
            />
            {/* White gradient from bottom to blend with section below */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-content w-full relative z-10">
                <div className="max-w-2xl">
                  <span className={cn(
                    "inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    Professional Services for a Brighter Living
                  </span>
                  <h1 className={cn(
                    "text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-blue-900 leading-[1.1] mb-8 transition-all duration-700 delay-100",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <span className="italic">Reliable</span> Services for <span className="italic">Safer Spaces</span> across Australia
                  </h1>
                  <p className={cn(
                    "text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    Discover our comprehensive range of professional services designed to meet all your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="pt-12 pb-24 bg-white -mt-8">
          {services.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </section>

        {/* CTA */}
        <section className="py-24 bg-hero-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
          
          <div className="max-w-content relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help you achieve your goals.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const ServiceBlock = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      id={service.id}
      className={cn(
        "py-12",
        service.id === "facility-solutions" ? "bg-white" : isEven ? "bg-background" : "bg-muted/30"
      )}
    >
      <div className="max-w-content">
        <div className={cn(
          "grid lg:grid-cols-2 gap-16 items-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Content */}
          <div className={isEven ? "lg:order-1" : "lg:order-2"}>
            {/* Logo */}
            {service.logo && (
              <div className="mb-6">
                <Image
                  src={service.logo}
                  alt={`${service.title} logo`}
                  width={200}
                  height={80}
                  className="h-auto object-contain"
                />
              </div>
            )}
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-accent" />
              </div>
              <span className="text-6xl font-display font-bold text-muted-foreground/50">
                0{index + 1}
              </span>
            </div>
            
            <span className="text-accent font-medium">{service.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
              {service.title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {service.description}
            </p>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Learn More
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className={cn(
            "space-y-8",
            isEven ? "lg:order-2" : "lg:order-1"
          )}>
            {/* Features */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                What&apos;s Included
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Benefits */}
            <div className="p-8 rounded-2xl bg-accent/5 border border-accent/10">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Key Benefits
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="text-sm font-medium text-accent">
                    • {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
