import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-40">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-28 items-start"
      >

        {/* LEFT — EDUCATION TIMELINE */}
        <div>
          <p className="uppercase tracking-[0.3em] text-[11px] text-[var(--accent)] mb-12">
            Education
          </p>

          <div className="relative pl-10">

            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[var(--border-color)]" />

            <div className="space-y-14">

              <div className="relative flex items-start gap-6">
                <span className="mt-2 w-4 h-4 rounded-full bg-sky-400 shrink-0" />
                <div className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur p-6">
                  <p className="text-[var(--text-primary)] font-medium">
                    B.E — Computer Science Engineering
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">
                    Chandigarh University
                  </p>
                  <p className="text-[var(--text-muted)] text-xs mt-1">
                    CGPA: 7.12
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <span className="mt-2 w-4 h-4 rounded-full bg-[var(--text-muted)] shrink-0" />
                <div className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur p-6">
                  <p className="text-[var(--text-primary)] font-medium">
                  Class XII - 81%
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">
                    HD SR SEC SCHOOL - JHAJJAR
                  </p>
                </div>
              </div>

              {/* <div className="relative flex items-start gap-6">
                <span className="mt-2 w-4 h-4 rounded-full bg-[var(--text-muted)] shrink-0" />
                <div className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur p-6">
                  <p className="text-[var(--text-primary)] font-medium">
                    Core Programming
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">
                    
                  </p>
                </div>
              </div> */}

            </div>
          </div>
        </div>

        {/* RIGHT — ABOUT CONTENT */}
        <div>
          <p className="uppercase tracking-[0.3em] text-[11px] text-[var(--accent)] mb-8">
            About
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-10 max-w-xl text-[var(--text-primary)]">
            Full Stack
            <span className="text-sky-400"> Developer!</span>
          </h2>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
            As a BE- CSE student with knowledge of CSS, HTML, JavaScript, and Java is proficient in both web development and core programming.
            <br /><br />
            I can create well-structured and styled web pages, add interactive elements using JavaScript, and develop efficient algorithms in Java.
          </p>
        </div>

      </motion.div>
    </section>
  );
}
