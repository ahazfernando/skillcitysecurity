"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Target, Eye, Heart, Lightbulb, Shield, Calendar, FileText } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AboutFAQSection } from "@/components/home/AboutFAQSection";

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
                backgroundImage: 'url(/securitylogo/ContactHeader.png)',
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
                    "inline-block text-white font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700",
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
              {/* Vision Card */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden border border-border">
                <Image
                  src="/missionvission/SkillCityVision(D1V1C1).png"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
                {/* Dark overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                  <Eye className="w-12 h-12 text-white mb-6" />
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    To be the global leader in human capital transformation, 
                    empowering millions to achieve their full potential and 
                    contribute meaningfully to their organizations and communities.
                  </p>
                </div>
              </div>
              
              {/* Mission Card */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden border border-border">
                <Image
                  src="/missionvission/SkillCityMission(D1V1C1).png"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
                {/* Dark overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                  <Target className="w-12 h-12 text-white mb-6" />
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    To deliver world-class training, consulting, and development 
                    solutions that drive measurable impact for our clients while 
                    maintaining the highest standards of excellence and integrity.
                  </p>
                </div>
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
              <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">
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
                    <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                      <Icon className="w-7 h-7 text-orange-500" />
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

        {/* Security Services Journey (About Page) */}
        <section className="py-24 bg-white">
          <div className="max-w-content">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-3">
                How We Protect
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Our Security Services Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three core security services that work together to keep your people, property, and assets protected at all times.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src="/securitylogo/98f8045f29f16f3cbdf295ed0f42ad6f-2.jpg"
                    alt="On-site security guards"
                    fill
                    className="object-cover"
                  />
                  {/* Icon positioned absolutely on top of image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="px-8 pb-8 pt-8">
                  <h3 className="text-xl font-display font-bold text-foreground text-center mb-2">
                    Manned Guarding
                  </h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Professional, licensed security officers providing on-site protection, access control, and visible security presence for your locations.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src="/securityservices/24.png"
                    alt="Event and mobile security"
                    fill
                    className="object-cover"
                  />
                  {/* Icon positioned absolutely on top of image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="px-8 pb-8 pt-8">
                  <h3 className="text-xl font-display font-bold text-foreground text-center mb-2">
                    Event & Mobile Patrols
                  </h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Flexible security coverage for events, sites, and patrol routes—keeping people safe and property secure when activity is at its peak.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src="/securityservices/23.png"
                    alt="Control room and monitoring"
                    fill
                    className="object-cover"
                  />
                  {/* Icon positioned absolutely on top of image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="px-8 pb-8 pt-8">
                  <h3 className="text-xl font-display font-bold text-foreground text-center mb-2">
                    Monitoring & Risk Assessment
                  </h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Continuous monitoring, reporting, and risk assessment to identify vulnerabilities early and strengthen your overall security posture.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8"
                asChild
              >
                <a href="/services/security">Explore Our Security Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Skill City */}
        <section className="py-24 bg-background">
          <div className="max-w-content">
            {/* Heading */}
            <div className="mb-12">
              <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                Why choose{" "}
                <span className="relative inline-block">
                  Skill City
                  <span className="absolute left-0 right-0 bottom-0 h-1 bg-orange-300 rounded-full" />
                </span>
              </h2>
            </div>

            {/* Points Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    Security-led expertise
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Decades of experience delivering professional security services backed by robust processes and consistent training.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    Tailored solutions
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every site and client is different. We design security plans around your risks, operations, and people.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    People-first approach
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We invest in our teams so they can show up professional, prepared, and committed to your safety every day.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    Proven results
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    From corporate sites to events, clients trust us to reduce incidents and maintain secure, calm environments.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    End-to-end coverage
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    From risk assessment and planning to onsite guarding and monitoring, we handle the full security lifecycle.
                  </p>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    Future-focused
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We continuously improve our methods and technology to keep pace with changing security threats and expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <AboutFAQSection />

        {/* Timeline */}
        <section ref={timelineRef} className="py-24 bg-section-gradient">
          <div className="max-w-content">
            <div className={cn(
              "text-center mb-16 transition-all duration-700",
              timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">
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
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-background md:-translate-x-1/2 z-10" />
                    
                    {/* Content */}
                    <div className={cn(
                      "ml-12 md:ml-0",
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    )}>
                      <div className="text-4xl font-display font-bold text-orange-500 mb-2">
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
