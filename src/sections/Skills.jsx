import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-[1fr_1.4fr] gap-24 items-start"
      >
        {/* LEFT — TEXT */}
        <div>
          <p className="uppercase tracking-[0.3em] text-[11px] text-sky-400/60 mb-8">
            Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-10 max-w-xl">
            A practical stack built for
            <span className="text-sky-400"> real-world engineering</span>.
          </h2>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            My technical skill set reflects a balance between strong programming
            fundamentals, modern full-stack development, and AI-driven systems.
            I focus on tools that scale beyond demos and remain maintainable in
            production environments.
          </p>
        </div>

        {/* RIGHT — SKILLS GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Core Engineering"
            skills={["Java", "JavaScript"]}
            delay={0}
            index={0}
          />
          <SkillCard
            title="Frontend"
            skills={["React", "HTML", "CSS"]}
            delay={0.1}
            index={1}
          />
          <SkillCard
            title="Databases & Cloud"
            skills={["Firebase", "MongoDB", "MySQL"]}
            delay={0.2}
            index={2}
          />
          <SkillCard
            title="Tooling"
            skills={["Git", "Jenkins", "VS Code"]}
            delay={0.3}
            index={3}
          />
        </div>
      </motion.div>
    </section>
  );
}

function SkillCard({ title, skills, delay, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        y: {
          duration: 3 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut"
        },
        duration: 0.5,
        delay
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="h-full rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card)] backdrop-blur p-6 hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-400/10 transition-all duration-300"
    >
      <p className="text-[var(--text-primary)] font-semibold mb-4 text-lg">{title}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              y: {
                duration: 2 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut"
              },
              duration: 0.3,
              delay: delay + i * 0.05
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-3 py-1.5 rounded-full text-xs bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-sky-400/60 hover:text-[var(--text-primary)] transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
