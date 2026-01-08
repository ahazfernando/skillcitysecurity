"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does Skill City offer?",
    answer: "Skill City offers comprehensive facility solutions, professional recruitment services, expert plumbing solutions, and security services across Australia. We provide end-to-end solutions designed to meet all your business needs."
  },
  {
    question: "How do I get started with your services?",
    answer: "Simply reach out to us through our contact form or call us directly. Our team will assess your needs and provide a customized solution tailored to your business requirements. We offer free consultations to help you get started."
  },
  {
    question: "What areas do you serve?",
    answer: "We provide reliable services across Australia. Our team is equipped to handle projects nationwide, ensuring consistent quality and service standards regardless of location."
  },
  {
    question: "Can I get a quote for my project?",
    answer: "Absolutely! We offer free, no-obligation quotes for all our services. Contact us with your project details, and we'll provide you with a comprehensive quote within 24-48 hours."
  },
  {
    question: "What makes Skill City different?",
    answer: "Skill City combines expertise across multiple service areas, ensuring integrated solutions for your business. We prioritize quality, reliability, and customer satisfaction, backed by years of experience serving businesses across Australia."
  }
];

export const FAQSection = () => {
  return (
    <section 
      className="py-24 relative"
      style={{ 
        backgroundColor: '#EBF5FF',
        backgroundImage: 'url(/faq/faqsection.png)',
        backgroundSize: 'auto 300px',
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay to reduce image opacity */}
      <div className="absolute inset-0 bg-[#EBF5FF]/30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Panel */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">
                Your Questions, Answered
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Skill City is a comprehensive service provider that helps you manage facilities, 
              recruit talent, maintain infrastructure, and secure your business operations.
            </p>

            {/* Still Have Questions Card */}
            <div 
              className="mt-auto p-6 rounded-2xl relative overflow-hidden shadow-sm"
              style={{
                backgroundImage: 'url(/services/f4b9be0137f95fee0d3aab054d151d3b.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our support team is here to help. Get in touch with us and we'll respond within 24 hours.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  Book a Free Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Right Panel - Accordion */}
          <div className="flex items-start">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl px-6 py-2 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
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
};
