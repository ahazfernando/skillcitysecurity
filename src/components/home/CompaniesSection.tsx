import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Building2, GraduationCap, Lightbulb, Users } from "lucide-react";

const companies = [
  {
    name: "Skill Academy",
    focus: "Professional Training",
    description: "World-class training programs for professionals at every career stage.",
    icon: GraduationCap,
    color: "from-accent/20 to-accent/5",
  },
  {
    name: "Future Leaders Institute",
    focus: "Leadership Development",
    description: "Cultivating the next generation of visionary leaders and change-makers.",
    icon: Users,
    color: "from-primary/20 to-primary/5",
  },
  {
    name: "Innovation Hub",
    focus: "Digital Transformation",
    description: "Driving organizational change through technology and innovative thinking.",
    icon: Lightbulb,
    color: "from-secondary/20 to-secondary/5",
  },
  {
    name: "Corporate Solutions",
    focus: "Enterprise Consulting",
    description: "Strategic consulting for large-scale organizational transformation.",
    icon: Building2,
    color: "from-accent/20 to-accent/5",
  },
];

export const CompaniesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-32 bg-hero-pattern relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className={cn(
          "max-w-content text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Our Family
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6">
            A Group of Companies
            <span className="block mt-2 text-white/60">United by Purpose</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Each company in our group brings unique expertise, 
            all working together to transform human potential.
          </p>
        </div>

        {/* Horizontal Scroll Companies */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-8 lg:px-16 pb-8 snap-x snap-mandatory"
        >
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <div
                key={index}
                className={cn(
                  "flex-shrink-0 w-80 md:w-96 snap-center transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer">
                  {/* Icon */}
                  <div className={cn(
                    "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                    company.color
                  )}>
                    <Icon size={28} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="mb-6">
                    <span className="text-accent text-sm font-medium">{company.focus}</span>
                    <h3 className="text-2xl font-display font-bold text-white mt-2 mb-4">
                      {company.name}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {company.description}
                    </p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll hint */}
        <div className="max-w-content text-center mt-8">
          <span className="text-white/40 text-sm">← Scroll to explore →</span>
        </div>
      </div>
    </section>
  );
};
