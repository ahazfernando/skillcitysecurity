"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Home, Building2, Sparkles, CheckCircle, Star, Mail, Phone, MapPin, User, Calendar, MessageSquare, Leaf } from "lucide-react";
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
          <div className="w-full h-[100vh] relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/cleanign/inner_peace_landscape_upscaled_3x.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            
            <div className="absolute inset-0 flex items-start z-20 pt-32 md:pt-40">
              <div className="max-w-content w-full relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                  {/* Promotional Banner */}
                  <div className={cn(
                    "inline-block bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 transition-all duration-700",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <span className="text-sm font-semibold text-black">
                      Best peaceful place
                    </span>
                  </div>
                  
                  {/* Main Heading */}
                  <h1 className={cn(
                    "text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-black leading-[1.1] mb-6 transition-all duration-700 delay-100",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    Professional Facility <br />{" "}
                    <span className="italic font-medium text-black">Solutions for Brighter living</span>
                  </h1>
                  
                  {/* Sub-text */}
                  <p className={cn(
                    "text-lg md:text-xl text-black/90 mb-8 leading-relaxed transition-all duration-700 delay-200",
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    Feeling ready to relax? Find the best location to reconnect with nature and find inner calm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Should You Choose Our Services? */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background illustration */}
          <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
            <div className="w-full h-full bg-gray-300 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-content relative z-10">
            {/* Section label */}

            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="relative">
                {/* Heading with sparkle icons */}
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                    Why Should You <span className="text-green-600">Choose Our Services?</span>
                  </h2>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-6 h-6 text-green-600" />
                    <Sparkles className="w-5 h-5 text-green-600" />
                    <Sparkles className="w-7 h-7 text-green-600" />
                  </div>
                </div>
                
                <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                  We are committed to delivering exceptional cleaning services that leave your spaces sparkling clean and hygienic. Our professional team uses eco-friendly products to ensure a safe and healthy environment for you.
                </p>
                
                <div className="space-y-8 mb-10">
                  {/* House Cleaning */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center flex-shrink-0">
                      <Home className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">House Cleaning</h3>
                      <p className="text-muted-foreground">Apartment, condos, and houses - busy people who want their home to feel fresh again.</p>
                    </div>
                  </div>
                  
                  {/* Office Cleaning */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">Office Cleaning</h3>
                      <p className="text-muted-foreground">Maintain a clean, healthy workspace that supports productivity and professionalism.</p>
                    </div>
                  </div>
                  
                  {/* Store Cleaning */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">Periodical Cleaning</h3>
                      <p className="text-muted-foreground">Retail shops, studios, and showrooms - spotless spaces that make a great impression.</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative text with sparkles */}
                <div className="text-gray-300 text-2xl font-bold uppercase tracking-wider flex items-center gap-2">
                  VACUUM <Sparkles className="w-4 h-4 text-green-600" /> CLEANING <Sparkles className="w-4 h-4 text-green-600" /> SWEEPING
                </div>
              </div>
              
              {/* Single Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/services/interiorhouse(D1V1).jpg"
                  alt="Interior house cleaning"
                  fill
                  className="object-cover"
                />
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
              Our Company Provide <span className="text-green-600">The Best Cleaning Service</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Residential Services</h3>
                <p className="text-muted-foreground">Complete home cleaning solutions for your comfort.</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Specialized Cleaning</h3>
                <p className="text-muted-foreground">Expert cleaning for specific areas and requirements.</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                  <User className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Skilled Cleaning</h3>
                <p className="text-muted-foreground">Trained professionals delivering exceptional results.</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Regular Home Cleaning</h3>
                <p className="text-muted-foreground">Scheduled maintenance cleaning for consistent results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Behind The Home Master Company Stories */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-0 items-center rounded-3xl overflow-hidden">
              {/* Left Content - White Background */}
              <div className="bg-white px-8 lg:px-12 py-12 lg:py-24 relative z-10">
                {/* Section Label */}
                <div className="flex items-center gap-2 mb-6">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold tracking-wider text-gray-500">
                    What we do
                  </span>
                </div>
                
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6 leading-tight max-w-2xl">
                  Behind The Home{" "}
                  <span className="text-green-600">Master Company</span>{" "}
                  Stories.
                </h2>
                
                {/* Description */}
                <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                  We help people live and work in cleaner, healthier spaces with dependable, professional cleaning always tailored to what you need.
                </p>
                
                {/* Statistics */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* Active Clients */}
                  <div>
                    <div className="w-16 h-16 rounded-full border-2 border-green-600 flex items-center justify-center mb-4">
                      {/* Vacuum cleaner icon */}
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <rect x="4" y="6" width="16" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 10h8M6 18h12" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="10" cy="11" r="1.5" fill="currentColor" />
                        <circle cx="14" cy="11" r="1.5" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="text-4xl font-display font-bold text-green-600 mb-2">269+</div>
                    <p className="text-sm text-muted-foreground">Active Clients</p>
                  </div>
                  
                  {/* Glorious Years */}
                  <div>
                    <div className="w-16 h-16 rounded-full border-2 border-green-600 flex items-center justify-center mb-4">
                      <Building2 className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-4xl font-display font-bold text-green-600 mb-2">15+</div>
                    <p className="text-sm text-muted-foreground">Glorious Years</p>
                  </div>
                </div>
                
                {/* Secondary Paragraph */}
                <p className="text-base text-muted-foreground mb-8">
                  We put our customers at the heart of everything we do.
                </p>
                
                {/* CTA Button */}
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                  asChild
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 text-green-600" />
                  </Link>
                </Button>
              </div>
              
              {/* Right Image with Fade Effect */}
              <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
                {/* Image */}
                <Image
                  src="/cleanign/08544b4d8a96cf5bb65e5cc93a8a9a1f.jpg"
                  alt="Professional cleaner"
                  fill
                  className="object-cover"
                />
                
                {/* Fade gradient from left (white) to right (transparent) */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent pointer-events-none" />
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
              Get <span className="text-green-600">Cleaner Space In Four Steps</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "1", title: "Provide Your Details", description: "Fill out our simple form with your cleaning requirements." },
                { number: "2", title: "Pick a Suitable Plan", description: "Choose the cleaning plan that best fits your needs." },
                { number: "3", title: "We Scope Cleaned", description: "Our team arrives and performs thorough cleaning." },
                { number: "4", title: "Enjoy Happy & Relax", description: "Sit back and enjoy your sparkling clean space." },
              ].map((step, index) => (
                <div key={index} className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-display font-bold mb-6">
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
                  We Make Your Home <span className="text-green-600">Sparkle And Shine</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our professional cleaning team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-foreground font-medium">100% Satisfaction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
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
        {/* <section className="py-24 bg-background">
          <div className="max-w-content">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-16">
              We Have A <span className="text-green-600">Expert Team To Serve You.</span>
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
        </section> */}

        {/* Hear What Our Global Clients Say */}
        <section className="py-24 bg-white">
          <div className="max-w-content">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-16">
              Hear What Our <span className="text-green-600">Global Clients Say</span>
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
                    <Star key={i} className="w-6 h-6 fill-green-600 text-green-600" />
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
        <section id="contact" className="py-24 bg-green-600 text-white">
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
                  <Button variant="default" size="lg" className="w-full bg-white text-green-600 hover:bg-white/90">
                    Book an Appointment
                  </Button>
                </form>
              </div>
              
              <div className="relative h-[600px] rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/60">Cleaner Professional Image</span>
                </div>
                <div className="absolute bottom-6 right-6 bg-green-600/90 backdrop-blur-sm px-6 py-4 rounded-xl">
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
              Learn About Our <span className="text-green-600">Latest News From Blog.</span>
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
                    <Link href="/blog" className="text-green-600 font-medium hover:underline flex items-center gap-2">
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
                Join Our Newsletter <span className="text-green-600">Stay Up To Date</span>
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
