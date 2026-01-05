import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Calculator, FileText, BarChart3, Wallet, ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Tax Planning",
    description: "Strategic tax optimization to maximize your savings and ensure compliance.",
    icon: Calculator,
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    title: "Payroll Process",
    description: "Streamlined payroll management for accuracy and employee satisfaction.",
    icon: FileText,
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    title: "Audit Services",
    description: "Comprehensive auditing to ensure financial integrity and transparency.",
    icon: BarChart3,
    color: "from-violet-500/20 to-violet-600/10",
  },
  {
    title: "Finance Analysis",
    description: "In-depth financial analysis for data-driven business decisions.",
    icon: Wallet,
    color: "from-amber-500/20 to-amber-600/10",
  },
];

export const ServicesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/3 blur-3xl" />
      
      <div className="max-w-content relative z-10">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Our Services</span>
            <div className="h-px w-12 bg-accent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
            Real Accounting
            <span className="block mt-2 text-gradient">Services For You</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive financial solutions designed to streamline your business 
            operations and drive sustainable growth.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className={cn(
          "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background gradient on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  service.color
                )} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <div className="flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className={cn(
          "text-center transition-all duration-700 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Button variant="outline" size="lg" asChild className="group">
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
