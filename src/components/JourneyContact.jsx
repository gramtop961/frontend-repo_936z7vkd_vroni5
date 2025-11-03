import React from 'react';
import { Calendar, Mail, Github, Linkedin, Send } from 'lucide-react';

const timeline = [
  { year: '2021', title: 'Started Freelancing', desc: 'Built landing pages and dashboards for startups.' },
  { year: '2022', title: 'Full‑Stack Focus', desc: 'Shipped data‑heavy apps with real‑time features.' },
  { year: '2023', title: '3D & Motion', desc: 'Integrated Spline and motion design for immersive UX.' },
  { year: '2024', title: 'Scaling Products', desc: 'Led architecture and performance initiatives.' },
];

export default function JourneyContact() {
  return (
    <section id="journey" className="relative bg-black py-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/5 px-3 py-1 text-xs tracking-wide text-cyan-300 shadow-[0_0_16px_rgba(0,229,255,0.35)] ring-1 ring-cyan-400/30">
            <Calendar className="h-3.5 w-3.5" /> Timeline Journey
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white" style={{textShadow:'0 0 18px rgba(0,229,255,0.5)'}}>
            Growth & Milestones
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-4 top-0 h-full w-px bg-cyan-400/40 shadow-[0_0_14px_rgba(0,229,255,0.35)] sm:left-1/2" />
          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <div key={item.year} className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                <div className={`sm:pr-10 ${idx % 2 === 0 ? 'sm:order-1' : 'sm:order-2 sm:pl-10'}`}>
                  <div className="rounded-xl border border-cyan-400/40 bg-cyan-500/5 p-5 shadow-[0_0_24px_rgba(0,229,255,0.25)] ring-1 ring-cyan-400/20">
                    <div className="text-sm font-semibold text-cyan-300">{item.year}</div>
                    <div className="mt-1 text-lg font-bold text-white">{item.title}</div>
                    <p className="mt-1 text-cyan-100/80">{item.desc}</p>
                  </div>
                </div>
                <div className={`${idx % 2 === 0 ? 'sm:order-2' : 'sm:order-1'}`}>
                  <div className="hidden sm:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div id="contact">
          <h3 className="mb-6 text-2xl font-bold text-white" style={{textShadow:'0 0 16px rgba(0,229,255,0.5)'}}>
            Let’s build something together
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <form
              className="rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-950/40 to-cyan-900/10 p-6 shadow-[0_0_28px_rgba(0,229,255,0.25)] ring-1 ring-cyan-400/20"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md border border-cyan-400/30 bg-black/60 px-3 py-2 text-sm text-cyan-100 placeholder-cyan-200/50 outline-none ring-1 ring-cyan-400/10 focus:border-cyan-300/60 focus:ring-cyan-300/40"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-cyan-400/30 bg-black/60 px-3 py-2 text-sm text-cyan-100 placeholder-cyan-200/50 outline-none ring-1 ring-cyan-400/10 focus:border-cyan-300/60 focus:ring-cyan-300/40"
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full rounded-md border border-cyan-400/30 bg-black/60 px-3 py-2 text-sm text-cyan-100 placeholder-cyan-200/50 outline-none ring-1 ring-cyan-400/10 focus:border-cyan-300/60 focus:ring-cyan-300/40"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400/20 px-4 py-2 font-medium text-cyan-100 ring-1 ring-cyan-300/50 transition hover:bg-cyan-400/30 hover:text-white hover:shadow-[0_0_24px_rgba(0,229,255,0.6)]"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </div>
            </form>

            <div className="rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-950/40 to-cyan-900/10 p-6 shadow-[0_0_28px_rgba(0,229,255,0.25)] ring-1 ring-cyan-400/20">
              <p className="text-cyan-100/80">
                Prefer email or socials? Reach out directly and I’ll respond soon.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-cyan-200 hover:text-white">
                  <Mail className="h-4 w-4" /> hello@example.com
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-cyan-200 hover:text-white">
                  <Github className="h-4 w-4" /> github.com/yourhandle
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-cyan-200 hover:text-white">
                  <Linkedin className="h-4 w-4" /> linkedin.com/in/yourhandle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
