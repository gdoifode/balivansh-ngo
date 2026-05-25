"use client";
import Link from "next/link";
import { ExternalLink, Phone, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-earth-900 border-t border-earth-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-earth-50 font-marathi mb-3">{t("बळिवंश लोकचळवळ", "Balivansh Lokchalval")}</h3>
            <p className="text-earth-400 text-sm leading-relaxed">{t("शेतकऱ्यांचा शास्वत विकास. सिंदखेडराजा व देऊळगाव राजा, बुलढाणा जिल्हा, महाराष्ट्र.", "Sustainable Development of Farmers. Sindkhed Raja & Deulgaon Raja, Buldhana District, Maharashtra.")}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-earth-50 mb-3">{t("द्रुत दुवे", "Quick Links")}</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/about", mr: "आमच्याबद्दल", en: "About Us" },
                { href: "/work", mr: "आमचे कार्य", en: "Our Work" },
                { href: "/demands", mr: "मागण्या", en: "Our Demands" },
                { href: "/support", mr: "पाठिंबा", en: "Support Us" },
                { href: "/contact", mr: "संपर्क", en: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-earth-400 hover:text-saffron-400 text-sm transition-colors">{t(link.mr, link.en)}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-earth-50 mb-3">{t("संपर्क", "Contact")}</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+919665558999" className="flex items-center gap-2 text-earth-400 hover:text-saffron-400 text-sm transition-colors"><Phone size={16} /><span>+91 96655 58999</span></a>
              <a href="tel:+917030125130" className="flex items-center gap-2 text-earth-400 hover:text-saffron-400 text-sm transition-colors"><Phone size={16} /><span>+91 70301 25130</span></a>
              <a href="mailto:ganeshmdoifode@gmail.com" className="flex items-center gap-2 text-earth-400 hover:text-saffron-400 text-sm transition-colors"><Mail size={16} /><span>ganeshmdoifode@gmail.com</span></a>
              <a href="https://www.facebook.com/profile.php?id=61551057593710" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-earth-400 hover:text-saffron-400 text-sm transition-colors"><ExternalLink size={16} /><span>Facebook</span></a>
              <a href="https://www.instagram.com/balivansh_lokchalval_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-earth-400 hover:text-saffron-400 text-sm transition-colors"><ExternalLink size={16} /><span>Instagram</span></a>
              <a href="https://www.linkedin.com/company/117724199" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-earth-400 hover:text-saffron-400 text-sm transition-colors"><ExternalLink size={16} /><span>LinkedIn</span></a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-earth-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-earth-500 text-xs">&copy; {new Date().getFullYear()} {t("बळिवंश लोकचळवळ", "Balivansh Lokchalval")}. {t("सर्व हक्क राखीव.", "All rights reserved.")}</p>
          <p className="text-earth-600 text-xs flex items-center gap-1">Made with <Heart size={12} className="text-saffron-500" /> for farmers</p>
        </div>
      </div>
    </footer>
  );
}
