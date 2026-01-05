import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export const WhoWeAreSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="max-w-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-8">
              We don't just train.
              <span className="block mt-2 text-accent">We transform.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Skill City Group is a consortium of companies dedicated to building 
                human capacity and organizational excellence. We believe in the power 
                of skills to change lives and shape futures.
              </p>
              <p>
                From corporate training to leadership development, from skills 
                certification to strategic consulting—we are your partners in growth.
              </p>
            </div>
            
            {/* Key Points */}
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Human-Centered", desc: "People at the heart of everything" },
                { title: "Innovation-Driven", desc: "Modern methods, real results" },
                { title: "Impact-Focused", desc: "Measurable transformation" },
                { title: "Future-Ready", desc: "Skills for tomorrow's world" },
              ].map((point, index) => (
                <div key={index} className="group">
                  <h4 className="font-display font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className={cn(
            "relative transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            {/* Abstract visual composition */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse-glow" />
              
              {/* Floating elements */}
              <div className="absolute top-0 left-0 w-32 h-32 rounded-3xl bg-accent/20 backdrop-blur-sm animate-float" />
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-muted border border-border animate-float delay-200" />
              <div className="absolute top-1/2 right-0 w-24 h-24 rounded-2xl bg-accent animate-float delay-300" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-12 left-12 p-6 rounded-2xl bg-card shadow-lg border border-border">
                <div className="text-3xl font-display font-bold text-foreground mb-1">15+</div>
                <div className="text-muted-foreground text-sm">Years of Excellence</div>
              </div>
              
              {/* Decorative lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="150" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="10 10" opacity="0.3" />
                <circle cx="200" cy="200" r="180" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
