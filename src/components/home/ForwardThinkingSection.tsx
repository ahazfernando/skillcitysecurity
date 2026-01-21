"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";

export const ForwardThinkingSection = () => {
  const trustedBrands = [
    { name: "afterpay", logo: "afterpay" },
    { name: "Boostcamp", logo: "Boostcamp" },
    { name: "moze", logo: "moze" },
    { name: "partner", logo: "partner" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Stay ahead of the curve with our forward-thinking
            </h2>
            
            {/* Supporting Paragraph */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              An award-winning SEO agency with disciplines in digital marketing, design, and website development. We focus on understanding you.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-6 mb-12">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-900 rounded-lg px-6 py-3 h-auto flex items-center gap-2"
                asChild
              >
                <Link href="/contact">
                  Schedule Call
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-black" />
                  </div>
                </Link>
              </Button>
              <Link
                href="/services"
                className="text-black font-medium hover:underline"
              >
                View Case Study
              </Link>
            </div>
            
            {/* Trusted Brands Section */}
            <div>
              <p className="text-sm text-gray-500 mb-4">Trusted by the world&apos;s biggest brands</p>
              <div className="flex items-center gap-6 flex-wrap">
                {trustedBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="text-black font-semibold text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {brand.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-[650px]">
            {/* Top-Left Visual Card - Semi-circular top-left corner */}
            <div className="absolute top-0 left-0 w-[320px] h-[280px]">
              <div className="relative w-full h-full overflow-hidden rounded-2xl" style={{ 
                borderTopLeftRadius: '9999px',
                borderTopRightRadius: '1.5rem',
                borderBottomLeftRadius: '1.5rem',
                borderBottomRightRadius: '1.5rem'
              }}>
                <div className="relative w-full h-full bg-gray-100">
                  <Image
                    src="/servicestock/Recruitment.png"
                    alt="Professional workspace"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Analytics Icon - Overlapping top-center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg z-10">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Top-Right Metric Card */}
            <div className="absolute top-0 right-0 w-[260px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100 z-20">
              <div className="text-7xl font-bold text-black mb-2 leading-none">230+</div>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed mt-2">
                some big companies that we work with, and trust us very much.
              </p>
              <div className="h-px bg-gray-200 mt-3"></div>
            </div>

            {/* Bottom Bar Chart Card - Overlapping the top-left card */}
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 rounded-2xl p-6 shadow-lg z-10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-white/70 uppercase tracking-wide">Drive More Traffic and Sales</p>
              </div>
              <div className="h-px bg-white/20 mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Drive more traffic and product sales
              </h3>
              
              {/* Bar Chart */}
              <div className="flex items-end gap-3 h-28">
                <div className="flex-1 bg-green-400 rounded-t transition-all hover:opacity-90" style={{ height: '30%' }}></div>
                <div className="flex-1 bg-green-400 rounded-t transition-all hover:opacity-90" style={{ height: '50%' }}></div>
                <div className="flex-1 bg-green-400 rounded-t transition-all hover:opacity-90" style={{ height: '70%' }}></div>
                <div className="flex-1 bg-green-400 rounded-t transition-all hover:opacity-90" style={{ height: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
