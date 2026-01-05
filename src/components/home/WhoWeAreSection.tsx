import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Check, Building2 } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";

export const WhoWeAreSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const stats = [
    { value: "15+", label: "Years Of Experience" },
    { value: "75+", label: "Team Member" },
    { value: "48K", label: "Project Complete" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="max-w-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image with floating card and stats */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <div className="relative">
              {/* Main image container with purple tint */}
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={teamMeeting} 
                  alt="Team meeting"
                  className="w-full h-auto object-cover"
                />
                {/* Purple overlay tint */}
                <div className="absolute inset-0 bg-violet-500/20 mix-blend-multiply"></div>
              </div>
              
              {/* Floating service card */}
              <div className="absolute -top-4 -right-4 md:right-8 md:top-8 bg-card rounded-2xl shadow-lg border border-border p-5 max-w-[220px] animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-violet-600" />
                  </div>
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">Financial Planning</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </div>
            
            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4 mt-8 p-6 bg-card rounded-2xl border border-border shadow-sm">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className={cn(
            "transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-violet-600 font-semibold text-sm tracking-wider uppercase">Who</span>
              <span className="text-foreground font-semibold text-sm tracking-wider uppercase">We Are?</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Your Financial
              <span className="block">Partner For Success</span>
            </h2>
            
            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
            {/* Feature box */}
            <div className="bg-card rounded-2xl border border-border p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Cost-Effective</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <Button 
              size="lg" 
              asChild
              className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg"
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
