import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ProjectDetail from "./pages/ProjectDetail";

import "./index.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative bg-[var(--bg-primary)] overflow-hidden transition-colors duration-500">
                {/* Background Glows */}
                <div className="pointer-events-none fixed inset-0 z-0">
                  <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-glow)] blur-[120px] rounded-full animate-pulse-slow" />
                  <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--accent-glow)] blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>

                <div className="relative z-10">
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                  <Footer />
                </div>
              </div>
            </motion.div>
          }
        />

        <Route
          path="/projects/:slug"
          element={
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectDetail />
              <Footer />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
