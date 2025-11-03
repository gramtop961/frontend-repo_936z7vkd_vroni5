import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import JourneyContact from './components/JourneyContact.jsx';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      {/* Minimal neon navbar */}
      <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="inline-flex items-center gap-2 text-cyan-200 hover:text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_16px_rgba(0,229,255,0.35)] ring-1 ring-cyan-400/20">
              <Rocket className="h-4 w-4" />
            </span>
            <span className="font-semibold tracking-wide">Neonfolio</span>
          </a>
          <nav className="hidden gap-6 text-sm text-cyan-200 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Portfolio</a>
            <a href="#journey" className="hover:text-white">Journey</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-lg bg-cyan-400/20 px-4 py-2 text-sm text-cyan-100 ring-1 ring-cyan-300/50 transition hover:bg-cyan-400/30 hover:text-white hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] md:inline-block"
          >
            Hire Me
          </a>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </header>

      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <JourneyContact />

      {/* Footer */}
      <footer className="relative bg-black py-10 text-center text-cyan-300/80">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <p>
          © {new Date().getFullYear()} Your Name. Crafted with a neon glow.
        </p>
      </footer>
    </div>
  );
}

export default App;
