export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg-primary)] border-t border-[var(--border-color)]">

      {/* Subtle gradient overlay for visual separation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 flex flex-col items-center text-center gap-5 relative">
        <p className="text-sm text-[var(--text-secondary)]">
          Deepak Jangra — Full Stack Developer
        </p>

        <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
          <a
            href="mailto:dpkjangra.011@gmail.com"
            className="hover:text-sky-400 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/DeepakJangra06"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-jangra-d06"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-[11px] text-[var(--text-muted)] mt-1">
          © {new Date().getFullYear()} Deepak Jangra · Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}
