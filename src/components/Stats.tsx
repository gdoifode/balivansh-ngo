"use client";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  number: string;
  label: string;
  labelEn: string;
}

function StatItem({ number, label, labelEn }: StatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="text-4xl sm:text-5xl font-bold text-saffron-400 font-display">
        {number}
      </div>
      <div className="mt-2 text-earth-100 font-marathi text-lg">{label}</div>
      <div className="text-earth-400 text-sm">{labelEn}</div>
    </div>
  );
}

export default function Stats() {
  const stats: StatProps[] = [
    { number: "90+", label: "गावांचा पाठिंबा", labelEn: "Villages Responded" },
    { number: "54+", label: "गावांमधून आंदोलन", labelEn: "Villages in Protest" },
    { number: "3+", label: "वृत्तपत्र कव्हरेज", labelEn: "Newspaper Coverage" },
    { number: "1000+", label: "शेतकरी कुटुंबे", labelEn: "Farmer Families" },
  ];

  return (
    <section className="bg-earth-800/50 py-16">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} />
        ))}
      </div>
    </section>
  );
}
