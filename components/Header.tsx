export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-8">
      <span className="text-lg font-bold tracking-wide text-white">
        7FS
      </span>
      <a
        href="#checkout"
        className="rounded-lg bg-gold px-4 py-2 text-xs font-bold uppercase text-white shadow-md transition-colors hover:bg-gold-hover"
        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
      >
        Need Help? Click Here
      </a>
    </header>
  );
}
