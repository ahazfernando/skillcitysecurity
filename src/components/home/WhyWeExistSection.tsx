import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

export const WhyWeExistSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-32 bg-section-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="max-w-content relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <div className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Why We Exist
            </span>
          </div>

          {/* Big Quote */}
          <div className={cn(
            "relative transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <Quote className="absolute -top-8 -left-4 w-16 h-16 text-accent/20" />
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.3] text-center">
              We don't just train.
              <span className="block mt-4 text-accent">We transform.</span>
            </blockquote>
          </div>

          {/* Supporting text */}
          <div className={cn(
            "mt-16 grid md:grid-cols-3 gap-12 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="text-center md:text-left">
              <div className="text-6xl font-display font-bold text-accent/20 mb-2">01</div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">
                Born from the Real Struggle
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                We started because we saw the gap—between potential and opportunity, 
                between skills and success. We exist to bridge that gap.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="text-6xl font-display font-bold text-accent/20 mb-2">02</div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">
                Experience Over Explanation
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                We don't overpromise. We let people feel the difference through 
                our approach, honesty in conversations, and results that speak.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="text-6xl font-display font-bold text-accent/20 mb-2">03</div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">
                A Journey Brand, Not a Transaction
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                We're not here to sell and disappear. We walk with you—as a partner, 
                not a vendor. Our impact lasts because we build trust.
              </p>
            </div>
          </div>

          {/* Vision statement */}
          <div className={cn(
            "mt-24 text-center transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              Our Vision
            </span>
            <p className="text-2xl md:text-3xl font-display text-foreground/80 italic leading-relaxed max-w-3xl mx-auto">
              "To empower businesses to achieve outcomes effortlessly, 
              while making their journey toward success easier at every step."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
