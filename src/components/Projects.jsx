import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon UI System',
    desc: 'A cyberpunk-inspired component library with glowing accents and motion.',
    tags: ['React', 'Tailwind', 'Framer'],
    url: '#',
    repo: '#',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Live metrics visualizations with websockets and smooth transitions.',
    tags: ['Vite', 'TypeScript', 'FastAPI'],
    url: '#',
    repo: '#',
  },
  {
    title: '3D Experience',
    desc: 'Interactive product walkthrough using Spline and WebGL shaders.',
    tags: ['Spline', 'Three.js'],
    url: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-white" style={{textShadow:'0 0 18px rgba(0,229,255,0.5)'}}>
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-950/40 to-cyan-900/10 p-5 shadow-[0_0_28px_rgba(0,229,255,0.25)] ring-1 ring-cyan-400/20 transition hover:shadow-[0_0_44px_rgba(0,229,255,0.45)]"
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(0,229,255,0.18),transparent_60%)]" />
              <div className="relative">
                <div className="mb-4 h-36 w-full rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-900/40 to-black shadow-[0_0_18px_rgba(0,229,255,0.25)]" />
                <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-cyan-100/80">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-cyan-400/30 bg-cyan-500/5 px-2 py-1 text-xs text-cyan-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.url}
                    className="group inline-flex items-center gap-2 rounded-md bg-cyan-400/20 px-3 py-2 text-sm text-cyan-100 ring-1 ring-cyan-300/50 transition hover:bg-cyan-400/30 hover:text-white hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]"
                  >
                    Live Demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-2 rounded-md bg-transparent px-3 py-2 text-sm text-cyan-200 ring-1 ring-cyan-300/40 transition hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
