"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, Shield, FileText, Calendar, CheckCircle2, DollarSign, MessageCircle, Plus, Hash, Leaf, Building2, Wrench, Briefcase } from "lucide-react";
import LogoLoopComponent from "@/components/LogoLoop";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
const LogoLoop = LogoLoopComponent as any;
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function RecruitmentService() {
  const { ref: heroRef } = useScrollReveal();
  const { ref: whoWeAreRef } = useScrollReveal();
  const { ref: servicesRef } = useScrollReveal();
  const { ref: howItWorksRef } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative overflow-hidden h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/recruitmen/ChatGPT Image Jan 15, 2026, 10_41_23 AM.png"
              alt="Recruitment Hero Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex items-end pb-8 pt-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-end">
                {/* Left Content */}
                <div>
                  <p className="text-sm text-white mb-4">
                    Welcome To <span className="text-white font-medium italic">Skill City Recruitment</span>
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                    We Specialize <span className="text-white font-medium italic">Recruitment & Talent</span>
                  </h1>
                  <p className="text-white font-medium italic mb-8 leading-relaxed">
                    Connecting exceptional talent with outstanding opportunities. We help businesses find the right people and help professionals find their dream careers.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-gray-900 hover:bg-gray-100 font-semibold h-10 rounded-[14px]"
                    asChild
                  >
                    <Link href="/contact">
                      Book a Meeting
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Right Content with Cards - Commented Out */}
                {/*
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px] border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-white">4.9/5</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-white/80">Client satisfaction rating based on successful placements</p>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[250px] border border-white/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-accent/30 border-2 border-white flex items-center justify-center">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full bg-accent border-2 border-white flex items-center justify-center">
                          <Plus className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <p className="font-semibold text-white text-sm mb-1">Get To Know Our Team</p>
                    <Link href="/about" className="text-white text-sm font-medium flex items-center gap-1 hover:underline">
                      Let&apos;s Get Started <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>

          {/* Logo in Bottom Right */}
          <div className="absolute bottom-8 right-8 z-20">
            <Image
              src="/recruitmen/SkillCityFacilitySolutionWHITELOGO.png"
              alt="Skill City Facility Solutions"
              width={150}
              height={60}
              className="h-auto object-contain"
            />
          </div>
        </section>

        {/* Services Loop Section */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={[
                  { 
                    node: <Shield className="w-12 h-12 text-white" />, 
                    title: "Professional Security", 
                    href: "/services" 
                  },
                  { 
                    node: <Briefcase className="w-12 h-12 text-white" />, 
                    title: "Facility Solutions", 
                    href: "/services/cleaning" 
                  },
                  { 
                    node: <Users className="w-12 h-12 text-white" />, 
                    title: "Recruitment", 
                    href: "/services/recruitment" 
                  },
                  { 
                    node: <Wrench className="w-12 h-12 text-white" />, 
                    title: "Plumbing", 
                    href: "/services" 
                  },
                ]}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#1f2937"
                ariaLabel="Our services"
              />
            </div>
          </div>
        </section>

        {/* Who We Are / Financial Partner Section */}
        <section ref={whoWeAreRef} className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div>
                {/* Image Card */}
                <div className="relative mb-8 rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="/recruitmen/RecruitmentPeople.png"
                      alt="Recruitment People"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Talent Acquisition</h3>
                <p className="text-gray-600 mb-8">
                  We specialize in finding the perfect match between talented professionals and forward-thinking companies.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-accent mb-1">500+</div>
                    <div className="text-xs text-gray-600">Talent Roster</div>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div>
                <p className="text-accent font-semibold text-sm mb-4">Who We Are?</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                  Your <span className="text-accent">Recruitment Partner</span> For Success
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With years of experience in talent acquisition, we understand the unique needs of both employers and job seekers. Our comprehensive approach ensures successful placements that benefit everyone.
                </p>

                {/* Feature Card */}
                <div className="bg-accent/10 p-6 rounded-lg mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Talented Roster of Employees</h4>
                      <p className="text-gray-600 text-sm">
                        Access our extensive network of skilled professionals ready to drive your business forward. We connect you with top-tier talent that matches your business needs.
                      </p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white h-10 rounded-[16px]" asChild>
                  <Link href="/contact">
                    Contact us today
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Behind The Home Master Company Stories */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-0 items-center rounded-3xl overflow-hidden">
              {/* Left Content - White Background */}
              <div className="bg-white px-8 lg:px-12 py-12 lg:py-24 relative z-10">
                {/* Section Label */}
                <div className="flex items-center gap-2 mb-6">
                  <Leaf className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold tracking-wider text-gray-500">
                    What we do
                  </span>
                </div>
                
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-gray-900 mb-6 leading-tight max-w-2xl">
                  Behind The Home{" "}
                  <span className="text-accent">Master Company</span>{" "}
                  Stories.
                </h2>
                
                {/* Description */}
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  We help businesses find exceptional talent and professionals discover their dream careers with dependable, professional recruitment services always tailored to what you need.
                </p>
                
                {/* Statistics */}
                <div className="flex flex-wrap gap-8 mb-8">
                  {/* Active Clients */}
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-accent" />
                    <div>
                      <div className="text-4xl font-display font-bold text-accent mb-1">2K+</div>
                      <p className="text-sm text-gray-600">Active Roster</p>
                    </div>
                  </div>
                  
                  {/* 500+ Clients */}
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-accent" />
                    <div>
                      <div className="text-4xl font-display font-bold text-accent mb-1">500+</div>
                      <p className="text-sm text-gray-600">Clients</p>
                    </div>
                  </div>
                  
                  {/* Glorious Years */}
                  <div className="flex items-center gap-4">
                    <Building2 className="w-8 h-8 text-accent" />
                    <div>
                      <div className="text-4xl font-display font-bold text-accent mb-1">15+</div>
                      <p className="text-sm text-gray-600">Glorious Years</p>
                    </div>
                  </div>
                  
                </div>
                
                {/* Secondary Paragraph */}
                <p className="text-base text-gray-600 mb-8">
                  We put our customers at the heart of everything we do.
                </p>
                
                {/* CTA Button */}
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                  asChild
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </Link>
                </Button>
              </div>
              
              {/* Right Image with Fade Effect - Mirrored */}
              <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-t-[24px] rounded-r-[24px] rounded-b-[24px]">
                {/* Image - Mirrored */}
                <div className="absolute inset-0 scale-x-[-1]">
                  <Image
                    src="/recruitmen/RecruitmentD1.png"
                    alt="Recruitment Professional"
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

        {/* Real Accounting Services For You Section */}
        <section ref={servicesRef} className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  We Have An Amazing <span className="text-accent font-semibold">Service</span>
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                  Real Recruitment Services For You
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  From executive search to entry-level placements, we offer comprehensive recruitment services tailored to your needs.
                </p>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/recruitmen/Recruitementcreenin2.png"
                    alt="Recruitment Screening"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Services Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: FileText, title: "Talent Sourcing", description: "Comprehensive candidate search and screening processes." },
                  { icon: Calendar, title: "Interview Process", description: "Structured interview coordination and candidate evaluation." },
                  { icon: CheckCircle2, title: "Background Checks", description: "Thorough verification and reference checking services." },
                  { icon: DollarSign, title: "Salary Negotiation", description: "Expert assistance in compensation discussions and offers." },
                ].map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="bg-accent/10 p-6 rounded-lg">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section ref={howItWorksRef} className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                How It Works?
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Check Out The Easy Way To Get Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                How our recruitment works to provide you the best talent for your roster and Business. Our streamlined process makes it simple to find the right talent or the perfect opportunity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: MessageCircle, 
                  title: "Consultation Section", 
                  description: "We start with understanding your needs and requirements.",
                  bg: "bg-white",
                  text: "text-gray-900"
                },
                { 
                  icon: Plus, 
                  title: "Choose Your Package", 
                  description: "Select the recruitment package that fits your needs.",
                  bg: "bg-gray-900",
                  text: "text-white"
                },
                { 
                  icon: FileText, 
                  title: "Get Your Service", 
                  description: "Receive matched candidates and start the hiring process.",
                  bg: "bg-white",
                  text: "text-gray-900"
                },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className={`${step.bg} p-8 rounded-2xl shadow-lg border border-gray-100`}>
                    <div className={`w-16 h-16 ${step.bg === 'bg-gray-900' ? 'bg-accent' : 'bg-accent/10'} rounded-lg flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${step.bg === 'bg-gray-900' ? 'text-white' : 'text-accent'}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${step.text} mb-3`}>{step.title}</h3>
                    <p className={`${step.text === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                  <Hash className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Frequently asked questions</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                  Frequently asked <span className="text-accent">questions</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Choose a plan that fits your business needs and budget. No hidden fees, no surprises just straightforward pricing for powerful recruitment solutions.
                </p>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white h-10 rounded-[12px]"
                  asChild
                >
                  <Link href="/contact">
                    Book a Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Right FAQ Accordion */}
              <div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="item-1" className="bg-gray-50 rounded-lg px-6 border-0">
                    <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6">
                      What is Skill City Recruitment?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6">
                      Skill City Recruitment is a comprehensive talent acquisition platform designed to connect exceptional professionals with outstanding opportunities. We specialize in finding the perfect match between talented individuals and forward-thinking companies.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-gray-50 rounded-lg px-6 border-0">
                    <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6">
                      How does the recruitment process work?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6">
                      Our streamlined process begins with understanding your specific needs and requirements. We then source, screen, and match candidates to your criteria, followed by interview coordination and final placement support.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-gray-50 rounded-lg px-6 border-0">
                    <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6">
                      Is Skill City Recruitment secure and reliable?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6">
                      Yes, we maintain the highest standards of security and confidentiality. All candidate information is handled with strict privacy protocols, and we conduct thorough background checks and verification processes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-gray-50 rounded-lg px-6 border-0">
                    <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6">
                      Can Skill City Recruitment integrate with our existing HR systems?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6">
                      Absolutely. We offer seamless integration with most major HR management systems and applicant tracking platforms to ensure a smooth workflow and efficient candidate management.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
