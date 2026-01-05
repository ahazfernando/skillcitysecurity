import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { ArrowRight, Briefcase, GraduationCap, LineChart, Users } from "lucide-react";

const services = [
  {
    title: "Corporate Training",
    description: "Customized training programs designed to upskill your workforce and drive organizational performance.",
    icon: Briefcase,
    features: ["Leadership Programs", "Technical Skills", "Soft Skills"],
  },
  {
    title: "Skills Development",
    description: "Comprehensive skills certification and development programs for individuals and teams.",
    icon: GraduationCap,
    features: ["Certification Programs", "Career Coaching", "Assessment Centers"],
  },
  {
    title: "Strategic Consulting",
    description: "Expert guidance to navigate organizational challenges and achieve transformational growth.",
    icon: LineChart,
    features: ["Business Strategy", "Change Management", "Digital Transformation"],
  },
  {
    title: "Leadership Programs",
    description: "Developing visionary leaders who can inspire teams and drive sustainable success.",
    icon: Users,
    features: ["Executive Coaching", "Team Building", "Succession Planning"],
  },
];

export const ServicesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-content relative z-10">
        {/* Header */}
        <div className={cn(
          "max-w-3xl mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
            Transformative Solutions
            <span className="block mt-2 text-muted-foreground">for Modern Challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive suite of services designed to unlock 
            potential and drive meaningful change.
          </p>
        </div>

        {/* Services - Zig-zag layout */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  isEven ? "" : "lg:flex-row-reverse"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Content */}
                <div className={cn(isEven ? "lg:order-1" : "lg:order-2")}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <span className="text-6xl font-display font-bold text-muted/50">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
                  >
                    Learn more
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={cn(
                  "relative",
                  isEven ? "lg:order-2" : "lg:order-1"
                )}>
                  <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    {/* Abstract shapes */}
                    <div className="absolute top-8 right-8 w-24 h-24 rounded-2xl bg-accent/20 animate-float" />
                    <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-primary/10 animate-float delay-200" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Icon className="w-32 h-32 text-primary/20" />
                    </div>
                    
                    {/* Decorative dots */}
                    <svg className="absolute bottom-4 right-4 w-24 h-24 text-accent/30" viewBox="0 0 100 100">
                      {[0, 1, 2, 3, 4].map((row) =>
                        [0, 1, 2, 3, 4].map((col) => (
                          <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="2" fill="currentColor" />
                        ))
                      )}
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
