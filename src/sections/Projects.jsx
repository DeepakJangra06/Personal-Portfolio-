import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Projects() {

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");

    if (target) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200);
      }
      sessionStorage.removeItem("scrollTarget");
    }
  }, []);

  return (
    <section id="projects" className="section-container relative">
      <div className="relative">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-32">
          <p className="uppercase tracking-[0.3em] text-[11px] text-[var(--accent)] mb-8">
            Projects
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-10 text-[var(--text-primary)]">
            Systems built with
            <span className="text-sky-400"> real-world impact</span>.
          </h2>

          <p className="text-lg text-[var(--text-secondary)]">
            A selection of projects showcasing full-stack engineering,
            system design, and AI-powered development.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-44">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              id={`project-${project.slug}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center"
            >

              {/* IMAGE */}
              <div
                className={`relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)]
                ${index % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className={`${index % 2 !== 0 ? "lg:order-1" : ""} max-w-xl`}>
                <p className="uppercase tracking-[0.25em] text-[11px] text-[var(--accent)] mb-6">
                  {project.subtitle}
                </p>

                <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--text-primary)]">
                  {project.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-lg mb-8">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-2 mb-12">
                  {project.tech.split(/[·\+]/).map((tech, i) => (
                    <motion.span
                      key={tech}
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        y: {
                          duration: 2 + (i * 0.5),
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-sky-400/10 border border-sky-400/20 text-sky-400"
                    >
                      {tech.trim()}
                    </motion.span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/projects/${project.slug}`}
                    onClick={() =>
                      sessionStorage.setItem(
                        "scrollTarget",
                        `project-${project.slug}`
                      )
                    }
                    className="
                      inline-flex items-center gap-2
                      px-7 py-3 rounded-xl
                      bg-gradient-to-r from-sky-400 to-cyan-300
                      text-black font-semibold
                      hover:opacity-90
                      transition
                    "
                  >
                    View Case Study
                    <span>→</span>
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-7 py-3 rounded-xl
                        border border-[var(--border-color)]
                        text-[var(--text-primary)]
                        hover:border-sky-400
                        hover:bg-sky-400/10
                        transition
                      "
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-7 py-3 rounded-xl
                        border border-[var(--border-color)]
                        text-[var(--text-primary)]
                        hover:border-sky-400
                        hover:bg-sky-400/10
                        transition
                      "
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
