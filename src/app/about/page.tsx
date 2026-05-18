import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, MapPin, Users, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-earth-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-50 font-marathi">
            आमच्याबद्दल
          </h1>
          <p className="text-field-400 tracking-widest uppercase text-sm mt-2">
            ABOUT US
          </p>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-field-500 via-saffron-500 to-field-500 rounded-full" />
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold font-marathi text-earth-800 mb-4">
              बळीवंश चळवळ म्हणजे काय?
            </h2>
            <p className="text-earth-600 leading-relaxed mb-6 font-marathi">
              बळीवंश चळवळ ही महाराष्ट्रातील बुलढाणा जिल्ह्यातील सिंदखेडराजा व
              देऊळगाव राजा तालुक्यांमधील शेतकऱ्यांसाठी लढणारी एक जनचळवळ आहे.
              विदर्भ-मराठवाड्यातील शेतकऱ्यांवर दुष्काळ, अपुरा पाऊस, वन्य
              प्राण्यांचे पिकांवरील हल्ले, आणि अपुऱ्या शासकीय मदतीमुळे
              ओढवलेल्या संकटांविरुद्ध ही चळवळ उभी आहे.
            </p>

            <h3 className="text-xl font-bold text-earth-700 mb-3">
              What is Balivansh Chalval?
            </h3>
            <p className="text-earth-600 leading-relaxed mb-6">
              Balivansh Chalval is a grassroots people&apos;s movement fighting
              for the rights of farmers in the Sindkhed Raja and Deulgaon Raja
              talukas of Buldhana district, Maharashtra. The movement stands
              against the compounding crises faced by farmers in the
              Vidarbha-Marathwada region — drought, inadequate rainfall, wild
              animal crop destruction, and insufficient government relief.
            </p>
            <p className="text-earth-600 leading-relaxed mb-6">
              What started as a local effort has grown into a movement with the
              support of over 90 villages. Our &quot;Ek Panati&quot; (One Lamp)
              campaign on Diwali 2023 saw farmers across the region light a lamp
              in solidarity, sending a powerful message to the government that
              the concessions offered under the drought relief package were
              woefully inadequate.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-earth-100/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-earth-200 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-field-50 flex items-center justify-center mb-4">
              <Target className="text-field-600" size={28} />
            </div>
            <h3 className="text-xl font-bold font-marathi text-earth-800 mb-2">
              आमचे ध्येय (Mission)
            </h3>
            <p className="text-earth-600 font-marathi leading-relaxed">
              शेतकऱ्यांच्या हक्कांसाठी लढणे, त्यांना शासनाकडून योग्य मदत
              मिळवून देणे, दुष्काळ निवारणासाठी प्रयत्न करणे, आणि शेतकऱ्यांच्या
              पिकांना योग्य भाव मिळवून देणे.
            </p>
            <p className="mt-3 text-earth-500 text-sm">
              To fight for farmer rights, secure government assistance, advocate
              for drought relief, and ensure fair crop prices for farming
              communities.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-earth-200 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-saffron-50 flex items-center justify-center mb-4">
              <Eye className="text-saffron-600" size={28} />
            </div>
            <h3 className="text-xl font-bold font-marathi text-earth-800 mb-2">
              आमची दृष्टी (Vision)
            </h3>
            <p className="text-earth-600 font-marathi leading-relaxed">
              शेतकऱ्यांना स्वाभिमानाने जगता यावे, त्यांच्या श्रमाला योग्य मोबदला
              मिळावा, आणि ग्रामीण भागातील शेतकरी कुटुंबांना सुरक्षित व समृद्ध
              भविष्य मिळावे.
            </p>
            <p className="mt-3 text-earth-500 text-sm">
              A future where farmers live with dignity, receive fair compensation
              for their labor, and farming families in rural areas have a secure
              and prosperous future.
            </p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="प्रमुख माहिती" titleEn="KEY FACTS" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: MapPin,
                label: "कार्यक्षेत्र / Region",
                value:
                  "सिंदखेडराजा व देऊळगाव राजा, बुलढाणा जिल्हा, महाराष्ट्र",
              },
              {
                icon: Users,
                label: "पोहोच / Reach",
                value: "90+ गावे, 1000+ शेतकरी कुटुंबे",
              },
              {
                icon: Target,
                label: "मुख्य विषय / Focus",
                value:
                  "दुष्काळ निवारण, पीक भाव, कर्ज माफी, वन्य प्राणी बंदोबस्त",
              },
              {
                icon: Calendar,
                label: "स्थापना / Since",
                value: "2023",
              },
            ].map((fact, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-earth-50 rounded-xl border border-earth-200"
              >
                <div className="w-10 h-10 rounded-lg bg-field-50 flex items-center justify-center flex-shrink-0">
                  <fact.icon className="text-field-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-earth-500 uppercase tracking-wider">
                    {fact.label}
                  </p>
                  <p className="text-earth-700 font-marathi mt-1">
                    {fact.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
