import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Sparkles, Play } from "lucide-react";
import heroPeople from "@/assets/hero-people.jpg";

export const HeroSection = () => {
  const stats = [
    { value: "24K+", label: "Businesses" },
    { value: "$16M+", label: "Transactions" },
    { value: "160M+", label: "Yearly Volume" },
  ];

  const features = [
    "50+ Countries Worldwide",
    "98% Customer Satisfaction",
    "Over 5000+ App Downloads",
    "24/7 Customer Support",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-32 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm animate-fade-in">
              <div className="relative">
                <Sparkles className="w-4 h-4 text-accent" />
                <div className="absolute inset-0 animate-ping opacity-30">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
              </div>
              <span className="text-accent font-semibold text-sm tracking-wide">Transforming Business Excellence</span>
            </div>
            
            {/* Headline with gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.05] mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Expert Solutions
              <span className="block mt-2">
                for <span className="text-gradient">Your Financial</span>
              </span>
              <span className="block mt-2 text-accent">Future</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '200ms' }}>
              Our comprehensive solutions provide expert guidance in budgeting, 
              expense tracking, investment management, and strategic financial planning.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button variant="gradient" size="xl" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" className="group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-2 group-hover:bg-accent/20 transition-colors">
                  <Play className="w-4 h-4 text-accent fill-accent" />
                </div>
                Watch Demo
              </Button>
            </div>
            
            {/* Stats Row */}
            <div className="flex items-center gap-8 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '500ms' }}>
              {stats.map((stat, index) => (
                <div key={index} className="group cursor-default">
                  <div className="text-3xl md:text-4xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image with floating elements */}
          <div className="relative order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {/* Main image container */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 rounded-[2.5rem] blur-xl opacity-60" />
              
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                  src={heroPeople} 
                  alt="Business professionals collaborating"
                  className="w-full h-auto object-cover"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating trust card - enhanced */}
              <div className="absolute -bottom-8 -left-8 md:-left-12 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 p-6 max-w-[300px] animate-float">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center shadow-glow-sm">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-foreground text-lg block">2M+ Customers</span>
                    <span className="text-xs text-muted-foreground">Trusted worldwide</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Join <span className="text-accent font-semibold">+18,500</span> new customers daily!
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i} 
                        className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-card shadow-sm"
                        style={{ zIndex: 5 - i }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium text-muted-foreground">5.0</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second floating element - Stats card */}
              <div className="absolute -top-6 -right-6 md:-right-8 bg-primary text-primary-foreground rounded-2xl shadow-2xl p-5 animate-float" style={{ animationDelay: '-3s' }}>
                <div className="text-3xl font-display font-bold">98%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
