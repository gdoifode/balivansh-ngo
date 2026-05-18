import {
  HandCoins,
  Landmark,
  Zap,
  GraduationCap,
  Droplets,
  Wheat,
  CloudSun,
  ShieldAlert,
} from "lucide-react";
import demands from "@/data/demands.json";

const iconMap: Record<string, React.ElementType> = {
  HandCoins,
  Landmark,
  Zap,
  GraduationCap,
  Droplets,
  Wheat,
  CloudSun,
  ShieldAlert,
};

export default function DemandsPage() {
  return (
    <>
      <section className="bg-earth-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-50 font-marathi">
            आमच्या मागण्या
          </h1>
          <p className="text-field-400 tracking-widest uppercase text-sm mt-2">
            OUR DEMANDS
          </p>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-field-500 via-saffron-500 to-field-500 rounded-full" />
          <p className="mt-6 text-earth-300 max-w-2xl mx-auto">
            शासनाकडे आमच्या प्रमुख मागण्या खालीलप्रमाणे आहेत. These are our
            key demands to the government.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demands.map((demand, i) => {
              const Icon = iconMap[demand.icon] || Wheat;
              return (
                <div
                  key={demand.id}
                  className="group p-6 bg-white rounded-2xl border border-earth-200 hover:border-field-300 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-field-50 group-hover:bg-field-100 flex items-center justify-center transition-colors">
                        <Icon className="text-field-600" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-field-600 bg-field-50 px-2 py-0.5 rounded">
                          #{i + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold font-marathi text-earth-800">
                        {demand.title}
                      </h3>
                      <p className="text-xs text-earth-500 mb-3">
                        {demand.titleEn}
                      </p>
                      <p className="text-earth-600 font-marathi text-sm leading-relaxed">
                        {demand.description}
                      </p>
                      <p className="mt-2 text-earth-400 text-xs leading-relaxed">
                        {demand.descriptionEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-saffron-600 to-saffron-700">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl font-bold text-white font-marathi">
            &ldquo;शेतकरी नाही तर अन्न नाही, कापड नाही&rdquo;
          </p>
          <p className="mt-3 text-saffron-100 text-lg">
            &ldquo;No Farmers, No Food, No Clothes&rdquo;
          </p>
          <p className="mt-6 text-saffron-200 font-marathi text-xl">
            #जय_बळीवंश
          </p>
        </div>
      </section>
    </>
  );
}
