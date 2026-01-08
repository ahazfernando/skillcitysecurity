"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "People First",
    description: "We believe in the inherent potential of every individual. Our programs are designed to unlock that potential.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly evolve our methods and approaches to stay ahead of industry trends and deliver cutting-edge solutions.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We set the highest standards for ourselves and help our clients achieve excellence in everything they do.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in all our interactions.",
  },
];

const milestones = [
  { year: "2010", title: "Founded", description: "Started with a vision to transform skills development" },
  { year: "2013", title: "First 1000", description: "Trained our first 1000 professionals" },
  { year: "2016", title: "Expansion", description: "Expanded to 5 countries across Asia" },
  { year: "2019", title: "Digital Leap", description: "Launched our digital learning platform" },
  { year: "2022", title: "Global Reach", description: "Serving clients in 20+ countries" },
  { year: "2025", title: "The Future", description: "Continuing to innovate and transform" },
];

export default function About() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative overflow-hidden">
          {/* Header Image */}
          <div className="w-full h-[60vh] md:h-[70vh] relative">
            {/* Background Image Layer */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/header/BusinessMeeting.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
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
                    About Us
                  </span>
                  <h1 className={cn(
                    "text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-[1.1] mb-8 transition-all duration-700 delay-100",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <span className="italic">Transforming</span> Potential
                    <span className="block mt-2 text-white"><span className="italic">Into Performance</span></span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-content relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 md:p-12 rounded-3xl bg-muted/30 backdrop-blur-sm border border-border">
                <Eye className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the global leader in human capital transformation, 
                  empowering millions to achieve their full potential and 
                  contribute meaningfully to their organizations and communities.
                </p>
              </div>
              
              <div className="p-8 md:p-12 rounded-3xl bg-muted/30 backdrop-blur-sm border border-border">
                <Target className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To deliver world-class training, consulting, and development 
                  solutions that drive measurable impact for our clients while 
                  maintaining the highest standards of excellence and integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="py-24 bg-background">
          <div className="max-w-content">
            <div className={cn(
              "text-center mb-16 transition-all duration-700",
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                What Drives Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className={cn(
                      "group p-8 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-500 hover:shadow-lg",
                      valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section ref={timelineRef} className="py-24 bg-section-gradient">
          <div className="max-w-content">
            <div className={cn(
              "text-center mb-16 transition-all duration-700",
              timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                Milestones Along the Way
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative grid md:grid-cols-2 gap-8 items-center transition-all duration-700",
                      timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:-translate-x-1/2 z-10" />
                    
                    {/* Content */}
                    <div className={cn(
                      "ml-12 md:ml-0",
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    )}>
                      <div className="text-4xl font-display font-bold text-accent mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
