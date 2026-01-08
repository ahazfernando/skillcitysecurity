"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, LineChart, Users, CheckCircle } from "lucide-react";

const services = [
  {
    id: "corporate-training",
    title: "Corporate Training",
    subtitle: "Upskill Your Workforce",
    description: "Customized training programs designed to enhance your team's capabilities and drive organizational performance. We work with you to identify skill gaps and develop targeted solutions.",
    icon: Briefcase,
    features: [
      "Customized curriculum development",
      "Blended learning approaches",
      "Hands-on workshops and simulations",
      "Progress tracking and assessment",
      "Post-training support and coaching",
    ],
    benefits: [
      "Increased productivity",
      "Improved employee retention",
      "Enhanced team collaboration",
      "Measurable ROI",
    ],
  },
  {
    id: "skills-development",
    title: "Skills Development",
    subtitle: "Build Future-Ready Competencies",
    description: "Comprehensive skills certification and development programs that prepare individuals and teams for the challenges of tomorrow. From technical skills to soft skills, we cover it all.",
    icon: GraduationCap,
    features: [
      "Industry-recognized certifications",
      "Career development pathways",
      "Competency-based assessments",
      "Personalized learning plans",
      "Mentorship programs",
    ],
    benefits: [
      "Career advancement",
      "Skill validation",
      "Industry credibility",
      "Competitive advantage",
    ],
  },
  {
    id: "strategic-consulting",
    title: "Strategic Consulting",
    subtitle: "Navigate Change with Confidence",
    description: "Expert guidance to help organizations navigate complex challenges and achieve transformational growth. We partner with you to develop and execute strategies that deliver results.",
    icon: LineChart,
    features: [
      "Organizational assessment",
      "Strategy development",
      "Change management",
      "Digital transformation",
      "Performance optimization",
    ],
    benefits: [
      "Clear strategic direction",
      "Improved efficiency",
      "Sustainable growth",
      "Competitive positioning",
    ],
  },
  {
    id: "leadership-programs",
    title: "Leadership Programs",
    subtitle: "Develop Visionary Leaders",
    description: "Developing the leaders who will shape the future of your organization. Our programs cultivate the skills, mindset, and behaviors that define exceptional leadership.",
    icon: Users,
    features: [
      "Executive coaching",
      "Leadership assessments",
      "Team development workshops",
      "Succession planning",
      "Leadership retreats",
    ],
    benefits: [
      "Stronger leadership pipeline",
      "Improved decision-making",
      "Enhanced team performance",
      "Organizational alignment",
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
                <div className="max-w-3xl">
                  <span className={cn(
                    "inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    Our Services
                  </span>
                  <h1 className={cn(
                    "text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-[1.1] mb-8 transition-all duration-700 delay-100",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <span className="italic">Solutions</span> That
                    <span className="block mt-2 text-foreground"><span className="italic">Drive Results</span> for you</span>
                  </h1>
                  <p className={cn(
                    "text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    From individual skill development to enterprise-wide transformation, 
                    we offer comprehensive solutions designed to unlock potential and 
                    deliver measurable impact.
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
              Let's discuss how our services can help you achieve your goals.
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
        service.id === "corporate-training" ? "bg-white" : isEven ? "bg-background" : "bg-muted/30"
      )}
    >
      <div className="max-w-content">
        <div className={cn(
          "grid lg:grid-cols-2 gap-16 items-start transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Content */}
          <div className={isEven ? "lg:order-1" : "lg:order-2"}>
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

          {/* Features & Benefits */}
          <div className={cn(
            "space-y-8",
            isEven ? "lg:order-2" : "lg:order-1"
          )}>
            {/* Features */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                What's Included
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
