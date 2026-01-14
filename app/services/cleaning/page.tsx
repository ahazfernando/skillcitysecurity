"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Home, Building2, Sparkles, CheckCircle, Star, Mail, Phone, MapPin, User, Calendar, MessageSquare } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CleaningService() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Header Section */}
        <section ref={heroRef} className="relative overflow-hidden">
          <div className="w-full h-[60vh] md:h-[70vh] relative">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/header/OurServicesHeader.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: 'scaleX(-1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
            
            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-content w-full relative z-10">
                <div className="max-w-3xl">
                  <span className={cn(
                    "inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    Professional Cleaning Services
                  </span>
                  <h1 className={cn(
                    "text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-[1.1] mb-8 transition-all duration-700 delay-100",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    Professional <span className="text-accent">Cleaning Services</span>
                  </h1>
                  <div className={cn(
                    "transition-all duration-700 delay-200",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <Button variant="hero" size="lg" asChild>
                      <Link href="#contact" className="flex items-center gap-2">
                        Get a Free Quote
                        <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Should You Choose Our Services? */}
        <section className="py-24 bg-white">
          <div className="max-w-content">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Why Should You <span className="text-accent">Choose Our Services?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We provide comprehensive cleaning solutions tailored to meet your specific needs. Our professional team ensures your space is spotless, healthy, and welcoming.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">Home Cleaning</h3>
                      <p className="text-muted-foreground">Comprehensive residential cleaning services for your home.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">Office Cleaning</h3>
                      <p className="text-muted-foreground">Professional commercial cleaning for your business space.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">Deep Cleaning</h3>
                      <p className="text-muted-foreground">Thorough deep cleaning services for a pristine environment.</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-muted-foreground/50 text-sm">
                  + VACUUM + CLEANING + SWEEPING +
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                    <span className="text-muted-foreground">Cleaning Supplies Image</span>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                    <span className="text-muted-foreground">Cleaners at Work Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Company Provide The Best Cleaning Service */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[url('/services/cleaning-bg.jpg')] bg-cover bg-center blur-3xl" />
          </div>
          <div className="max-w-content relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-16">
              Our Company Provide <span className="text-accent">The Best Cleaning Service</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Residential Services</h3>
                <p className="text-muted-foreground">Complete home cleaning solutions for your comfort.</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Specialized Cleaning</h3>
                <p className="text-muted-foreground">Expert cleaning for specific areas and requirements.</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <User className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Skilled Cleaning</h3>
                <p className="text-muted-foreground">Trained professionals delivering exceptional results.</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Regular Home Cleaning</h3>
                <p className="text-muted-foreground">Scheduled maintenance cleaning for consistent results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Behind The Home Master Company Stories */}
        <section className="py-24 bg-white">
          <div className="max-w-content">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
                  Behind The <span className="text-accent">Home Master Company Stories.</span>
                </h2>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-display font-bold text-accent">269+</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-display font-bold text-accent">386+</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Active Clients</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-display font-bold text-accent">600+</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Projects Done</p>
                  </div>
                </div>
                
                <Button variant="default" size="lg" asChild>
                  <Link href="#contact">Learn More</Link>
                </Button>
              </div>
              
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                  <span className="text-muted-foreground">Cleaner Professional Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Cleaner Space In Four Steps */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[url('/services/cleaning-tools.jpg')] bg-cover bg-center blur-3xl" />
          </div>
          <div className="max-w-content relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-16">
              Get <span className="text-accent">Cleaner Space In Four Steps</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "1", title: "Provide Your Details", description: "Fill out our simple form with your cleaning requirements." },
                { number: "2", title: "Pick a Suitable Plan", description: "Choose the cleaning plan that best fits your needs." },
                { number: "3", title: "We Scope Cleaned", description: "Our team arrives and performs thorough cleaning." },
                { number: "4", title: "Enjoy Happy & Relax", description: "Sit back and enjoy your sparkling clean space." },
              ].map((step, index) => (
                <div key={index} className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-display font-bold mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* We Make Your Home Sparkle And Shine */}
        <section className="py-24 bg-white">
          <div className="max-w-content">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                  <span className="text-muted-foreground">Woman Cleaning Office Image</span>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  We Make Your Home <span className="text-accent">Sparkle And Shine</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our professional cleaning team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">100% Satisfaction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">Eco-Friendly Cleaning Products</span>
                  </div>
                </div>
                
                <Button variant="default" size="lg" asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* We Have A Expert Team To Serve You */}
        <section className="py-24 bg-background">
          <div className="max-w-content">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-16">
              We Have A <span className="text-accent">Expert Team To Serve You.</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Mark Jackson", role: "Operation Manager", image: "Mark Jackson" },
                { name: "Reina Spencer", role: "General Manager", image: "Reina Spencer" },
                { name: "Kim Podewicz", role: "Project Manager", image: "Kim Podewicz" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-48 h-48 rounded-full bg-muted/30 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    <span className="text-muted-foreground">{member.image}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hear What Our Global Clients Say */}
        <section className="py-24 bg-white">
          <div className="max-w-content">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-16">
              Hear What Our <span className="text-accent">Global Clients Say</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                  <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                    <span className="text-muted-foreground">Three Cleaners Image</span>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <p className="font-semibold text-foreground mb-1">Ashley K.S.</p>
                  <p className="text-sm text-muted-foreground">CEO & Founder of Getro</p>
                </div>
              </div>
              
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-2xl font-display text-foreground mb-6 leading-relaxed">
                  &ldquo;Exceptional service and attention to detail. Our office has never looked better!&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground mb-1">Steven Cleaning</p>
                  <p className="text-sm text-muted-foreground">CEO, Getro</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Your Appointment Today! */}
        <section id="contact" className="py-24 bg-accent text-white">
          <div className="max-w-content">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                  Schedule Your Appointment Today!
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                    <Input placeholder="Last Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  </div>
                  <Input placeholder="Email Address" type="email" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  <Input placeholder="Phone No." type="tel" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Choose a Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home Cleaning</SelectItem>
                      <SelectItem value="office">Office Cleaning</SelectItem>
                      <SelectItem value="deep">Deep Cleaning</SelectItem>
                      <SelectItem value="window">Window Cleaning</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Message" className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[120px]" />
                  <Button variant="default" size="lg" className="w-full bg-white text-accent hover:bg-white/90">
                    Book an Appointment
                  </Button>
                </form>
              </div>
              
              <div className="relative h-[600px] rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/60">Cleaner Professional Image</span>
                </div>
                <div className="absolute bottom-6 right-6 bg-accent/90 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <p className="font-bold text-white">100% Satisfaction Guaranteed!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learn About Our Latest News From Blog */}
        <section className="py-24 bg-background">
          <div className="max-w-content">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-16">
              Learn About Our <span className="text-accent">Latest News From Blog.</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "10 Tips for Keeping Your Home Clean and Organized", image: "Cleaning Supplies" },
                { title: "How to Prepare Your Office for A Professional Cleaning Land", image: "Woman Cleaning" },
                { title: "Renew Your Bathroom's Clean With Our Expert Touch!", image: "Woman Mopping" },
              ].map((post, index) => (
                <div key={index} className="rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow">
                  <div className="relative h-64 bg-muted/30 flex items-center justify-center">
                    <span className="text-muted-foreground">{post.image}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-foreground mb-4">{post.title}</h3>
                    <Link href="/blog" className="text-accent font-medium hover:underline flex items-center gap-2">
                      READ MORE
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Newsletter Stay Up To Date */}
        <section className="py-24 bg-white">
          <div className="max-w-content">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Join Our Newsletter <span className="text-accent">Stay Up To Date</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter to receive the latest cleaning tips, special offers, and company updates.
              </p>
              
              <form className="flex gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Email Address" 
                  type="email" 
                  className="flex-1"
                />
                <Button variant="default" size="lg" type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
