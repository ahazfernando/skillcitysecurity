"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Hash } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQSectionProps {
  sectionLabel?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  faqs: FAQ[];
  ctaText?: string;
  ctaLink?: string;
  accentColor?: "accent" | "green-600" | "blue-600" | "custom-blue" | "orange";
}

export function ServiceFAQSection({
  sectionLabel = "Frequently asked questions",
  title,
  titleHighlight,
  description,
  faqs,
  ctaText = "Book a Free Consultation",
  ctaLink = "/contact",
  accentColor = "accent",
}: ServiceFAQSectionProps) {
  const accentBgClasses = {
    "accent": "bg-accent hover:bg-accent/90",
    "green-600": "bg-green-600 hover:bg-green-600/90",
    "blue-600": "bg-blue-600 hover:bg-blue-600/90",
    "custom-blue": "",
    "orange": "bg-orange-500 hover:bg-orange-600",
  };

  const accentBgLightClasses = {
    "accent": "bg-accent/10",
    "green-600": "bg-green-600/10",
    "blue-600": "bg-blue-600/10",
    "custom-blue": "",
    "orange": "bg-orange-50",
  };

  const accentTextClasses = {
    "accent": "text-accent",
    "green-600": "text-green-600",
    "blue-600": "text-blue-600",
    "custom-blue": "",
    "orange": "text-orange-500",
  };

  const customBlue = "#36A1D3";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div 
              className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6", accentColor !== "custom-blue" && accentBgLightClasses[accentColor])}
              style={accentColor === "custom-blue" ? { backgroundColor: `${customBlue}1A` } : undefined}
            >
              <Hash 
                className={cn("w-4 h-4", accentColor !== "custom-blue" && accentTextClasses[accentColor])}
                style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
              />
              <span 
                className={cn("text-sm font-semibold", accentColor !== "custom-blue" && accentTextClasses[accentColor])}
                style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
              >
                {sectionLabel}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              {title}{" "}
              {titleHighlight && (
                <span 
                  className={accentColor !== "custom-blue" ? accentTextClasses[accentColor] : ""}
                  style={accentColor === "custom-blue" ? { color: customBlue } : undefined}
                >
                  {titleHighlight}
                </span>
              )}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {description}
            </p>
            <Button 
              size="lg" 
              className={cn("text-white h-10 rounded-[12px]", accentColor !== "custom-blue" && accentBgClasses[accentColor])}
              style={accentColor === "custom-blue" ? { backgroundColor: customBlue } : undefined}
              asChild
            >
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="bg-gray-50 rounded-lg px-6 border-0">
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}