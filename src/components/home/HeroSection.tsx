import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target } from "lucide-react";
import peopleSection from "@/assets/people-section.png";

export const HeroSection = () => {
  const stats = [
    { 
      value: "7.2B", 
      label: "Ads served across platforms",
      icon: BarChart3
    },
    { 
      value: "6x", 
      label: "Greater ROI than traditional campaigns",
      icon: Target
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[hsl(30,30%,96%)]">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-[hsl(30,60%,85%)] opacity-60" />
      <div className="absolute top-40 left-40 w-8 h-8 rounded-full bg-[hsl(30,60%,80%)] opacity-40" />
      
      <div className="max-w-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1 animate-fade-in">
            <img 
              src={peopleSection} 
              alt="Professional team - business woman, office professional, and skilled tradesman"
              className="w-full h-auto object-contain max-w-lg mx-auto lg:mx-0"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-foreground leading-[1.15] mb-6 animate-fade-in">
              Why partner with our
              <span className="block mt-1">marketing experts?</span>
            </h1>
            
            {/* Description */}
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-md animate-fade-in" style={{ animationDelay: '100ms' }}>
              Lorem ipsum dolor sit amet consectetur tincidunt a odio vitae a 
              viverra massa id blandit ullamcorper in tempor quis convallis 
              morbi odio nisl nulla neque id ridiculus.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Button 
                variant="default" 
                size="lg" 
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
              >
                <Link to="/contact">
                  Let's talk
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="rounded-full px-6 border-foreground/20 hover:bg-foreground/5"
              >
                <Link to="/about" className="flex items-center gap-2">
                  Learn more about us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            {/* Stats Row */}
            <div className="flex items-start gap-12 pt-8 border-t border-foreground/10 animate-fade-in" style={{ animationDelay: '300ms' }}>
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="flex items-start gap-2">
                    <stat.icon className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-tight max-w-[140px]">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
