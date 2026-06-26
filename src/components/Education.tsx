import { education } from '../lib/data';
import { Section, SectionLabel, Reveal } from './Section';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <Section id="education">
      <Reveal>
        <SectionLabel>Education</SectionLabel>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight mb-14 text-balance">
          My academic journey so far.
        </h2>
      </Reveal>

      <div className="relative">
        <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-line" />
        <div className="space-y-8">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="relative pl-12 sm:pl-16">
                <div className="absolute left-0 sm:left-2 top-1 w-6 h-6 rounded-full bg-ink border border-accent/60 grid place-items-center">
                  <GraduationCap className="w-3 h-3 text-accent" />
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
                  {e.period}
                </div>
                <h3 className="font-display text-2xl text-[#efece4] mb-1 text-balance">
                  {e.degree}
                </h3>
                <div className="text-[#bdbab1] mb-1">{e.institution}</div>
                <div className="font-mono text-xs text-accent">{e.score}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
