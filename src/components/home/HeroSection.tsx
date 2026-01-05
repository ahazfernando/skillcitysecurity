import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import heroPeople from "@/assets/hero-people.jpg";

export const HeroSection = () => {
  const stats = [
    { value: "24K+", label: "Business" },
    { value: "$16M+", label: "Transaction" },
    { value: "160M+", label: "Transactions yearly" },
  ];

  const features = [
    "50+ Countries Worldwide",
    "98% Customer Satisfaction",
    "Over 5000+ App Downloads",
    "24/7 Customer Support",
  ];

  return (
    <section className="pt-32 pb-16 bg-background overflow-hidden">
      <div className="max-w-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with floating card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={heroPeople} 
                alt="Business professionals collaborating"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating trust card */}
            <div className="absolute -bottom-6 -left-4 md:left-8 bg-card rounded-2xl shadow-lg border border-border p-5 max-w-[280px] animate-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <span className="font-display font-semibold text-foreground">Trusted by 2M+ Customers</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Join over <span className="text-accent font-semibold">+18,500</span> new customers who choose our product every day!
              </p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-card"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 ml-2">
                  <span className="text-sm text-muted-foreground">5M+ Reviews</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:pl-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">About Us</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground leading-[1.1] mb-6">
              Expert Solutions for{" "}
              <span className="text-accent">Your Financial Future</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive solutions provide expert guidance in budgeting, 
              expense tracking, investment management, and more.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <Button variant="default" size="lg" asChild className="mb-12">
              <Link to="/contact">
                Start 7 Days Free Trial
              </Link>
            </Button>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
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
        </div>
      </div>
    </section>
  );
};
