import { motion } from "framer-motion";
import { useState } from "react";

const backendBaseUrl = (import.meta.env.VITE_BACKEND_URL || "").trim().replace(/\/$/, "");
const sendEmailEndpoint = backendBaseUrl ? `${backendBaseUrl}/send-email` : "/send-email";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch(sendEmailEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const raw = await res.text();
      let data = null;

      if (raw) {
        try {
          data = JSON.parse(raw);
        } catch {
          data = null;
        }
      }

      if (!res.ok) {
        const backendMessage =
          data?.message ||
          (raw && !raw.trim().startsWith("<") ? raw : "") ||
          "Unable to send message right now. Please try again later.";
        throw new Error(backendMessage);
      }

      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-2 gap-24 items-start"
      >
        {/* LEFT */}
        <div className="max-w-xl">
          <p className="uppercase tracking-[0.3em] text-[11px] text-[var(--accent)] mb-8">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-10 text-[var(--text-primary)]">
            Let’s build something
            <span className="text-sky-400"> meaningful</span>.
          </h2>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-14">
            Open to internships, full-time roles, and serious collaborations.
            If you have a role or project worth discussing, feel free to reach out.
          </p>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 text-sm text-[var(--text-secondary)] font-mono">
            <p className="text-sky-400/70 mb-3">contact.info</p>
            <p>• Email: dpkjangra.011@gmail.com</p>
            <p>• Location: Gurugram , Haryana </p>
            <p>• Availability: Open to opportunities</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur p-8">
          {success ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <div className="w-12 h-12 rounded-full bg-green-400/10 text-green-400 flex items-center justify-center mb-6">
                ✓
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">Message sent</h3>
              <p className="text-[var(--text-secondary)] max-w-sm">
                Thanks for reaching out. I’ll get back to you soon.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />

              <Input
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />

              <Input
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />

              <Textarea
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or role…"
                required
              />

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-semibold transition ${loading
                    ? "bg-white/20 text-slate-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-sky-400 to-cyan-300 text-black hover:opacity-90"
                  }`}
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-sky-400 outline-none transition"
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2">
        {label}
      </label>
      <textarea
        rows="4"
        {...props}
        className="w-full p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-sky-400 outline-none transition resize-none"
      />
    </div>
  );
}
