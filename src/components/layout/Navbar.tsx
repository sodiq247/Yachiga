"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Lawyer", href: "/legal-services" },
  { name: "Policy Analyst", href: "/public-policy" },
  { name: "Event Host", href: "/speaking-events" },
  { name: "Author & Writer", href: "/publications" },
  { name: "Mentorship", href: "/contact" }, // Reusing contact page for now or standard page
  { name: "Media", href: "/media" },
  { name: "Blog", href: "/insights" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary/95 backdrop-blur-sm border-b border-white/10",
        isScrolled
          ? "shadow-md py-3"
          : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className="bg-accent text-primary w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-heading font-bold text-lg md:text-xl transition-transform group-hover:scale-105">
            YT
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-white text-lg md:text-xl font-semibold leading-tight tracking-wide">
              Yachiga Tavershima
            </span>
            <span className="text-accent text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mt-0.5">
              Lawyer • Policy • Host • Author
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-accent text-sm font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-primary/98 backdrop-blur-md flex flex-col justify-center items-center lg:hidden transition-all duration-300 ease-in-out z-40",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center space-y-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-2xl font-heading hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
