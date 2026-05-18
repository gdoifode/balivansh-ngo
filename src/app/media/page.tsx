import Image from "next/image";
import media from "@/data/media.json";
import { Newspaper } from "lucide-react";

export default function MediaPage() {
  return (
    <>
      <section className="bg-earth-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-50 font-marathi">
            मीडिया कव्हरेज
          </h1>
          <p className="text-field-400 tracking-widest uppercase text-sm mt-2">
            MEDIA COVERAGE
          </p>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-field-500 via-saffron-500 to-field-500 rounded-full" />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {media.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-earth-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[250px]">
                  <Image
                    src={item.image}
                    alt={item.headlineEn}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Newspaper size={16} className="text-field-600" />
                    <span className="text-sm font-semibold text-field-600 font-marathi">
                      {item.publication}
                    </span>
                    {item.page && (
                      <span className="text-xs text-earth-400">
                        | {item.page}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-earth-400 mb-3">
                    {new Date(item.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="text-xl font-bold font-marathi text-earth-800 mb-2 leading-tight">
                    {item.headline}
                  </h2>
                  <p className="text-sm text-earth-500 italic mb-4">
                    {item.headlineEn}
                  </p>
                  <p className="text-earth-600 font-marathi leading-relaxed">
                    {item.summary}
                  </p>
                  <p className="mt-2 text-earth-500 text-sm">
                    {item.summaryEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
