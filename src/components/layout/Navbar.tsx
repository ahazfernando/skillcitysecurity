"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Story", path: "/our-story" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = pathname === "/";

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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="max-w-content mx-auto px-4 lg:px-8">
        <div
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
            {navLinks.map((link) => (
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
            ))}
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
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive(link.path)
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                  )}
                >
                  {link.name}
                </Link>
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
