import Image from "next/image";
import activities from "@/data/activities.json";

export default function WorkPage() {
  return (
    <>
      <section className="bg-earth-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-50 font-marathi">
            आमचे कार्य
          </h1>
          <p className="text-field-400 tracking-widest uppercase text-sm mt-2">
            OUR WORK
          </p>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-field-500 via-saffron-500 to-field-500 rounded-full" />
          <p className="mt-6 text-earth-300 max-w-2xl mx-auto">
            बळीवंश चळवळीने शेतकऱ्यांच्या हक्कांसाठी केलेले प्रमुख कार्य आणि
            आंदोलने.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {activities.map((activity, i) => (
            <div
              key={activity.id}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={activity.image}
                    alt={activity.titleEn}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-field-600/90 backdrop-blur-sm text-white text-xs rounded-full capitalize">
                      {activity.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-sm text-field-600 font-semibold mb-2">
                  {new Date(activity.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-2xl font-bold font-marathi text-earth-800 mb-2">
                  {activity.title}
                </h2>
                <p className="text-sm text-earth-500 italic mb-4">
                  {activity.titleEn}
                </p>
                <p className="text-earth-600 font-marathi leading-relaxed mb-3">
                  {activity.description}
                </p>
                <p className="text-earth-500 text-sm leading-relaxed">
                  {activity.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
