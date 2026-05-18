import Link from "next/link";
import { ExternalLink, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-earth-900 border-t border-earth-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-earth-50 font-marathi mb-3">
              बळीवंश चळवळ
            </h3>
            <p className="text-earth-400 text-sm leading-relaxed">
              शेतकऱ्यांसाठी लढणारी चळवळ. सिंदखेडराजा व देऊळगाव राजा,
              बुलढाणा जिल्हा, महाराष्ट्र.
            </p>
            <p className="text-earth-500 text-xs mt-3">
              A grassroots farmer welfare movement from Buldhana, Maharashtra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-earth-50 mb-3">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/work", label: "Our Work" },
                { href: "/demands", label: "Our Demands" },
                { href: "/support", label: "Support Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-earth-400 hover:text-saffron-400 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-earth-50 mb-3">संपर्क</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919665558999"
                className="flex items-center gap-2 text-earth-400 hover:text-saffron-400 text-sm transition-colors"
              >
                <Phone size={16} />
                <span>+91 96655 58999</span>
              </a>
              <a
                href="tel:+917030125130"
                className="flex items-center gap-2 text-earth-400 hover:text-saffron-400 text-sm transition-colors"
              >
                <Phone size={16} />
                <span>+91 70301 25130</span>
              </a>
              <a
                href="mailto:ganeshmdoifode@gmail.com"
                className="flex items-center gap-2 text-earth-400 hover:text-saffron-400 text-sm transition-colors"
              >
                <Mail size={16} />
                <span>ganeshmdoifode@gmail.com</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551057593710"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-earth-400 hover:text-saffron-400 text-sm transition-colors"
              >
                <ExternalLink size={16} />
                <span>Facebook Page</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-earth-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-earth-500 text-xs">
            &copy; {new Date().getFullYear()} बळीवंश चळवळ (Balivansh Chalval).
            All rights reserved.
          </p>
          <p className="text-earth-600 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-saffron-500" /> for
            farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
