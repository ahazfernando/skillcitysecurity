"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  bg: "bg-white" | "bg-gray-900";
  text: "text-gray-900" | "text-white";
}

interface HowItWorksSectionProps {
  badge?: string;
  title: string;
  description: string;
  steps: Step[];
  accentColor?: "accent" | "green-600" | "blue-600" | "custom-blue" | "orange";
}

export function HowItWorksSection({
  badge = "How It Works?",
  title,
  description,
  steps,
  accentColor = "accent",
}: HowItWorksSectionProps) {
  const { ref: howItWorksRef } = useScrollReveal();

  const accentBgClasses = {
    "accent": "bg-accent",
    "green-600": "bg-green-600",
    "blue-600": "bg-blue-600",
    "custom-blue": "",
    "orange": "bg-orange-500",
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
    <section ref={howItWorksRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className={`${step.bg} p-8 rounded-2xl shadow-lg border border-gray-100`}>
                <div 
                  className={cn(
                    "w-16 h-16 rounded-lg flex items-center justify-center mb-6", 
                    step.bg === 'bg-gray-900' 
                      ? (accentColor !== "custom-blue" ? accentBgClasses[accentColor] : "") 
                      : (accentColor !== "custom-blue" ? accentBgLightClasses[accentColor] : "")
                  )}
                  style={
                    step.bg === 'bg-gray-900' 
                      ? (accentColor === "custom-blue" ? { backgroundColor: customBlue } : undefined)
                      : (accentColor === "custom-blue" ? { backgroundColor: `${customBlue}1A` } : undefined)
                  }
                >
                  <Icon 
                    className={cn("w-8 h-8", step.bg === 'bg-gray-900' ? 'text-white' : (accentColor !== "custom-blue" ? accentTextClasses[accentColor] : ""))}
                    style={step.bg !== 'bg-gray-900' && accentColor === "custom-blue" ? { color: customBlue } : undefined}
                  />
                </div>
                <h3 className={`text-xl font-bold ${step.text} mb-3`}>{step.title}</h3>
                <p className={step.text === 'text-white' ? 'text-gray-300' : 'text-gray-600'}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}