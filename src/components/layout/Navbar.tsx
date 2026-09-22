"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10",
          isMobileMenuOpen
            ? "bg-[#001d39]"
            : "bg-primary/95 backdrop-blur-sm",
          isScrolled ? "shadow-md py-3" : "py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 z-50 group"
          >
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
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isActive
                      ? "text-accent after:scale-x-100"
                      : "text-white/90 hover:text-accent"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-white z-50 p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay - positioned as direct sibling to header so fixed inset-0 covers full viewport */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className={cn(
          "fixed inset-0 z-40 bg-[#001d39] lg:hidden transition-all duration-300 ease-in-out flex flex-col",
          isMobileMenuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Scrollable content area so all links fit on any screen height */}
        <div className="flex-1 overflow-y-auto overscroll-contain pt-24 pb-8 px-6 flex flex-col justify-between">
          <div className="w-full max-w-sm mx-auto flex flex-col items-center">
            <nav className="w-full flex flex-col items-center space-y-2 sm:space-y-3">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-xl font-heading tracking-wide transition-all duration-200 py-2 px-4 rounded-lg w-full text-center",
                      isActive
                        ? "text-accent font-semibold bg-white/5"
                        : "text-white/90 hover:text-accent hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="w-full pt-6 mt-4 border-t border-white/10 flex flex-col items-center gap-3">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-xs text-center py-2.5 px-6 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors shadow-md text-sm uppercase tracking-wider"
              >
                Book Consultation
              </Link>
              <p className="text-white/40 text-xs tracking-widest uppercase text-center mt-1">
                Lawyer • Policy • Host • Author
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
