"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { href: "/", mr: "मुख्यपृष्ठ", en: "Home" },
  { href: "/about", mr: "आमच्याबद्दल", en: "About" },
  { href: "/work", mr: "आमचे कार्य", en: "Our Work" },
  { href: "/gallery", mr: "गॅलरी", en: "Gallery" },
  { href: "/media", mr: "मीडिया", en: "Media" },
  { href: "/demands", mr: "मागण्या", en: "Demands" },
  { href: "/support", mr: "पाठिंबा", en: "Support" },
  { href: "/contact", mr: "संपर्क", en: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-earth-900/95 backdrop-blur-md border-b border-field-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/images/logo.jpg" alt="बळिवंश लोकचळवळ Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-earth-50 font-marathi leading-tight">{t("बळिवंश लोकचळवळ", "Balivansh Lokchalval")}</h1>
              <p className="text-xs text-field-400 tracking-wider">{t("BALIVANSH LOKCHALVAL", "Farmer Welfare Movement")}</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="px-3 py-2 text-sm text-earth-200 hover:text-saffron-400 hover:bg-earth-800/50 rounded-lg transition-all font-marathi">
                  {lang === "mr" ? link.mr : link.en}
                </Link>
              ))}
            </nav>

            <button onClick={toggleLanguage} className="ml-2 px-3 py-1.5 bg-field-600/30 hover:bg-field-600/50 border border-field-500/30 rounded-full text-xs font-bold text-field-300 hover:text-field-200 transition-all flex items-center gap-1.5">
              <span className={lang === "mr" ? "text-saffron-400" : "text-earth-400"}>MR</span>
              <span className="text-earth-500">|</span>
              <span className={lang === "en" ? "text-saffron-400" : "text-earth-400"}>EN</span>
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-earth-200 hover:text-saffron-400 transition-colors" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-earth-900/98 backdrop-blur-lg border-t border-earth-700/50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="px-4 py-3 text-earth-200 hover:text-saffron-400 hover:bg-earth-800/50 rounded-lg transition-all font-marathi text-base">
                {lang === "mr" ? link.mr : link.en}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
