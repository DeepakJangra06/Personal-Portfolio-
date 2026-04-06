import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) return null;

  return (
    <section className="relative pt-12 pb-24 overflow-hidden min-h-screen">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]" />
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* BACK */}
        <Link
          to="/"
          onClick={() =>
            sessionStorage.setItem("scrollTarget", `project-${project.slug}`)
          }
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-sky-400 transition mb-16"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to projects
        </Link>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-28 text-center max-w-4xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-[11px] text-[var(--accent)] mb-6">
            {project.subtitle}
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-8 text-[var(--text-primary)]">
            {project.title}
          </h1>

          <p className="text-lg text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
            {project.overview}
          </p>
        </motion.div>

        {/* IMAGE */}
        {project.image && (
          <div className="mb-36">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-2xl border border-[var(--border-color)]"
            />
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-24 mb-36">
          <FlowBlock title="Problem" items={project.problem} />
          <FlowBlock title="Solution" items={project.solution} />
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          <FlowBlock title="Architecture" items={project.architecture} />
          <FlowBlock title="Impact" items={project.impact} />
        </div>

        <div className="mt-36 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[var(--text-primary)]">
            Technologies Used
          </h2>
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur p-6 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              {project.tech.split(/[·\+]/).map((tech, i) => (
                <motion.span
                  key={tech}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2.5 + (i * 0.4),
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-sky-400/10 border border-sky-400/20 text-sky-400"
                >
                  {tech.trim()}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function FlowBlock({ title, items }) {
  return (
    <div>
      {/* CENTERED HEADING */}
      <h2 className="text-2xl font-semibold mb-14 text-center text-[var(--text-primary)]">
        {title}
      </h2>

      <div className="relative space-y-10 pl-8">

        {/* vertical line */}
        <div className="absolute left-[10px] top-3 bottom-3 w-px bg-[var(--border-color)]" />

        {items.map((item, i) => (
          <div key={i} className="relative flex gap-6 items-stretch">
            
            {/* node */}
            <span className="w-3 h-3 rounded-full bg-sky-400 shrink-0 self-center" />

            {/* card */}
            <div className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur p-5 text-[var(--text-secondary)] text-sm leading-relaxed">
              {item}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
