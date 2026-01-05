import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Calculator, FileText, BarChart3, Wallet } from "lucide-react";

const services = [
  {
    title: "Tax Planning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    icon: Calculator,
  },
  {
    title: "Payroll Process",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    icon: FileText,
  },
  {
    title: "Audit Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    icon: BarChart3,
  },
  {
    title: "Finance Analys",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    icon: Wallet,
  },
];

export const ServicesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-content">
        {/* Header section with badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-muted-foreground text-sm">We Have An Amazing</span>
          <span className="px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium">Services</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Content */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Real Accounting
              <span className="block">Services For You</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus 
              nec ullamcorper. Pulvinar dapibus leo.
            </p>
            
            <Button variant="outline" size="lg" asChild className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background">
              <Link to="/services">
                See More
              </Link>
            </Button>
          </div>

          {/* Right: Services Grid */}
          <div className={cn(
            "grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
