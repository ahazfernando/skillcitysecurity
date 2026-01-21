"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    id: "manned-guarding",
    title: "Manned Guarding Services",
    description: "Our professional security officers provide on-site protection, access control, and visible security presence for your locations. With comprehensive training and licensing, our guards ensure your premises remain secure while maintaining a professional, approachable presence that deters threats and provides peace of mind.",
    images: [
      "/securitylogo/98f8045f29f16f3cbdf295ed0f42ad6f-2.jpg",
      "/securityservices/69313e189e6cccb00bf7871e4c9fd6e5.jpg",
    ],
    triggerText: "Learn More About Guarding Services",
    triggerLink: "/services/security",
  },
  {
    id: "event-security",
    title: "Event Security Management",
    description: "Comprehensive security solutions for events, gatherings, and special occasions. Our event security teams are experienced in managing crowds, access control, and emergency response for events of all sizes. We ensure your events run smoothly and safely, allowing attendees to focus on the experience.",
    images: [
      "/securityservices/24.png",
      "/securityservices/086f14eaa0cfccc722c962e3a4bdd284.jpg",
    ],
    triggerText: "Explore Event Security",
    triggerLink: "/services/security",
  },
  {
    id: "access-control",
    title: "Access Control Systems",
    description: "Advanced access control and monitoring solutions to secure your facilities. Our technology-driven approach combines physical security measures with digital monitoring systems, providing 24/7 oversight and instant response capabilities. We help you maintain control over who enters your premises while keeping detailed access logs.",
    images: [
      "/securityservices/23.png",
      "/securityservices/da70b16731e204ca988383717c60d559.jpg",
    ],
    triggerText: "View Access Control Solutions",
    triggerLink: "/services/security",
  },
  {
    id: "security-assessments",
    title: "Security Assessments & Consulting",
    description: "Thorough evaluation and recommendations for your security needs and vulnerabilities. Our security experts conduct comprehensive assessments of your facilities, identifying potential risks and developing customized security strategies. We provide detailed reports and actionable recommendations to strengthen your security posture.",
    images: [
      "/securityservices/abd95df86f099e14285d3ff3fd1251e4.jpg",
      "/securitylogo/98f8045f29f16f3cbdf295ed0f42ad6f-2.jpg",
    ],
    triggerText: "Request Security Assessment",
    triggerLink: "/contact",
  },
  {
    id: "monitoring",
    title: "24/7 Monitoring & Response",
    description: "Round-the-clock security monitoring and rapid response services to ensure your property and assets are protected at all times. Our monitoring centers operate continuously, providing real-time surveillance and immediate response to any security incidents. We maintain constant vigilance so you can focus on your business.",
    images: [
      "/securityservices/69313e189e6cccb00bf7871e4c9fd6e5.jpg",
      "/securityservices/23.png",
    ],
    triggerText: "Learn About Monitoring Services",
    triggerLink: "/services/security",
  },
];

export const AboutFAQSection = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-content">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-3">
            | SERVICES |
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
            Security Services
            <br />
            <span className="text-orange-500">& Protection</span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion 
          type="single" 
          collapsible 
          className="w-full space-y-2"
          value={openItem}
          onValueChange={setOpenItem}
        >
          {faqItems.map((item, index) => {
            const isOpen = openItem === item.id;
            return (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline data-[state=open]:bg-orange-500">
                <div className="flex items-center justify-between w-full pr-4">
                  <span className={cn(
                    "text-lg font-display font-semibold text-left transition-colors",
                    isOpen ? "text-white" : "text-foreground"
                  )}>
                    {item.title}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    isOpen ? "bg-white text-orange-500" : "bg-orange-500 text-white"
                  )}>
                    {isOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0">
                <div className="bg-orange-50/30 px-6 py-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left - Content */}
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <Button
                        asChild
                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
                      >
                        <Link href={item.triggerLink}>
                          {item.triggerText}
                        </Link>
                      </Button>
                    </div>

                    {/* Right - Images */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative h-48 rounded-xl overflow-hidden">
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-48 rounded-xl overflow-hidden">
                        <Image
                          src={item.images[1]}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            );
          })}
        </Accordion>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services/security"
            className="text-orange-500 font-semibold hover:underline inline-flex items-center gap-2"
          >
            All Security Services
          </Link>
        </div>
      </div>
    </section>
  );
};
