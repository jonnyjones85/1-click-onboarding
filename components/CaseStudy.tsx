export default function CaseStudy({
  name,
  tagline,
  paragraphs,
}: {
  name: string;
  tagline: string;
  paragraphs: string[];
}) {
  return (
    <div className="mb-12 rounded-lg border border-navy-light bg-navy-light/50 p-6 md:p-8">
      <h3 className="mb-2 text-xl font-bold text-gold md:text-2xl">{name}</h3>
      <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-400">
        {tagline}
      </p>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-gray-300 leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}
