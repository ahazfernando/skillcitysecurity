import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Users, Download, Headphones, Star } from "lucide-react";
import heroPeople from "@/assets/hero-people.jpg";

export const HeroSection = () => {
  const features = [
    { icon: Globe, label: "50+ Countries Worldwide" },
    { icon: Users, label: "98% Customer Satisfaction" },
    { icon: Download, label: "Over 500K+ App Downloads" },
    { icon: Headphones, label: "24/7 Customer Support" },
  ];

  const stats = [
    { value: "24K+", label: "Business" },
    { value: "$16M+", label: "Transaction" },
    { value: "160M+", label: "Transactions yearly" },
  ];

  return (
    <section className="pt-32 pb-16 bg-background relative overflow-hidden">
      <div className="max-w-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with floating card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={heroPeople} 
                  alt="Business professionals working together"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating trust card */}
              <div className="absolute bottom-8 -left-4 md:left-8 bg-card rounded-2xl shadow-lg border border-border p-4 max-w-[240px] animate-fade-in">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">1000+ Reviews</span>
                </div>
                <h4 className="font-display font-semibold text-foreground text-sm mb-1">Trusted by 2M+ Customers</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  Join over +10,000 new customers who choose our product every day!
                </p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-accent font-medium text-sm">About Us</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Expert Solutions for{" "}
              <span className="text-muted-foreground font-normal">Your Financial Future</span>
            </h1>
            
            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Our comprehensive solutions provide expert guidance in budgeting, 
              expense tracking, investment management, and more.
            </p>
            
            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature.label}</span>
                  </div>
                );
              })}
            </div>
            
            {/* CTA */}
            <Button 
              size="lg" 
              asChild 
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
            >
              <Link to="/contact">
                Start 7 Days Free Trial
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mt-16 pt-12 border-t border-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
