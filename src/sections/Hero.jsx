import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-22">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* LEFT - PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="/about-photo.png"
                alt="Deepak Jangra"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-center border-4 border-slate-900 scale-110"
              />
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4 text-[var(--text-primary)]">
              DEEPAK JANGRA
            </h1>

            <p className="uppercase tracking-[0.28em] text-[11px] text-[var(--accent)] mb-6">
              Full Stack Developer
            </p>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              I am pursuing a degree <span className="text-[var(--text-primary)] font-medium">Bachelor of engineering in Computer science and engineering</span> at Chandigarh University.
            </p>

            <div className="flex gap-4 mb-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 text-black font-semibold shadow-lg hover:opacity-90 transition"
              >
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download="Deepak_Jangra_Resume.pdf"
                className="px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-sky-400 hover:text-[var(--text-primary)] transition"
              >
                Download
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["Web Development", "HTML · CSS · React"],
                ["Backend", "Node.js · Java"],
                ["CI/CD Pipeline", "Jenkins · Git"],
                ["Databases", "Firebase · MySQL"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur p-3 hover:border-sky-400/60 transition"
                >
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{title}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
