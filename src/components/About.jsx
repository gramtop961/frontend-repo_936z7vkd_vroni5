import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-black py-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/5 px-3 py-1 text-xs tracking-wide text-cyan-300 shadow-[0_0_16px_rgba(0,229,255,0.35)] ring-1 ring-cyan-400/30">
          <User className="h-3.5 w-3.5" /> About Me
        </div>
        <div className="rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-950/40 to-cyan-900/10 p-6 shadow-[0_0_28px_rgba(0,229,255,0.25)] ring-1 ring-cyan-400/20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white" style={{textShadow:'0 0 18px rgba(0,229,255,0.5)'}}>
                Crafting immersive, performant products
              </h2>
              <p className="mt-3 text-cyan-100/80">
                I’m a full‑stack developer specializing in modern web technologies. I love blending delightful
                aesthetics with robust engineering—bringing ideas to life with clean code, scalable systems,
                and a focus on the details that matter.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'React / Next.js',
                  'TypeScript',
                  'Node.js',
                  'Python / FastAPI',
                  'Tailwind CSS',
                  'MongoDB',
                ].map((skill) => (
                  <li key={skill} className="rounded-lg border border-cyan-400/30 bg-cyan-500/5 px-3 py-2 text-sm text-cyan-200 shadow-[0_0_14px_rgba(0,229,255,0.25)]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-40 w-40 rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-900/40 to-black shadow-[0_0_22px_rgba(0,229,255,0.35)] ring-1 ring-cyan-400/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
