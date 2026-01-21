"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { SecurityServicesSection } from "@/components/services/SecurityServicesSection";
import { SecurityServicesTabsSection } from "@/components/services/SecurityServicesTabsSection";
import { WhoWeAreSection } from "@/components/services/WhoWeAreSection";
import { BehindTheHomeSection } from "@/components/services/BehindTheHomeSection";
import { RealServicesSection } from "@/components/services/RealServicesSection";
import { HowItWorksSection } from "@/components/services/HowItWorksSection";
import { ServiceFAQSection } from "@/components/services/ServiceFAQSection";
import { Shield, Users, Building2, Wrench, FileText, Calendar, CheckCircle2, MessageCircle, Plus, Hash, Leaf } from "lucide-react";

export default function SecurityService() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <ServiceHeroSection
          backgroundImage="/securitylogo/63.png"
          welcomeText="Welcome To"
          welcomeHighlight="Skill City Security"
          title="We Specialize"
          titleHighlight="Security & Protection"
          description="Comprehensive security solutions tailored to protect your business, employees, and assets. Our professional security services provide peace of mind through trained personnel, advanced monitoring, and strategic security planning."
          ctaText="Book a Meeting"
          ctaLink="/contact"
          whiteGradientFromBottom={true}
        />

        {/* Security Services Section */}
        <SecurityServicesSection />

        {/* In-depth Services Tabs */}
        <SecurityServicesTabsSection />

        {/* Who We Are Section */}
        <WhoWeAreSection
          image="/services/dab71de9b4112fadbb7208c430841d67.jpg"
          imageAlt="Security Services"
          categoryTitle="Security Solutions"
          categoryDescription="We specialize in providing comprehensive security solutions that protect your people, property, and assets around the clock."
          stats={[
            { value: "24/7", label: "Monitoring" },
            { value: "500+", label: "Secured Sites" },
          ]}
          sectionLabel="Who We Are?"
          title="Your"
          titleHighlight="Security Partner"
          description="With years of experience in security services, we understand the unique needs of businesses and individuals. Our comprehensive approach ensures maximum protection and peace of mind through trained professionals and advanced security systems."
          featureTitle="Professional Security Personnel"
          featureDescription="Our highly trained security guards are equipped with the latest security protocols and technology to ensure your property and people are always protected."
          featureIcon={Shield}
          accentColor="orange"
        />

        {/* Behind The Home Master Company Stories */}
        <BehindTheHomeSection
          sectionLabel="What we do"
          title="Behind The Home"
          titleHighlight="Master Company"
          description="We help businesses and individuals stay secure and protected with dependable, professional security services always tailored to what you need."
          stats={[
            { icon: Shield, value: "1K+", label: "Secured Sites" },
            { icon: Users, value: "300+", label: "Security Staff" },
            { icon: Building2, value: "15+", label: "Glorious Years" },
          ]}
          secondaryDescription="We put our customers' safety at the heart of everything we do."
          image="/services/dab71de9b4112fadbb7208c430841d67.jpg"
          imageAlt="Security Professional"
          mirrorImage={true}
          accentColor="orange"
        />

        {/* Real Security Services For You Section */}
        <RealServicesSection
          sectionLabel="We Have An Amazing"
          title="Real Security Services For You"
          description="From security guards to access control systems, we offer comprehensive security services tailored to your specific needs and requirements."
          image="/services/dab71de9b4112fadbb7208c430841d67.jpg"
          imageAlt="Security Services"
          services={[
            { icon: Shield, title: "Security Guard Services", description: "Professional trained security personnel for your premises." },
            { icon: Calendar, title: "Event Security Management", description: "Comprehensive security solutions for events and gatherings." },
            { icon: FileText, title: "Security Assessments", description: "Thorough evaluation and recommendations for your security needs." },
            { icon: CheckCircle2, title: "24/7 Surveillance", description: "Advanced surveillance and monitoring solutions to protect your facilities at all times." },
          ]}
          accentColor="orange"
        />

        {/* How It Works Section */}
        <HowItWorksSection
          badge="How It Works?"
          title="Check Out The Easy Way To Get Our Services"
          description="How our security services work to provide you the best protection for your business and assets. Our streamlined process makes it simple to get the security you need."
          steps={[
            { 
              icon: MessageCircle, 
              title: "Consultation Section", 
              description: "We start with understanding your security needs and requirements.",
              bg: "bg-white",
              text: "text-gray-900"
            },
            { 
              icon: Plus, 
              title: "Choose Your Package", 
              description: "Select the security package that fits your needs and budget.",
              bg: "bg-gray-900",
              text: "text-white"
            },
            { 
              icon: FileText, 
              title: "Get Your Service", 
              description: "Receive professional security services and ongoing support.",
              bg: "bg-white",
              text: "text-gray-900"
            },
          ]}
          accentColor="orange"
        />

        {/* FAQ Section */}
        <ServiceFAQSection
          sectionLabel="Frequently asked questions"
          title="Frequently asked"
          titleHighlight="questions"
          description="Choose a plan that fits your security needs and budget. No hidden fees, no surprises just straightforward pricing for powerful security solutions."
          faqs={[
            {
              question: "What is Skill City Security?",
              answer: "Skill City Security is a comprehensive security services provider designed to protect your business, employees, and assets. We specialize in providing trained security personnel, advanced monitoring systems, and strategic security planning tailored to your specific needs.",
            },
            {
              question: "How does the security service work?",
              answer: "Our streamlined process begins with understanding your specific security needs and requirements. We then design a customized security plan, deploy trained personnel or systems, and provide ongoing monitoring and support to ensure maximum protection.",
            },
            {
              question: "Is Skill City Security reliable and professional?",
              answer: "Yes, we maintain the highest standards of professionalism and reliability. All our security personnel are thoroughly trained, licensed, and certified. We conduct regular assessments and updates to ensure our security services meet the highest industry standards.",
            },
            {
              question: "Can Skill City Security provide 24/7 monitoring?",
              answer: "Absolutely. We offer 24/7 security monitoring and response services to ensure your property and assets are protected around the clock. Our security personnel and monitoring systems work continuously to provide maximum protection.",
            },
          ]}
          accentColor="orange"
        />

      </main>
      <Footer />
    </div>
  );
}