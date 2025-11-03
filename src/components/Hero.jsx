import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Background grid / circuit lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.15) 1px, transparent 1px)",
          backgroundSize: '48px 48px, 48px 48px',
          backgroundPosition: 'center',
        }}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-16 pt-28 md:flex-row md:gap-12 md:pb-24 md:pt-36">
        {/* Left: headline and actions */}
        <div className="relative z-10 w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/5 px-3 py-1 text-xs tracking-wide text-cyan-300 shadow-[0_0_20px_rgba(0,229,255,0.35)] ring-1 ring-cyan-400/30">
            <Rocket className="h-3.5 w-3.5" /> Futuristic Portfolio
          </div>
          <h1
            className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
            style={{ textShadow: '0 0 24px rgba(0,229,255,0.6), 0 0 48px rgba(0,229,255,0.25)' }}
          >
            Hi, I’m <span className="text-cyan-300">Your Name</span>
            <br />
            Building High‑Tech Experiences
          </h1>
          <p className="mt-5 max-w-xl text-cyan-100/80">
            Developer with a passion for crafting immersive, high‑performance interfaces and robust backends.
            Focused on clean architecture, elegant motion, and delightful user experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400/20 px-5 py-3 font-medium text-cyan-100 ring-1 ring-cyan-300/50 transition hover:bg-cyan-400/30 hover:text-white hover:shadow-[0_0_24px_rgba(0,229,255,0.6)]"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-transparent px-5 py-3 font-medium text-cyan-200 ring-1 ring-cyan-300/40 transition hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_24px_rgba(0,229,255,0.6)]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Spline scene */}
        <div className="relative z-0 h-[380px] w-full md:h-[520px] md:w-1/2">
          {/* Glow gradient overlay (does not block interaction) */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(0,229,255,0.35),transparent_60%)]" />
          <Spline
            scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Bottom subtle divider glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_16px_rgba(0,229,255,0.6)]" />
    </section>
  );
}
