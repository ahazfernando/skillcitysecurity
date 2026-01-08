import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@skillcity.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (234) 567-890",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Global Headquarters",
    description: "123 Innovation Street, Suite 100",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday",
    description: "9:00 AM - 6:00 PM EST",
  },
];

const Contact = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 bg-hero-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
          
          <div className="max-w-content relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className={cn(
                "inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Contact Us
              </span>
              <h1 className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8 transition-all duration-700 delay-100",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Let&apos;s Start a
                <span className="block mt-2 text-gradient-hero">Conversation</span>
              </h1>
              <p className={cn(
                "text-xl text-white/70 leading-relaxed transition-all duration-700 delay-200",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                Have a question, need more information, or ready to get started? 
                We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="max-w-content">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <div className="text-foreground font-medium mb-1">
                      {item.content}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section ref={formRef} className="py-24 bg-section-gradient">
          <div className="max-w-content">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left - Info */}
              <div className={cn(
                "transition-all duration-700",
                formVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}>
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  Get in Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-[1.1] mb-6">
                  Ready to Transform
                  <span className="block mt-2 text-accent">Your Organization?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours. 
                  We&apos;re here to help you achieve your goals.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">Free initial consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">Customized solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">Expert guidance</span>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className={cn(
                "transition-all duration-700 delay-200",
                formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}>
                <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-card border border-border shadow-lg">
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs..."
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
