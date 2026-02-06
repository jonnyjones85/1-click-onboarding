"use client";

export default function CTAButton({
  main = "Download The Install Pack For Just $47.00!",
  sub = "Install Now And Get Instant Access",
  className = "",
}: {
  main?: string;
  sub?: string;
  className?: string;
}) {
  return (
    <a
      href="#checkout"
      className={`animate-rocking inline-block rounded-md bg-gradient-to-b from-[#ff9800] to-[#f57c00] px-10 py-4 text-center uppercase tracking-wide text-[#002A6A] shadow-lg transition-colors hover:from-[#f57138] hover:to-[#f57138] ${className}`}
    >
      <span className="block text-lg font-bold md:text-xl">{main}</span>
      {sub && (
        <span className="block text-xs font-semibold text-[#002A6A]">
          {sub}
        </span>
      )}
    </a>
  );
}
