import Image from "next/image";
import Link from "next/link";
import Stats from "@/components/Stats";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRight,
  Wheat,
  Droplets,
  ShieldAlert,
  HandHeart,
} from "lucide-react";
import activities from "@/data/activities.json";

export default function Home() {
  const recentActivities = activities.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/andolan.jpg"
            alt="Balivansh Lokchalval Movement"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/90 via-earth-900/85 to-earth-900/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="opacity-0 animate-fade-in-up">
            <img
              src="/images/logo.jpg"
              alt="बळिवंश लोकचळवळ Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-2xl mx-auto mb-6 border-4 border-field-500/30"
            />
          </div>

          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <div className="inline-block mb-4 px-4 py-2 bg-field-600/30 backdrop-blur-sm border border-field-500/30 rounded-full">
              <span className="text-field-300 text-sm tracking-wider">
                जय बळिवंश | JAY BALIVANSH
              </span>
            </div>
          </div>

          <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-5xl sm:text-7xl md:text-8xl font-black text-earth-50 font-marathi leading-tight">
            बळिवंश लोकचळवळ
          </h1>

          <p className="opacity-0 animate-fade-in-up animation-delay-400 mt-4 text-xl sm:text-2xl md:text-3xl text-saffron-300 font-marathi">
            शेतकऱ्यांचा शास्वत विकास
          </p>

          <p className="opacity-0 animate-fade-in-up animation-delay-600 mt-6 text-earth-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A grassroots farmer welfare movement fighting for drought relief,
            fair crop pricing, and agricultural rights in Buldhana district,
            Maharashtra.
          </p>

          <div className="opacity-0 animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/work"
              className="px-8 py-3.5 bg-field-600 hover:bg-field-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-field-600/25 hover:shadow-field-500/40 flex items-center gap-2"
            >
              आमचे कार्य पहा
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/support"
              className="px-8 py-3.5 bg-saffron-500/20 hover:bg-saffron-500/30 text-saffron-300 border border-saffron-500/40 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              <HandHeart size={18} />
              पाठिंबा द्या
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-earth-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-earth-400/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Key Issues */}
      <section className="py-20 px-4 bg-earth-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="आम्ही कशासाठी लढतो"
            titleEn="WHAT WE FIGHT FOR"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Droplets,
                title: "दुष्काळ निवारण",
                titleEn: "Drought Relief",
                desc: "सिंदखेडराजा व देऊळगाव राजा तालुक्यांना दुष्काळग्रस्त घोषित करण्याची मागणी",
              },
              {
                icon: Wheat,
                title: "पीक भाव",
                titleEn: "Fair Crop Prices",
                desc: "सोयाबीन ला ७००० आणि कापसाला १०००० रुपये क्विंटल भाव मिळावा",
              },
              {
                icon: ShieldAlert,
                title: "वन्य प्राणी बंदोबस्त",
                titleEn: "Wild Animal Control",
                desc: "रोही (नीलगाय) मुळे पिकांचे होणारे नुकसान थांबवण्यासाठी कार्यवाही",
              },
              {
                icon: HandHeart,
                title: "कर्ज माफी",
                titleEn: "Loan Waiver",
                desc: "दुष्काळी तालुक्यातील शेतकऱ्यांचे सर्व प्रकारचे कर्ज माफ करावे",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 bg-white rounded-2xl border border-earth-200 hover:border-field-300 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-field-50 group-hover:bg-field-100 flex items-center justify-center mb-4 transition-colors">
                  <item.icon className="text-field-600" size={28} />
                </div>
                <h3 className="text-lg font-bold font-marathi text-earth-800">
                  {item.title}
                </h3>
                <p className="text-xs text-field-600 uppercase tracking-wider mb-2">
                  {item.titleEn}
                </p>
                <p className="text-earth-600 text-sm font-marathi leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-20 px-4 bg-earth-800">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="आमचे अलीकडील कार्य"
            titleEn="RECENT ACTIVITIES"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentActivities.map((activity) => (
              <Link
                href="/work"
                key={activity.id}
                className="group rounded-2xl overflow-hidden bg-earth-700/50 border border-earth-600/30 hover:border-field-500/50 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 bg-field-600/80 backdrop-blur-sm text-white text-xs rounded-full">
                      {activity.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-earth-400 mb-2">
                    {new Date(activity.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-lg font-bold text-earth-100 font-marathi group-hover:text-saffron-400 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="mt-2 text-earth-400 text-sm line-clamp-2">
                    {activity.descriptionEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-saffron-400 hover:text-saffron-300 font-semibold transition-colors"
            >
              सर्व कार्य पहा / View All Activities
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-field-700 to-field-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-saffron-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-field-300 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-marathi">
            शेतकऱ्यांच्या लढ्यात सामील व्हा
          </h2>
          <p className="mt-2 text-field-200 text-lg">
            Join the Fight for Farmer Rights
          </p>
          <p className="mt-6 text-field-100/80 max-w-xl mx-auto">
            आपल्या पाठिंब्याने आम्ही शेतकऱ्यांचे जीवन बदलू शकतो. Your
            support can make a real difference in the lives of thousands of
            farming families.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/support"
              className="px-8 py-3.5 bg-saffron-500 hover:bg-saffron-400 text-white rounded-xl font-bold transition-all shadow-lg"
            >
              पाठिंबा द्या / Support Us
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-all"
            >
              संपर्क करा / Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
