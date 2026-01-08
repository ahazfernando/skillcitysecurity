"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

interface NavigationProps {
  logo?: string | any; // Can be a string path or imported image
  navLinks?: Array<{ href: string; label: string }>;
  contactHref?: string;
}

const Navigation = ({ 
  logo, 
  navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/technology", label: "Technology" },
  ],
  contactHref = "/contact"
}: NavigationProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div
          className={`bg-white/95 backdrop-blur-md rounded-full px-4 lg:px-6 py-3 flex items-center justify-between transition-all duration-300 border border-gray-100 ${
            scrolled ? "shadow-lg" : "shadow-sm"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {logo ? (
              typeof logo === 'string' ? (
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-8 sm:h-10 w-auto"
                />
              ) : (
                <Image 
                  src={logo} 
                  alt="Logo" 
                  className="h-8 sm:h-10 w-auto"
                  width={120}
                  height={40}
                />
              )
            ) : (
              <span className="text-xl font-bold">Logo</span>
            )}
          </Link>

          {/* Desktop Navigation - Pill Style */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-50 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              className="rounded-full bg-orange-500 hover:bg-orange-600 text-white gap-2"
              asChild
            >
              <Link href={contactHref}>
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-900" />
            ) : (
              <Menu className="w-5 h-5 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
              <Button
                className="rounded-full bg-orange-500 hover:bg-orange-600 text-white gap-2 w-full"
                asChild
              >
                <Link href={contactHref} onClick={() => setMobileMenuOpen(false)}>
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

export default Navigation;
