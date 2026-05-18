interface SectionHeadingProps {
  title: string;
  titleEn?: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  titleEn,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-3xl sm:text-4xl font-bold font-marathi ${
          light ? "text-earth-50" : "text-earth-800"
        }`}
      >
        {title}
      </h2>
      {titleEn && (
        <p
          className={`text-sm tracking-widest uppercase mt-1 ${
            light ? "text-field-400" : "text-field-600"
          }`}
        >
          {titleEn}
        </p>
      )}
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl mx-auto text-base ${
            light ? "text-earth-300" : "text-earth-600"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-field-500 via-saffron-500 to-field-500 rounded-full" />
    </div>
  );
}
