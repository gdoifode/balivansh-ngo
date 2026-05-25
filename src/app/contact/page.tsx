"use client";
import { useState } from "react";
import { Phone, Mail, ExternalLink, MessageCircle, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-earth-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-50 font-marathi">संपर्क करा</h1>
          <p className="text-field-400 tracking-widest uppercase text-sm mt-2">CONTACT US</p>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-field-500 via-saffron-500 to-field-500 rounded-full" />
          <p className="mt-4 text-earth-400 text-sm">मुख्यपृष्ठ &gt; संपर्क</p>
        </div>
      </section>

      {/* Phone / Location / Email Bar */}
      <section className="py-12 px-4 bg-white border-b border-earth-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Phone className="mx-auto text-field-600 mb-3" size={36} />
            <h3 className="font-bold text-earth-800 text-lg">Phone</h3>
            <p className="text-earth-600 mt-1">बळिवंश लोकचळवळ</p>
            <a href="tel:+919665558999" className="text-field-600 font-bold text-lg hover:text-field-500 transition-colors">+91 96655 58999</a>
            <br />
            <a href="tel:+917030125130" className="text-field-600 font-bold text-lg hover:text-field-500 transition-colors">+91 70301 25130</a>
          </div>
          <div>
            <MapPin className="mx-auto text-field-600 mb-3" size={36} />
            <h3 className="font-bold text-earth-800 text-lg">Location</h3>
            <p className="text-earth-600 mt-1 font-marathi">
              सिंदखेडराजा व देऊळगाव राजा,<br />
              बुलढाणा जिल्हा, महाराष्ट्र 443001
            </p>
          </div>
          <div>
            <Mail className="mx-auto text-field-600 mb-3" size={36} />
            <h3 className="font-bold text-earth-800 text-lg">Email</h3>
            <a href="mailto:ganeshmdoifode@gmail.com" className="text-field-600 hover:text-field-500 transition-colors">ganeshmdoifode@gmail.com</a>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold font-marathi text-earth-800 mb-6">संदेश पाठवा</h2>
            {submitted ? (
              <div className="p-8 bg-field-50 rounded-2xl border border-field-200 text-center">
                <div className="w-16 h-16 rounded-full bg-field-100 mx-auto flex items-center justify-center mb-4">
                  <Send className="text-field-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-field-700 font-marathi">संदेश पाठवला!</h3>
                <p className="mt-2 text-earth-600">Thank you for your message. We will get back to you soon.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", mobile: "", message: "" }); }} className="mt-4 text-field-600 hover:text-field-500 font-semibold text-sm">Send another message</button>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="name / नाव"
                  className="w-full px-4 py-3 bg-white border-b-2 border-earth-300 focus:border-field-500 focus:outline-none transition-all text-earth-800"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email / ईमेल"
                  className="w-full px-4 py-3 bg-white border-b-2 border-earth-300 focus:border-field-500 focus:outline-none transition-all text-earth-800"
                />
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="mobile / मोबाइल"
                  className="w-full px-4 py-3 bg-white border-b-2 border-earth-300 focus:border-field-500 focus:outline-none transition-all text-earth-800"
                />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="message / संदेश"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-b-2 border-earth-300 focus:border-field-500 focus:outline-none transition-all text-earth-800 resize-none"
                />
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-earth-800 hover:bg-earth-700 text-white font-bold rounded transition-all uppercase tracking-wider"
                >
                  Submit
                </button>
                <p className="text-xs text-earth-400">* Contact form will be connected soon. Please reach us via phone or WhatsApp.</p>
              </div>
            )}
          </div>

          {/* Google Map */}
          <div>
            <h2 className="text-2xl font-bold font-marathi text-earth-800 mb-6">आमचे ठिकाण</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-earth-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60056.28158584059!2d76.1679!3d20.2818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd8144b1b000001%3A0x6d77c6e7c56a3b41!2sSindkhed%20Raja%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 px-4 bg-earth-100/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-marathi text-earth-800 mb-6 text-center">सोशल मीडिया</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <a href="https://wa.me/919665558999" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-green-400 hover:shadow-md transition-all">
              <MessageCircle className="text-green-600" size={28} />
              <span className="text-sm font-semibold text-earth-700">WhatsApp</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61551057593710" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-blue-400 hover:shadow-md transition-all">
              <ExternalLink className="text-blue-600" size={28} />
              <span className="text-sm font-semibold text-earth-700">Facebook</span>
            </a>
            <a href="https://www.instagram.com/balivansh_lokchalval_" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-pink-400 hover:shadow-md transition-all">
              <ExternalLink className="text-pink-600" size={28} />
              <span className="text-sm font-semibold text-earth-700">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/117724199" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-blue-400 hover:shadow-md transition-all">
              <ExternalLink className="text-blue-700" size={28} />
              <span className="text-sm font-semibold text-earth-700">LinkedIn</span>
            </a>
            <a href="mailto:ganeshmdoifode@gmail.com" className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-saffron-400 hover:shadow-md transition-all">
              <Mail className="text-saffron-600" size={28} />
              <span className="text-sm font-semibold text-earth-700">Email</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
