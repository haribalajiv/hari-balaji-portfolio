import { projects } from '../lib/data';
import { Section, SectionLabel, Reveal } from './Section';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionLabel>Featured Projects</SectionLabel>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight max-w-3xl mb-6 text-balance">
          Things I've built while learning what AI can really do.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-muted max-w-2xl mb-16">
          Each project here taught me something concrete — from CNN + LSTM hybrids to LLM-powered document workflows.
        </p>
      </Reveal>

      <div className="space-y-8">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 0.08}>
            <article className="group rounded-2xl border border-line bg-card overflow-hidden lift">
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-ink">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-accent bg-ink/70 backdrop-blur px-2.5 py-1 rounded-full border border-accent/30">
                    Project / {p.index}
                  </div>
                </div>

                <div className="lg:col-span-7 p-7 sm:p-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="font-display text-2xl sm:text-3xl leading-tight text-[#efece4] text-balance">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:rotate-12 transition-all shrink-0" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                        Problem
                      </div>
                      <p className="text-sm text-[#bdbab1] leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                        Key Features
                      </div>
                      <ul className="space-y-1">
                        {p.features.map((f) => (
                          <li key={f} className="text-sm text-[#bdbab1] flex gap-2">
                            <span className="text-accent">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                        Learnings
                      </div>
                      <ul className="space-y-1">
                        {p.learnings.map((l) => (
                          <li key={l} className="text-sm text-[#bdbab1] flex gap-2">
                            <span className="text-accent">•</span>
                            <span>{l}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="font-mono text-[11px] px-2 py-0.5 rounded-full border border-line text-[#efece4] bg-ink"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
