import { experiences } from '../lib/data';
import { Section, SectionLabel, Reveal } from './Section';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionLabel>Internship Experience</SectionLabel>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight max-w-3xl mb-14 text-balance">
          Hands-on time spent learning how AI is built in the real world.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        {experiences.map((e, idx) => (
          <Reveal key={e.role} delay={idx * 0.1}>
            <div className="lift h-full p-7 rounded-xl border border-line bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg border border-line bg-ink grid place-items-center text-accent">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Internship
                </div>
              </div>
              <h3 className="font-display text-2xl text-[#efece4] mb-1">{e.role}</h3>
              <div className="font-mono text-sm text-accent mb-5">
                {e.company} <span className="text-muted">— {e.location}</span>
              </div>
              <ul className="space-y-2">
                {e.points.map((p) => (
                  <li key={p} className="text-sm text-[#bdbab1] flex gap-2 leading-relaxed">
                    <span className="text-accent mt-1">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
