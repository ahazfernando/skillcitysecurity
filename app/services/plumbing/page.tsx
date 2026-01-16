"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { WhoWeAreSection } from "@/components/services/WhoWeAreSection";
import { BehindTheHomeSection } from "@/components/services/BehindTheHomeSection";
import { RealServicesSection } from "@/components/services/RealServicesSection";
import { HowItWorksSection } from "@/components/services/HowItWorksSection";
import { ServiceFAQSection } from "@/components/services/ServiceFAQSection";
import { Wrench, Users, Building2, Shield, FileText, Calendar, CheckCircle2, MessageCircle, Plus, Hash, Leaf, Droplets } from "lucide-react";

export default function PlumbingService() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <ServiceHeroSection
          backgroundImage="/services/plumbingwater.jpg"
          welcomeText="Welcome To"
          welcomeHighlight="Skill City Plumbing"
          title="We Specialize"
          titleHighlight="Plumbing & Maintenance"
          description="Licensed and experienced plumbing services for residential and commercial properties. Our team handles everything from routine maintenance to emergency repairs, ensuring your plumbing systems operate smoothly and efficiently."
          ctaText="Book a Meeting"
          ctaLink="/contact"
        />

        {/* Who We Are Section */}
        <WhoWeAreSection
          image="/services/plumbingwater.jpg"
          imageAlt="Plumbing Services"
          categoryTitle="Plumbing Solutions"
          categoryDescription="We specialize in providing comprehensive plumbing services that keep your water systems running smoothly and efficiently."
          stats={[
            { value: "500+", label: "Jobs Completed" },
            { value: "24/7", label: "Emergency Service" },
          ]}
          sectionLabel="Who We Are?"
          title="Your"
          titleHighlight="Plumbing Partner"
          description="With years of experience in plumbing services, we understand the unique needs of residential and commercial properties. Our comprehensive approach ensures reliable plumbing solutions through licensed professionals and quality service."
          featureTitle="Licensed Plumbing Professionals"
          featureDescription="Our certified plumbers are equipped with the latest tools and techniques to handle any plumbing issue, from minor repairs to major installations."
          featureIcon={Wrench}
          accentColor="blue-600"
        />

        {/* Behind The Home Master Company Stories */}
        <BehindTheHomeSection
          sectionLabel="What we do"
          title="Behind The Home"
          titleHighlight="Master Company"
          description="We help businesses and homeowners maintain reliable plumbing systems with dependable, professional plumbing services always tailored to what you need."
          stats={[
            { icon: Wrench, value: "500+", label: "Jobs Completed" },
            { icon: Users, value: "50+", label: "Licensed Plumbers" },
            { icon: Building2, value: "15+", label: "Glorious Years" },
          ]}
          secondaryDescription="We put our customers' satisfaction at the heart of everything we do."
          image="/services/plumbingwater.jpg"
          imageAlt="Plumbing Professional"
          mirrorImage={true}
          accentColor="blue-600"
        />

        {/* Real Plumbing Services For You Section */}
        <RealServicesSection
          sectionLabel="We Have An Amazing"
          title="Real Plumbing Services For You"
          description="From emergency repairs to complete installations, we offer comprehensive plumbing services tailored to your specific needs and requirements."
          image="/services/plumbingwater.jpg"
          imageAlt="Plumbing Services"
          services={[
            { icon: Droplets, title: "Emergency Repairs", description: "Fast response times for urgent plumbing issues." },
            { icon: Wrench, title: "Installation Services", description: "Professional installation of plumbing fixtures and systems." },
            { icon: FileText, title: "Drain Cleaning", description: "Thorough drain cleaning and maintenance services." },
            { icon: CheckCircle2, title: "Preventive Maintenance", description: "Regular maintenance programs to prevent issues." },
          ]}
          accentColor="blue-600"
        />

        {/* How It Works Section */}
        <HowItWorksSection
          badge="How It Works?"
          title="Check Out The Easy Way To Get Our Services"
          description="How our plumbing services work to provide you the best solutions for your plumbing needs. Our streamlined process makes it simple to get the service you need."
          steps={[
            { 
              icon: MessageCircle, 
              title: "Consultation Section", 
              description: "We start with understanding your plumbing needs and requirements.",
              bg: "bg-white",
              text: "text-gray-900"
            },
            { 
              icon: Plus, 
              title: "Choose Your Package", 
              description: "Select the plumbing service package that fits your needs.",
              bg: "bg-gray-900",
              text: "text-white"
            },
            { 
              icon: FileText, 
              title: "Get Your Service", 
              description: "Receive professional plumbing services and ongoing support.",
              bg: "bg-white",
              text: "text-gray-900"
            },
          ]}
          accentColor="blue-600"
        />

        {/* FAQ Section */}
        <ServiceFAQSection
          sectionLabel="Frequently asked questions"
          title="Frequently asked"
          titleHighlight="questions"
          description="Choose a plan that fits your plumbing needs and budget. No hidden fees, no surprises just straightforward pricing for powerful plumbing solutions."
          faqs={[
            {
              question: "What is Skill City Plumbing?",
              answer: "Skill City Plumbing is a comprehensive plumbing services provider designed to handle all your plumbing needs. We specialize in emergency repairs, installations, maintenance, and preventive care for both residential and commercial properties.",
            },
            {
              question: "How does the plumbing service work?",
              answer: "Our streamlined process begins with understanding your specific plumbing needs and requirements. We then diagnose the issue, provide a clear estimate, perform the necessary work using quality materials, and ensure everything is working properly before we leave.",
            },
            {
              question: "Are your plumbers licensed and insured?",
              answer: "Yes, all our plumbers are fully licensed, certified, and insured. We maintain the highest standards of professionalism and quality. We use only quality materials and stand behind our work with comprehensive warranties.",
            },
            {
              question: "Do you offer emergency plumbing services?",
              answer: "Absolutely. We offer 24/7 emergency plumbing services to ensure your plumbing issues are addressed immediately. Our emergency response team is available around the clock to handle urgent plumbing problems.",
            },
          ]}
          accentColor="blue-600"
        />

      </main>
      <Footer />
    </div>
  );
}