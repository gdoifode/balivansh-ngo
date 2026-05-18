"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  ExternalLink,
  MessageCircle,
  MapPin,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Formspree or Web3Forms
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-earth-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-50 font-marathi">
            संपर्क
          </h1>
          <p className="text-field-400 tracking-widest uppercase text-sm mt-2">
            CONTACT US
          </p>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-field-500 via-saffron-500 to-field-500 rounded-full" />
          <p className="mt-6 text-earth-300 max-w-2xl mx-auto">
            आमच्याशी संपर्क साधा. Get in touch with us.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold font-marathi text-earth-800 mb-6">
              संपर्क माहिती
            </h2>

            <div className="space-y-5">
              <a
                href="tel:+919999999999"
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-earth-200 hover:border-field-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-field-50 group-hover:bg-field-100 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="text-field-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-earth-400 uppercase tracking-wider">
                    Phone / फोन
                  </p>
                  <p className="text-earth-700 font-semibold">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-earth-200 hover:border-field-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-field-50 group-hover:bg-field-100 flex items-center justify-center flex-shrink-0 transition-colors">
                  <MessageCircle className="text-field-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-earth-400 uppercase tracking-wider">
                    WhatsApp / व्हॉट्सॲप
                  </p>
                  <p className="text-earth-700 font-semibold">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact@balivansh.org"
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-earth-200 hover:border-field-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-saffron-50 group-hover:bg-saffron-100 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="text-saffron-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-earth-400 uppercase tracking-wider">
                    Email / ईमेल
                  </p>
                  <p className="text-earth-700 font-semibold">
                    contact@balivansh.org
                  </p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61551057593710"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-earth-200 hover:border-field-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center flex-shrink-0 transition-colors">
                  <ExternalLink className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-earth-400 uppercase tracking-wider">
                    Facebook / फेसबुक
                  </p>
                  <p className="text-earth-700 font-semibold">
                    बळीवंश चळवळ Page
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-earth-200">
                <div className="w-11 h-11 rounded-lg bg-earth-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-earth-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-earth-400 uppercase tracking-wider">
                    Location / ठिकाण
                  </p>
                  <p className="text-earth-700 font-marathi">
                    सिंदखेडराजा व देऊळगाव राजा,
                    <br />
                    बुलढाणा जिल्हा, महाराष्ट्र
                  </p>
                  <p className="text-earth-500 text-sm mt-1">
                    Sindkhed Raja & Deulgaon Raja, Buldhana, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold font-marathi text-earth-800 mb-6">
              संदेश पाठवा
            </h2>

            {submitted ? (
              <div className="p-8 bg-field-50 rounded-2xl border border-field-200 text-center">
                <div className="w-16 h-16 rounded-full bg-field-100 mx-auto flex items-center justify-center mb-4">
                  <Send className="text-field-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-field-700 font-marathi">
                  संदेश पाठवला!
                </h3>
                <p className="mt-2 text-earth-600">
                  Thank you for your message. We will get back to you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 text-field-600 hover:text-field-500 font-semibold text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="p-6 bg-white rounded-2xl border border-earth-200">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-earth-700 mb-1">
                      नाव / Name <span className="text-saffron-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="तुमचे नाव"
                      className="w-full px-4 py-3 bg-earth-50 border border-earth-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-field-500/50 focus:border-field-400 transition-all text-earth-800"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-earth-700 mb-1">
                      ईमेल / Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-earth-50 border border-earth-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-field-500/50 focus:border-field-400 transition-all text-earth-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-earth-700 mb-1">
                      संदेश / Message{" "}
                      <span className="text-saffron-500">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="तुमचा संदेश लिहा..."
                      rows={5}
                      className="w-full px-4 py-3 bg-earth-50 border border-earth-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-field-500/50 focus:border-field-400 transition-all text-earth-800 resize-none"
                      required
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-3.5 bg-field-600 hover:bg-field-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-field-600/20 hover:shadow-field-500/30 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    संदेश पाठवा / Send Message
                  </button>
                </div>

                <p className="mt-4 text-xs text-earth-400 text-center">
                  * Contact form will be connected soon. In the meantime, please
                  reach us via phone or Facebook.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
