import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, cycleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide navbar on project detail pages
  if (location.pathname.startsWith("/projects/")) {
    return null;
  }

  return (
    <nav className="fixed top-0 w-full z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-primary)]/70 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
      
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg font-semibold tracking-wider text-[var(--text-primary)]"
          >
            DJ
          </a>

          {/* LINKS */}
          <div className="hidden md:flex items-center gap-10 text-sm text-[var(--text-secondary)]">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = item === "Home" ? 0 : document.getElementById(item.toLowerCase());
                  if (target === 0) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hover:text-[var(--text-primary)] transition"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* THEME TOGGLE */}
            <button
              onClick={cycleTheme}
              className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-sky-400 transition flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]"
              title={`Theme: ${theme}`}
            >
              {theme === "default" && (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span className="hidden sm:inline">Default</span>
                </>
              )}
              {theme === "dark" && (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
              {theme === "light" && (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden sm:inline">Light</span>
                </>
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("contact");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden md:inline-flex items-center px-6 py-2 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
