import {
  Heart,
  Share2,
  Users,
  Megaphone,
  HandHeart,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export default function SupportPage() {
  return (
    <>
      <section className="bg-earth-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-50 font-marathi">
            पाठिंबा द्या
          </h1>
          <p className="text-field-400 tracking-widest uppercase text-sm mt-2">
            SUPPORT US
          </p>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-field-500 via-saffron-500 to-field-500 rounded-full" />
          <p className="mt-6 text-earth-300 max-w-2xl mx-auto">
            शेतकऱ्यांच्या लढ्यात तुमचा पाठिंबा अमूल्य आहे. Your support in the
            farmer&apos;s fight is invaluable.
          </p>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="तुम्ही कसा पाठिंबा देऊ शकता?"
            titleEn="HOW CAN YOU SUPPORT?"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Share2,
                title: "शेअर करा",
                titleEn: "Spread the Word",
                desc: "आमचे कार्य सोशल मीडियावर शेअर करा. फेसबुक, व्हॉट्सॲप, आणि इतर माध्यमांतून जास्तीत जास्त लोकांपर्यंत पोहोचा.",
                descEn:
                  "Share our work on social media. Reach more people through Facebook, WhatsApp, and other platforms.",
                color: "field",
              },
              {
                icon: Users,
                title: "स्वयंसेवक व्हा",
                titleEn: "Volunteer",
                desc: "आमच्या चळवळीत सक्रिय सहभाग घ्या. गावागावात जाऊन शेतकऱ्यांशी संवाद साधा.",
                descEn:
                  "Actively participate in our movement. Visit villages and connect with farmers.",
                color: "saffron",
              },
              {
                icon: Megaphone,
                title: "आवाज उठवा",
                titleEn: "Raise Your Voice",
                desc: "शेतकऱ्यांच्या समस्यांबद्दल जनजागृती करा. तुमच्या लोकप्रतिनिधींना शेतकऱ्यांच्या मागण्या सांगा.",
                descEn:
                  "Create awareness about farmer issues. Communicate farmer demands to your elected representatives.",
                color: "earth",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl border border-earth-200 hover:shadow-lg transition-all text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center ${
                    item.color === "field"
                      ? "bg-field-50"
                      : item.color === "saffron"
                      ? "bg-saffron-50"
                      : "bg-earth-100"
                  }`}
                >
                  <item.icon
                    className={`${
                      item.color === "field"
                        ? "text-field-600"
                        : item.color === "saffron"
                        ? "text-saffron-600"
                        : "text-earth-600"
                    }`}
                    size={30}
                  />
                </div>
                <h3 className="text-xl font-bold font-marathi text-earth-800">
                  {item.title}
                </h3>
                <p className="text-xs text-earth-500 uppercase tracking-wider mb-3">
                  {item.titleEn}
                </p>
                <p className="text-earth-600 font-marathi text-sm leading-relaxed">
                  {item.desc}
                </p>
                <p className="mt-2 text-earth-400 text-xs">{item.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 px-4 bg-earth-100/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-saffron-100 mx-auto flex items-center justify-center mb-6">
            <HandHeart className="text-saffron-600" size={36} />
          </div>
          <h2 className="text-3xl font-bold font-marathi text-earth-800">
            आर्थिक पाठिंबा
          </h2>
          <p className="text-field-600 tracking-widest uppercase text-sm mt-1">
            FINANCIAL SUPPORT
          </p>

          <div className="mt-8 p-8 bg-white rounded-2xl border border-earth-200 shadow-sm">
            <p className="text-earth-600 font-marathi leading-relaxed mb-4">
              आम्ही लवकरच ऑनलाइन देणगी पर्याय सुरू करत आहोत. तोपर्यंत कृपया
              आमच्याशी संपर्क साधा.
            </p>
            <p className="text-earth-500 text-sm mb-6">
              We are setting up online donation channels soon. In the meantime,
              please contact us directly for financial support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-field-600 hover:bg-field-500 text-white rounded-xl font-semibold transition-all"
              >
                संपर्क करा / Contact Us
              </Link>
              <a
                href="https://www.facebook.com/profile.php?id=61551057593710"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-earth-100 hover:bg-earth-200 text-earth-700 rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                Facebook <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <p className="mt-6 text-earth-400 text-xs">
            सर्व देणग्यांचा उपयोग केवळ शेतकरी कल्याणाच्या कामासाठी केला जाईल.
            <br />
            All donations will be used exclusively for farmer welfare activities.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4 bg-field-700">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="text-saffron-400 mx-auto mb-4" size={40} />
          <p className="text-2xl sm:text-3xl font-bold text-white font-marathi leading-relaxed">
            &ldquo;एक व्यक्तीचा पाठिंबा लाखो शेतकऱ्यांचे जीवन बदलू
            शकतो&rdquo;
          </p>
          <p className="mt-3 text-field-200">
            &ldquo;One person&apos;s support can change the lives of thousands
            of farmers&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
