"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, Building2, Users, HelpCircle, Quote, XCircle, BookOpen, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Story", path: "/our-story" },
  { name: "Services", path: "/services", hasSubmenu: true },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const quickLinks = [
  { name: "Facility Solutions", path: "/services/cleaning", icon: Building2, description: "Comprehensive facility management services to maintain and enhance your business spaces." },
  { name: "Recruitment", path: "/services/recruitment", icon: Users, description: "Expert recruitment services connecting exceptional talent with outstanding opportunities." },
  { name: "Security Services", path: "/services/security", icon: Shield, description: "Professional security services to protect your people, property, and assets." },
  { name: "Plumbing Services", path: "/services/plumbing", icon: Wrench, description: "Licensed plumbing services for residential and commercial properties." },
];

const otherPages = [
  { name: "FAQ", path: "/contact", icon: HelpCircle, description: "Find answers to frequently asked questions about our services." },
  { name: "Testimonials", path: "/about", icon: Quote, description: "Read what our clients have to say about working with us." },
  { name: "Contact us", path: "/contact", icon: XCircle, description: "Get in touch with our team for inquiries and support." },
  { name: "How we Started", path: "/about", icon: BookOpen, description: "Discover our journey and the story behind Skill City." },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [navBarBottom, setNavBarBottom] = useState(0);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
      if (navBarRef.current) {
        const rect = navBarRef.current.getBoundingClientRect();
        setNavBarBottom(rect.bottom);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    window.addEventListener("scroll", updateHeaderHeight);
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      window.removeEventListener("scroll", updateHeaderHeight);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Check if click is outside both the Services button and the submenu
      const isOutsideButton = servicesMenuRef.current && !servicesMenuRef.current.contains(target);
      const isOutsideSubmenu = !(target as Element).closest('[data-submenu]');
      
      if (servicesMenuOpen && isOutsideButton && isOutsideSubmenu) {
        setServicesMenuOpen(false);
      }
    };

    if (servicesMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesMenuOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="max-w-content mx-auto px-4 lg:px-8">
        <div
          ref={navBarRef}
          className={cn(
            "backdrop-blur-md rounded-full px-4 lg:px-6 py-3 flex items-center justify-between transition-all duration-300 border bg-white/95 border-gray-100",
            scrolled ? "shadow-lg" : "shadow-sm"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/home/SkillCityGroupofComapniesLogo.png"
              alt="Skill City Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Pill Style */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-50/80 dark:bg-gray-900/50 rounded-full px-2 py-1">
            {navLinks.map((link) => {
              if (link.hasSubmenu) {
                return (
                  <div
                    key={link.path}
                    ref={servicesMenuRef}
                    className="relative"
                    onMouseEnter={() => setServicesMenuOpen(true)}
                  >
                    <button
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1",
                        isActive(link.path) || servicesMenuOpen
                          ? "bg-primary text-white"
                          : "text-gray-600 hover:text-gray-900 hover:bg-white dark:text-gray-300 dark:hover:text-white"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        servicesMenuOpen && "rotate-180"
                      )} />
                    </button>
                    
                    {/* Services Submenu */}
                    {servicesMenuOpen && (
                      <div 
                        className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none"
                        style={{ top: `${navBarBottom}px` }}
                        data-submenu
                      >
                        <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 pointer-events-auto">
                          <div className="bg-white rounded-t-none rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative" data-submenu>
                            {/* Close Button */}
                            <button
                              onClick={() => setServicesMenuOpen(false)}
                              className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900"
                              aria-label="Close menu"
                            >
                              <X className="w-5 h-5" />
                            </button>
                            
                            <div className="flex">
                          {/* Left Panel - Background Image */}
                          <div 
                            className="w-1/3 bg-primary p-8 flex flex-col justify-between rounded-l-2xl relative overflow-hidden"
                            style={{
                              backgroundImage: 'url(/recruitmen/220895530d23643e410218c4ad9613ec.jpg)',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat'
                            }}
                          >
                            <div className="relative z-10">
                              <h3 className="text-white text-2xl font-semibold mb-2 font-sans drop-shadow-lg">
                                Want to know more about what we can do to your <span className="italic">Business</span>?
                              </h3>
                            </div>
                            <Button
                              className="rounded-lg bg-white hover:bg-white/90 text-primary w-full mt-6 relative z-10"
                              asChild
                            >
                              <Link href="/contact">Book a Free Consultation</Link>
                            </Button>
                          </div>

                          {/* Right Panel - White with Links */}
                          <div className="w-2/3 p-8">
                            <div className="grid grid-cols-2 gap-8">
                              {/* Quick Links Column */}
                              <div>
                                <h4 className="text-gray-900 font-semibold text-sm mb-6 uppercase tracking-wider">
                                  Our Services
                                </h4>
                                <div className="space-y-6">
                                  {quickLinks.map((quickLink, index) => {
                                    const Icon = quickLink.icon;
                                    return (
                                      <Link
                                        key={`quick-${quickLink.name}-${index}`}
                                        href={quickLink.path}
                                        className="flex items-start gap-3 group"
                                        onClick={() => setServicesMenuOpen(false)}
                                      >
                                        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                                          <Icon className="w-5 h-5 text-accent" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-gray-900 font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                                            {quickLink.name}
                                          </div>
                                          <div className="text-gray-500 text-xs leading-relaxed">
                                            {quickLink.description}
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Other Pages Column */}
                              <div>
                                <h4 className="text-gray-900 font-semibold text-sm mb-6 uppercase tracking-wider">
                                  Other Pages
                                </h4>
                                <div className="space-y-6">
                                  {otherPages.map((page, index) => {
                                    const Icon = page.icon;
                                    return (
                                      <Link
                                        key={`other-${page.name}-${index}`}
                                        href={page.path}
                                        className="flex items-start gap-3 group"
                                        onClick={() => setServicesMenuOpen(false)}
                                      >
                                        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                                          <Icon className="w-5 h-5 text-accent" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-gray-900 font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                                            {page.name}
                                          </div>
                                          <div className="text-gray-500 text-xs leading-relaxed">
                                            {page.description}
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    isActive(link.path)
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white dark:text-gray-300 dark:hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2"
              asChild
            >
              <Link href="/contact">
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full transition-colors hover:bg-gray-50 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between",
                      isActive(link.path)
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.hasSubmenu && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                      {quickLinks.map((quickLink, index) => (
                        <Link
                          key={`mobile-quick-${quickLink.name}-${index}`}
                          href={quickLink.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {quickLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2 w-full"
                asChild
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
