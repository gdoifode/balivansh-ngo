"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "मुख्यपृष्ठ", labelEn: "Home" },
  { href: "/about", label: "आमच्याबद्दल", labelEn: "About" },
  { href: "/work", label: "आमचे कार्य", labelEn: "Our Work" },
  { href: "/gallery", label: "गॅलरी", labelEn: "Gallery" },
  { href: "/media", label: "मीडिया", labelEn: "Media" },
  { href: "/demands", label: "मागण्या", labelEn: "Demands" },
  { href: "/support", label: "पाठिंबा", labelEn: "Support" },
  { href: "/contact", label: "संपर्क", labelEn: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-earth-900/95 backdrop-blur-md border-b border-field-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-field-500 to-field-700 flex items-center justify-center text-white font-bold text-lg sm:text-xl font-marathi shadow-lg group-hover:scale-105 transition-transform">
              ब
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-earth-50 font-marathi leading-tight">
                बळीवंश चळवळ
              </h1>
              <p className="text-xs text-field-400 tracking-wider">
                BALIVANSH CHALVAL
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-earth-200 hover:text-saffron-400 hover:bg-earth-800/50 rounded-lg transition-all font-marathi"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-earth-200 hover:text-saffron-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-earth-900/98 backdrop-blur-lg border-t border-earth-700/50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-earth-200 hover:text-saffron-400 hover:bg-earth-800/50 rounded-lg transition-all font-marathi text-base"
              >
                {link.label}
                <span className="text-xs text-earth-500 ml-2">
                  {link.labelEn}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
